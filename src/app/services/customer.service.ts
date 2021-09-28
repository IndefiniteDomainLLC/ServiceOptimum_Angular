import { Injectable } from '@angular/core';
import { Customer } from '../customers/customer';
//import { CUSTOMERS } from '../customers/mock-customers';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

//HTTP
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customersUrl = 'https://us-central1-nitrolicious.cloudfunctions.net/getCustomers';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
   }

  /*
  getCustomers(): Customer[] {
     return CUSTOMERS;
  }*/

  getCustomers(): Observable<Customer[]> {
    this.messageService.add('CustomerService: fetched customers');
    return this.http.get<Customer[]>(this.customersUrl)
     //return of(CUSTOMERS);
  }

  /*getCustomer(id: string): Observable<Customer> {
     this.messageService.add(`CustomerService: fetched customer id=${id}`);
     return of(CUSTOMERS.find(customer => customer.id === id.toString()));
  }*/

  //TODO put in HTTP and retrieve from firebase cloud function API
  

}
