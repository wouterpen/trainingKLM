import { Component, OnInit } from '@angular/core';

import { FlightServiceService } from '../services/flight-service.service';
import { PassengerServiceService } from '../services/passenger-service.service';
import { AirportServiceService } from '../services/airport-service.service';

@Component({
  selector: 'app-add-traject',
  templateUrl: './add-traject.component.html',
  styleUrls: ['./add-traject.component.css']
})
export class AddTrajectComponent implements OnInit {

  constructor(private flightService: FlightServiceService,
    private airportService: AirportServiceService,
    private passengerService: PassengerServiceService) { }
    private originSelected: number;
    private destinationSelected: number;

  airports = [];
  flights = [];

  ngOnInit() {
    this.originSelected = 1;
    this.destinationSelected = 2;

    this.airportService.getAirports().subscribe(
      data => {
        this.airports = data;
      })

    this.flightService.getFlights().subscribe(
      data => {
        this.flights = data;
      })
  }

  addFlight(userForm) {
    const flightAddForm = {
      'duration': userForm.value.duration,
      'origin': {
        'id': userForm.value.origin,
      },
      'destination': {
        'id': userForm.value.Destination,
      }
    }

    this.flightService.addFlight(flightAddForm).subscribe(
      data => console.log(data)
    )
  }
}
