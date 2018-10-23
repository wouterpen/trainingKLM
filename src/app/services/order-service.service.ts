import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  private url = 'http://localhost:8082/api';
  private endpointOrder = 'orders';

  constructor(private httpClient: HttpClient) { }

  getOrders(): Observable<{ any }[]> {
    return this
      .httpClient
      .get<any[]>(`${this.url}/${this.endpointOrder}`);
  }

  addOrder(infoUser: any) {
    return this
      .httpClient
      .post<any>(
        `${this.url}/${this.endpointOrder}`,
        infoUser,
        httpOptions
      );
  }   

}
