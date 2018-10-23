import { Component, OnInit } from '@angular/core';
import { FlightServiceService } from '../services/flight-service.service';
import { PassengerServiceService } from '../services/passenger-service.service';


@Component({
  selector: 'app-landing-customer',
  templateUrl: './landing-customer.component.html',
  styleUrls: ['./landing-customer.component.css']
})
export class LandingCustomerComponent implements OnInit {

  constructor(
    private flightService: FlightServiceService,
    private PassengerServiceService: PassengerServiceService) { }

  flights = [];
  passengerData = {};
  
 


  ngOnInit() {
    this.flightService.getFlights().subscribe(
      flightData => {
        this.flights = flightData;
        console.log(flightData);
      }
    )
    this.PassengerServiceService.getPassengers().subscribe(
      data => {
          if (data.length > 0) {
          this.passengerData = data[0];
          }else{
            alert("Cannot find passenger data")
          }
          console.log(data);
      }
    )
  }
}