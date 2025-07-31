import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {}
  
 private api = 'http://localhost:3000/orders';

   getStubOrders(): Observable<any[]> {
    return this.http.get<any[]>(this.api);
  }

  postStubOrders(orderData:any):Observable<any[]>{
    return this.http.post<any>(this.api,orderData)
  }
}
