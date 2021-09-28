import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../customers/customer';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CustomerService }  from '../services/customer.service';


@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})

export class CustomerDetailComponent implements OnInit {

  @Input() customer: Customer;

  constructor(
     private route: ActivatedRoute,
     private customerService: CustomerService,
     private location: Location
  ) {

      const id: string = route.snapshot.params.id;
      console.log("PARAM ID: " + id);
  }


  ngOnInit(): void {
     //this.getCustomer();
  }
  

  /*
  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id']; // (+) converts string 'id' to a number         
      console.log(id);
    });
  }
  */

 /*
  getCustomer(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.customerService.getCustomer(id)
      .subscribe(customer => { 
          this.customer = customer;
          console.log(id);
      }
     );
  }*/

  goBack(): void {
    this.location.back();
  } 


}
