import { Component } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-accountpage',
  templateUrl: './accountpage.component.html',
  styleUrls: ['./accountpage.component.css']
})
export class AccountpageComponent {
  constructor(public cus:CustomerService){}
  UserDetails:any;
  AccStatus:boolean = false;
  AccDetails:any;

  ngOnInit(){
    this.cus.GetUserById(this.cus.userId).subscribe(response =>{
      console.log(response);
      this.UserDetails = response;
      if(response.accountstatus == '1'){
        this.AccStatus = true;
        this.cus.GetAccDetailsById(this.cus.userId).subscribe(response =>{
          console.log(response);
          this.AccDetails = response;
        })

      }
      else{
        this.AccStatus = false;
      
      }
    })
  }

}
