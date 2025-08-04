import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {}
  
 private api = 'http://localhost:3000/orders';

  

  postStubOrders(orderData:PizzaOrder):Observable<PizzaOrder>{
    return this.http.post<PizzaOrder>(this.api,orderData)
  }
}
export interface PizzaOrder {
  id?: string;          
  base: string;
  size: string;
  toppings: string[];
}
