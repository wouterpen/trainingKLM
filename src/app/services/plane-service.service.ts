import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PlaneServiceService {
  private url = 'http://localhost:8082/api';
  private endpointPlanes = 'planes';
  private endpointAddPlanes = 'planes';


  constructor(private httpClient: HttpClient) { }
  
  getPlanes(): Observable<{ any }[]> {
    return this
      .httpClient
      .get<any[]>(`${this.url}/${this.endpointPlanes}`);
  }

  addAircraft(nameAircraft: any) {
    return this
      .httpClient
      .post<any>(
        `${this.url}/${this.endpointAddPlanes}`,
        nameAircraft,
        httpOptions
      );
  }
}
