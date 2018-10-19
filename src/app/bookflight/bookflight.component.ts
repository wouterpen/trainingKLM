import { Component, OnInit } from '@angular/core';
import { AirportServiceService } from '../services/airport-service.service';
import { FlightServiceService } from '../services/flight-service.service';
import { PassengerServiceService } from '../services/passenger-service.service';
import { PlaneServiceService } from '../services/plane-service.service';

@Component({
  selector: 'app-bookflight',
  templateUrl: './bookflight.component.html',
  styleUrls: ['./bookflight.component.css']
})
export class BookflightComponent implements OnInit {

  constructor(
    private airportService: AirportServiceService,
    private flightService: FlightServiceService,
    private passengerService: PassengerServiceService,
    private planeService: PlaneServiceService) { }

  airports = [];
  flights = [];
  passengers = [];
  planes = [];

  ngOnInit() {

    this.airportService.getAirports().subscribe(
      data => {
        this.airports = data;
      })

    // this.flightService.getFlights().subscribe(
    //   data => {
    //     this.flights = data;
    //   })

    this.passengerService.getPassengers().subscribe(
      data => {
        this.passengers = data;
      })

    this.planeService.getPlanes().subscribe(
      data => {
        this.planes = data;
      })
  }
}
