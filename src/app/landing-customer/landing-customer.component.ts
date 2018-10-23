import { Component, OnInit } from '@angular/core';
import { FlightServiceService } from '../services/flight-service.service';
import { AccountServiceService } from '../services/account-service.service';
import { OrderServiceService } from '../services/order-service.service';
import { Account } from '../domain/account.model';
// import { PassengerServiceService } from '../services/passenger-service.service';


@Component({
  selector: 'app-landing-customer',
  templateUrl: './landing-customer.component.html',
  styleUrls: ['./landing-customer.component.css']
})
export class LandingCustomerComponent implements OnInit {

  constructor(
    private flightService: FlightServiceService,
    private accountService: AccountServiceService,
    private orderService: OrderServiceService,
    ) { }

  flights = [];
  orders = [];
  customerOrders = [];
  currentCustomer: Account;
  customerID = 0;
  
  ngOnInit() {
    this.flightService.getFlights().subscribe(
      flightData => {
        this.flights = flightData;
        console.log(flightData);
      }
    )

    this.currentCustomer = this.accountService.getCurrentCustomer();
    console.log("Current customer: ", this.currentCustomer);
    this.customerID = this.currentCustomer.id;
    
    this.orderService.getOrders().subscribe(
      data => {
        this.orders = data;
        console.log("Orders: ", data);
        console.log("CustomerID: ", this.currentCustomer.id);

        for (var i = 0; i < 1;i++){
          if (this.orders[i].account.id == this.currentCustomer.id) {
            this.customerOrders.push(this.orders[i]);
            console.log("Customer orders: ",this.customerOrders);
          }
        }
        }
      )
  }
}