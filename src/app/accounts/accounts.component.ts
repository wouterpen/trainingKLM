import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountServiceService } from '../services/account-service.service';
import { Account } from '../domain/account.model';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})


export class AccountsComponent implements OnInit {

  account: Account = new Account();

  constructor(private accountService: AccountServiceService) { }

  ngOnInit() {
  }


  addUser(userForm) {
    const userAddForm = {
      'id': 0,
      'firstName': userForm.value.firstName,
      'lastName': userForm.value.lastName,
      'country': userForm.value.country,
      'city': userForm.value.city,
      'street': userForm.value.streetName,
      'streetNumber': userForm.value.streetNr,
      'postalCode': userForm.value.postalCode,
      'passportNumber': userForm.value.documentNr,
      'phoneNumber': userForm.value.phoneNr,
      'email': userForm.value.emailAdress,
      'password': userForm.value.passWord,
      'type':"customer"
    };

    this.accountService.addUser(userAddForm).subscribe();
  }
}
