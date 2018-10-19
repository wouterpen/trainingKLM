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

  private url: string = "http://localhost:8082/api/accounts";

  constructor(private httpClient: HttpClient) { }

  getAccounts(): Observable<Account[]> {
    return this
      .httpClient
      .get<Account[]>(`${this.url}`)
  };
}
