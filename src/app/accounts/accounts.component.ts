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

    // this.accountService.getById(this.accountService.loginAccount.id).
    // subscribe(
    //   data => { this.account = data;
        //console.log(this.account);
    //   }

    // );

  }


  addUser(userForm) {
    const userAddForm = {
      'id': 0,
      'firstName': userForm.value.firstName,
      'lastName': userForm.value.lastName,
      'street': userForm.value.streetName,
      'postalCode': userForm.value.postalCode,
      'country': userForm.value.country,
      'passportNumber': userForm.value.documentNr,
      'phoneNumber': userForm.value.phoneNr,
      'email': userForm.value.emailAdress,
      'password': userForm.value.passWord,
    }
    console.log(userAddForm)
    this.accountService.addUser(userAddForm).subscribe(
      data => console.log('data',data)
    )
  }

  // onSubmit(accountForm: NgForm) {
  //   console.log(accountForm);
  // }


// add(accountForm) {
//   const flightAddForm = {
//     'duration': userForm.value.duration,
//     'origin': {
//       'id': userForm.value.origin,
//     },
//     'destination': {
//       'id': userForm.value.Destination,
//     }
//   }

}
