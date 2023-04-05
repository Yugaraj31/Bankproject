import { Component } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customernav',
  templateUrl: './customernav.component.html',
  styleUrls: ['./customernav.component.css']
})
export class CustomernavComponent {

  constructor(public cus:CustomerService,public route:Router){

  }
  isLoggedOut(){
    this.cus.isLogged = false;
    this.route.navigate(['/customerhome']);
    

  }
  IsLogged = this.cus.isLogged;

}
