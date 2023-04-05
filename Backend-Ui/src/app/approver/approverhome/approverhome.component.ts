import { Component } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-approverhome',
  templateUrl: './approverhome.component.html',
  styleUrls: ['./approverhome.component.css']
})
export class ApproverhomeComponent {
  unApprovedCustomers:any;
  constructor(public cus:CustomerService,public router:Router){

  }
  ngOnInit(){
    this.cus.GetUnapprovedCustomers().subscribe(response =>{
      console.log(response);
      this.unApprovedCustomers = response;
    })

  }

  onClick(i:number){
    console.log(i);
    this.router.navigate(['/customeraccept', i]);
  }

}
