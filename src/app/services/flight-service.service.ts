import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {
  private url: string = "http://localhost:8082/api";
  private endpointFlights: string = "trajects";

  constructor(private httpClient: HttpClient) { }
  getFlights(): Observable<{any}[]> {
    return this
      .httpClient
      .get<any[]>(`${this.url}/${this.endpointFlights}`)
  };

}
