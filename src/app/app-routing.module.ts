import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerDetailComponent }  from './customer-detail/customer-detail.component';

const routes: Routes = [
   { path: 'customers', component: CustomersComponent }, { path: 'dashboard', component: DashboardComponent }, { path: 'detail/:id', component: CustomerDetailComponent },
   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
