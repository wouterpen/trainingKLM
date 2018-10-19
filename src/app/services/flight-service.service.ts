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
  private endpointFlights: string = "airtraffic/flights";
  private endpointFlightAdd: string = "airtraffic/flight/add";




  constructor(private httpClient: HttpClient) { }
  getFlights(): Observable<{any}[]> {
    return this
      .httpClient
      .get<any[]>(`${this.url}/${this.endpointFlights}`)
  };

  addFlight(nameFlight: any){
    return this
    .httpClient
    .post<any>(
      `${this.url}/${this.endpointFlightAdd}`,
      nameFlight,
      httpOptions
    )
  };

}
