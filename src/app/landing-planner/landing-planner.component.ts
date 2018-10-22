import { Component, OnInit } from '@angular/core';
import { FlightServiceService } from '../services/flight-service.service';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-landing-planner',
  templateUrl: './landing-planner.component.html',
  styleUrls: ['./landing-planner.component.css']
})
export class LandingPlannerComponent implements OnInit {

  constructor(
    private flightService: FlightServiceService,
    private dataService: DataServiceService) { }

  flights = [];
  trips = [];


  ngOnInit() {
    this.flightService.getFlights().subscribe(
      data => {
        this.flights = data;
        console.log(data);
      }
    )
    this.trips = this.dataService.get();
    console.log('TRIPS= ',this.trips)
  }
}