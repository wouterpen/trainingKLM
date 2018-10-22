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

  airportsOrigin = [];
  airportDestination =[];

  ngOnInit() {
    this.originSelected = 0;
    this.destinationSelected = 0;
    this.airportService.getAirports().subscribe(
      data => {
        this.airportsOrigin = [...data];
        this.airportDestination = [...data];
        this.airportsOrigin.unshift({
          name: 'choose origin',
          id: 0
        })
        this.airportDestination.unshift({
          name: 'choose destination',
          id: 0 
        })
      });
   
  }


  addFlight(userForm) {
    const flightAddForm = {
      'departureAirport': userForm.value.departureAirport,
      'arrivalAirport': userForm.value.arrivalAirport,
      'inactiveStartdate': userForm.value.inactiveStartdate,
      'inactiveEnddate': userForm.value.inactiveEnddate
    };
    this.flightService.addFlight(flightAddForm).subscribe();
    alert("Succesfully registered the traject.")
    this.router.navigate(['/landingplanner']);
    window.location.reload();
  }
}

