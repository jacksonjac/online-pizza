import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateOrderComponent } from './create-order/create-order.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"createOrder",component:CreateOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
