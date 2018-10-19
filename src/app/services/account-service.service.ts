import { Injectable } from '@angular/core';
import { Account } from '../domain/account.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {
  // private url = 'http://localhost:8082/api';
  // private endpoint  = 'accounts';
  // loginAccount =  {id : 1};

  private url = 'http://localhost:8082/api';
  private endpointUser = 'accounts';
  private endpointUserAdd = 'accounts';


  constructor(private httpClient: HttpClient) { }

  // getById(id: number): Observable<Account> {
  //   return this
  //     .httpClient
  //     .get<Account>(`${this.url}/${this.endpoint}/` + id);
  // }

  getUsers(): Observable<{ any }[]> {
    return this
      .httpClient
      .get<any[]>(`${this.url}/${this.endpointUser}`);
  }


  addUser(infoUser: any) {
    return this
      .httpClient
      .post<any>(
        `${this.url}/${this.endpointUserAdd}`,
        infoUser,
        httpOptions
      );
  }

}
