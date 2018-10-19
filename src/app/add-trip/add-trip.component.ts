import { Component, OnInit } from '@angular/core';
import { FlightServiceService } from '../services/flight-service.service';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent implements OnInit {

  constructor(private flightService: FlightServiceService) { }
  flights = [];

  ngOnInit() {
    this.flightService.getFlights().subscribe(
      data => {
        this.flights = data;
      })
  }
}
