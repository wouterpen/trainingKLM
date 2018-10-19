import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PassengerServiceService {
  private url: string = "http://localhost:8082/api";
  private endpointPassengers: string = "airtraffic/passengers";



  constructor(private httpClient: HttpClient) { }
  getPassengers(): Observable<{any}[]> {
    return this
      .httpClient
      .get<any[]>(`${this.url}/${this.endpointPassengers}`)
  };
}
