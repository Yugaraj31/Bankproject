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
  Accepted:boolean = false;
  Rejected:boolean = false;
  UnApproved:boolean = false;


  ngOnInit(){
    this.cus.GetUserById(this.cus.userId).subscribe(response =>{
      console.log(response);
      this.UserDetails = response;
      if(response.accountstatus == '0'){
        this.UnApproved = true;
      }
      if(response.accountstatus == '1'){
        this.Accepted = true;
      }

      if(response.accountstatus == '2'){
        this.Rejected = true;
      }
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
