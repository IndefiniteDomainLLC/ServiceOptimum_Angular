import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from './customer';
//import { CUSTOMERS } from './mock-customers';
import { CustomerService } from '../services/customer.service';
import { MessageService } from '../services/message.service';
import {MatTableModule} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';


 export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }

  export interface CustomerX {
     id: string;
     name: string;
     email: string;
     address: string;
  }

 const ELEMENT_DATA: PeriodicElement[] = [
   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
 ];

  //customersFound: CustomerX[] = [];

 @Component({
   selector: 'app-customers',
   templateUrl: './customers.component.html',
   styleUrls: ['./customers.component.scss']
 })


 export class CustomersComponent implements OnInit {

   customers: Customer[];
   //customers: MatTableDataSource<Customer[]>;

   test = "HEllo, World"

   /*customer : Customer = {
        id: "XYZ",
      name: "John Doe",
     email: "bbmeeks@hotmail.com"
   }*/

   /*
    {"account_number":"0010020000003","address":"2612 TODVILLE RD","business_area":"0","city":"SEABROOK","improvement_value":"0","land_area":"18121","land_value":"860406","market_value":"884766","zip":"77586-3008"}
  */

   //displayedColumns: string[] = ['account_number', 'address', 'business_area','improvement_value','land_area','land_value','market_value'];
   //dataSource : Customer[];
   //dataSource = new MatTableDataSource<Customer[]>();
   //dataSource: MatTableDataSource<any[]>(Customer[]);
    //dataSource = new MatTableDataSource(this.customerService.getCustomers());
    //customerInfoTable : Object[] = [];
    //dataSource = new MatTableDataSource(this.customerInfoTable);
      dataSource = new MatTableDataSource<Customer>();
      

   @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
     @ViewChild(MatSort, {static: true}) sort: MatSort;

  
   constructor(private customerService: CustomerService, private messageService: MessageService) { }

   ngOnInit(): void {
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
     //this.dataSource = this.customerService.getCustomers()
     this.getCustomers();
   }

   ngAfterViewInit() {
     //this.dataSource.paginator = this.paginator;
   }

   /*selectedCustomer: Customer;
  
    onSelect(customer: Customer): void {
       console.log(customer.id);
       this.selectedCustomer = customer;
       this.messageService.add(`Customers Component: Selected customer id=${customer.id}`);
    }
  */

  getCustomers(): void {
     //this.customers = this.customerService.getCustomers();
     this.customerService.getCustomers()
      .subscribe(customers => { 
            //this.customers = customers; 
             //this.dataSource.data = customers;
            this.dataSource = new MatTableDataSource(customers);
             //this.dataSource = new MatTableDataSource<Customer[]>(customers);
       });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 
}
