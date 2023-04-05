import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerhomeComponent } from './customer/customerhome/customerhome.component';
import { ApproverhomeComponent } from './approver/approverhome/approverhome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CustomernavComponent } from './customer/customernav/customernav.component';
import { ApprovernavComponent } from './approver/approvernav/approvernav.component';
import { SigninComponent } from './customer/signin/signin.component';
import { LoginComponent } from './customer/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AccountpageComponent } from './customer/accountpage/accountpage.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerhomeComponent,
    ApproverhomeComponent,
    NavbarComponent,
    HomepageComponent,
    CustomernavComponent,
    ApprovernavComponent,
    SigninComponent,
    LoginComponent,
    AccountpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
