import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AirportServiceService {
  private url = 'http://localhost:8082/api';
  private endpointAirport = 'airports';
  private endpointAirportAdd = 'airports';


  constructor(private httpClient: HttpClient) { }


  getAirports(): Observable<{ any }[]> {
    return this
      .httpClient
      .get<any[]>(`${this.url}/${this.endpointAirport}`);
  }

  addAirport(nameAirport: any) {
    return this
      .httpClient
      .post<any>(
        `${this.url}/${this.endpointAirportAdd}`,
        nameAirport,
        httpOptions
      );
  }

}
