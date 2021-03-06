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
  private url = 'http://localhost:8082/api';
  private endpointFlights = 'trajects';

  constructor(private httpClient: HttpClient) { }
  getFlights(): Observable<{ any }[]> {
    return this
      .httpClient
      .get<any[]>(`${this.url}/${this.endpointFlights}`);
  }

  addFlight(nameFlight: any) {

    const flightForm = {
      'inactiveStartdate': nameFlight.inactiveStartdate,
      'inactiveEnddate': nameFlight.inactiveEnddate
    };

    const endpointFlightAdd = `trajects/add/departure/${nameFlight.departureAirport}/arrival/${nameFlight.arrivalAirport}`;

    return this
      .httpClient
      .post<any>(
        `${this.url}/${endpointFlightAdd}`,
        flightForm,
        httpOptions
      );
  }

}
