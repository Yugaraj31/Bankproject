import { Component } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailid:string=""
  password:string=""

  constructor(public cus:CustomerService,public route:Router){}
  mySubmit(){
    // console.log(this.name,this.gender); 
    const ss = new loginObject(this.emailid,this.password)
    // this.cus.loginService(ss).subscribe(response =>{
      // console.log(response);
    // })
    this.cus.LoginService(ss).subscribe(respose =>{
      console.log(respose)
      if(respose != "0"){
        alert("Login Successfull")
        this.cus.isLogged=true;
        this.cus.userId = respose;
        this.route.navigate(["/customeraccount"]);
      }
      else{
        alert("Wrong Id or Password")
      }
    })

  }
}

export class loginObject{
  username:string;
  password:string;

  constructor(Emailid:string,Password:string){
    this.username = Emailid;
    this.password = Password;
   }

}

