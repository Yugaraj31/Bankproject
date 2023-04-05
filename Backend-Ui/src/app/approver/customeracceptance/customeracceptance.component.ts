import { Component,OnInit,OnDestroy } from '@angular/core';
import {Router, ActivatedRoute,ParamMap } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';


@Component({
  selector: 'app-customeracceptance',
  templateUrl: './customeracceptance.component.html',
  styleUrls: ['./customeracceptance.component.css']
})
export class CustomeracceptanceComponent implements OnInit, OnDestroy {
  id: number = 0;
  private sub: any;
  customerDetails:any;

  constructor(private route: ActivatedRoute,public cus:CustomerService, public router:Router) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });

    this.cus.GetParticularCustomer(this.id).subscribe(response =>{
      console.log(response);
      this.customerDetails = response;
    })

  }

  ngOnDestroy() {

    this.sub.unsubscribe();
  }

  onClickAccept(id:number){
console.log(id)
this.cus.PutStatusCustomer(this.id,"1").subscribe(response=>{
  console.log(response);
})
alert("Accepted")
this.router.navigate(["/approverhome"]);
  }

  onClickReject(id:number){
console.log(id);
this.cus.PutStatusCustomer(this.id,"2").subscribe(response=>{
  console.log(response);
})
alert("Rejected")
this.router.navigate(["/approverhome"]);


  }
}