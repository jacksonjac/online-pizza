import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'createOrder', component: CreateOrderComponent },
  { path: 'summary', component: SummaryComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
