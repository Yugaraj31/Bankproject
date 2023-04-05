import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SigninComponent } from './customer/signin/signin.component';
import { sigInObject } from './customer/signin/signin.component';
import { loginObject } from './customer/login/login.component';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(public http:HttpClient) { }
  isLogged:boolean = false;
  userId:number =0;
  //public AddPriscription(Pres:Prescription){
    //const url = `${this.urlAppointment}/AddPrescription`
   // return this.http.post<any>(url,Pres);
  //}

  public SignInService(customer:sigInObject){
    const url = `https://localhost:7165/api/Customer/AddCustomer`;

    return this.http.post<any>(url,customer);
  }

  public LoginService(log:loginObject){
    const url = `https://localhost:7165/api/Customer/CustomerAuthentication`;
    return this.http.post<any>(url,log);
  }

  public GetUserById(id:number){
    const url = `https://localhost:7165/api/Customer/GetCustomerById/${id}`;
    return this.http.get<any>(url);
  }

  public GetAccDetailsById(id:number){
    const url= `https://localhost:7165/api/Customer/GetCustomerAccountById/${id}`;
    return this.http.get<any>(url);
  }
}
