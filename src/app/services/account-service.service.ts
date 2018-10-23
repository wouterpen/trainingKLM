import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Account } from '../domain/account.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  private url = 'http://localhost:8082/api';
  private endpointUser = 'accounts';
  private endpointUserAdd = 'accounts';
  private currentCustomer: Account;


  constructor(private httpClient: HttpClient) { }

  getAccounts(): Observable<{ any }[]> {
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

  getCurrentCustomer(): Account {
    return this.currentCustomer;
  }
  
  setCurrentCustomer(account: Account) {
    this.currentCustomer = account;
  }
}
