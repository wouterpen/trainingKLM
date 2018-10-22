import { Component, OnInit } from '@angular/core';
import { FlightServiceService } from '../services/flight-service.service';
import { DataServiceService } from '../services/data-service.service';

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
  tripsHC = [
    {
      trajectOrigin: {
          abbreviation: "BDP",
          city: "Budapest",
          countryCode: "HG",
          id: 45,
          name: "Budapest"
      },
      trajectDestination: {
          abbreviation: "PRS",
          city: "Paris",
          countryCode: "France",
          id: 3,
          name: "Paris"
      },
      plane: "Henry",
      startDate: "2018-10-27",
      endDate: "2018-10-28",
      duration: "00:02:45",
      price: "69"
    },
    {
      trajectOrigin: {
          abbreviation: "LND",
          city: "London",
          countryCode: "UK",
          id: 33,
          name: "London"
      },
      trajectDestination: {
          abbreviation: "MDR",
          city: "Madrid",
          countryCode: "Spain",
          id: 8,
          name: "Madrid"
      },
      plane: "Henk",
      startDate: "2018-11-01",
      endDate: "2018-11-02",
      duration: "00:04:30",
      price: "149"
    }
  ];


  ngOnInit() {
    this.flightService.getFlights().subscribe(
      data => {
        this.flights = data;
      }
    )
    this.trips = this.dataService.get();
  }
}