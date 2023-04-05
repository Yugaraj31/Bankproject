import { Component } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  name:string="";
  gender:string=""
  phonenum:string=""
  emailid:string=""
  password:string=""
  dob:string=""
  address:string=""
  state:string=""
  city:string=""
  pincode:string=""
  panid:string=""
  aadharid:string=""
  accountstatus:string=""

  constructor(public cus:CustomerService){}
  mySubmit(){
    console.log(this.name,this.gender);
    const ss = new sigInObject(this.name,this.gender,this.phonenum,this.emailid,this.password,this.dob,this.address,this.state,this.city,this.pincode,this.panid,this.aadharid,"0")
    this.cus.SignInService(ss).subscribe(response =>{
      console.log(response);
    })

  }


}

export class sigInObject{
  name:string;
  gender:string;
  phonenum:string;
  emailid:string;
  password:string;
  dob:string;
  address:string;
  state:string;
  city:string;
  pincode:string;
  panid:string;
  aadharid:string;
  accountstatus:string;

  constructor(Name:string,  Gender:string,Phonenum:string,Emailid:string,Password:string,Dob:string,Address:string,State:string,City:string,Pincode:string,Panid:string,Aadharid:string,Accountstatus:string){
    this.name = Name;
    this.gender = Gender;
    this.phonenum = Phonenum;
    this.emailid = Emailid;
    this.password = Password;
    this.dob = Dob;
    this.address = Address;
    this.state = State;
    this.city  = City;
    this.pincode = Pincode;
    this.panid = Panid;
    this.aadharid = Aadharid;
    this.accountstatus = Accountstatus;
  }

}
