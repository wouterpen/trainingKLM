import { Component, OnInit } from '@angular/core';

import { FlightServiceService } from '../services/flight-service.service';
import { PassengerServiceService } from '../services/passenger-service.service';
import { AirportServiceService } from '../services/airport-service.service';
import { LandingPlannerComponent } from '../landing-planner/landing-planner.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-traject',
  templateUrl: './add-traject.component.html',
  styleUrls: ['./add-traject.component.css']
})
export class AddTrajectComponent implements OnInit {

  constructor(private flightService: FlightServiceService,
    private airportService: AirportServiceService,
    private passengerService: PassengerServiceService,
    private router: Router) {}

    private originSelected: number;
    private destinationSelected: number;
    // private passengerService: PassengerServiceService)

  airports = [];

  ngOnInit() {
    this.originSelected = 1;
    this.destinationSelected = 2;

    this.airportService.getAirports().subscribe(
      data => {
        this.airports = data;
      });
  }

  addFlight(userForm) {
    const flightAddForm = {
      'departureAirport': userForm.value.departureAirport,
      'arrivalAirport': userForm.value.arrivalAirport,
      'inactiveStartdate': userForm.value.inactiveStartdate,
      'inactiveEnddate': userForm.value.inactiveEnddate
    };
    this.flightService.addFlight(flightAddForm)
    .subscribe(
      data => console.log(data)
    );
    alert("Succesfully registered the traject.")
    this.router.navigate(['/landingplanner']);
    window.location.reload();
  }
}

