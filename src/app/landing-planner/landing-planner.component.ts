import { Component, OnInit } from '@angular/core';
import { FlightServiceService } from '../services/flight-service.service';

@Component({
  selector: 'app-landing-planner',
  templateUrl: './landing-planner.component.html',
  styleUrls: ['./landing-planner.component.css']
})
export class LandingPlannerComponent implements OnInit {

  constructor(
    private flightService: FlightServiceService) { }

  flights = [];

  ngOnInit() {
    this.flightService.getFlights().subscribe(
      data => {
        this.flights = data;
        console.log(data);
      })
  }
}