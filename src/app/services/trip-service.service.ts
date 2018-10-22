import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TripServiceService {
  private url = 'http://localhost:8082/api/trips';

  constructor(private httpClient: HttpClient) { }
  
  getTrips(): Observable<{ any }[]> {
    return this
      .httpClient
      .get<any[]>(`${this.url}`);
  }

  addTrip(nameTrip: any) {
    return this
      .httpClient
      .post<any>(
        `${this.url}`,
        nameTrip,
        httpOptions
      );
  }
}
