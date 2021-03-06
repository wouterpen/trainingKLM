import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AccountServiceService } from '../services/account-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  accounts = []; 
  currentCustomer = {};
  tripsHC = [
    {
      trajectOrigin: {
          abbreviation: "SCH",
          city: "Amsterdam",
          countryCode: "NL",
          id: 45,
          name: "Schiphol"
      },
      trajectDestination: {
          abbreviation: "BCN",
          city: "Barcelona",
          countryCode: "Spain",
          id: 3,
          name: "Barcelona Airport"
      },
      plane: "C2 Hercules",
      startDate: "2018-10-27",
      endDate: "2018-10-28",
      duration: "00:02:45",
      price: "169"
    }
  ];

  customers = [
    {
      firstName: "Bob",
      lastName: "van der Helm",
      phoneNumber: "0646750736",
      street: "Amstel",
      streetNumber: "206"
    }
  ];

  constructor(
    private router: Router,
    private accountService: AccountServiceService
  ) { }

  ngOnInit() {
    this.accountService.getAccounts().subscribe(
      data => {
        this.accounts = data;
        console.log(this.accounts);
        this.currentCustomer = this.accounts[this.accounts.length-1];
        console.log(this.currentCustomer);  
      });
  }
}
