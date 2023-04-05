import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerhomeComponent } from './customer/customerhome/customerhome.component';
import { ApproverhomeComponent } from './approver/approverhome/approverhome.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SigninComponent } from './customer/signin/signin.component';
import { LoginComponent } from './customer/login/login.component';
import { AccountpageComponent } from './customer/accountpage/accountpage.component';
import { CustomeracceptanceComponent } from './approver/customeracceptance/customeracceptance.component';



const routes: Routes = [
  {path:'customerhome',component:CustomerhomeComponent},
  {path:"approverhome",component:ApproverhomeComponent},
  {path:'customerlogin',component:LoginComponent},
  {path:'customersignup',component:SigninComponent},
  {path:'customeraccount',component:AccountpageComponent},
  {path:'customeraccept/:id',component:CustomeracceptanceComponent},
  {path:"",component:HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule 
{ 

}
