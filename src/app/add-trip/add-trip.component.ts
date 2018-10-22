import { Component, OnInit } from '@angular/core';

import { FlightServiceService } from '../services/flight-service.service';
import { PlaneServiceService } from '../services/plane-service.service';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent implements OnInit {

  constructor(private flightService: FlightServiceService,
    private planeService: PlaneServiceService,
    private dataService: DataServiceService) { }
  
  flights = [];
  planes = [];

  ngOnInit() {
    this.flightService.getFlights().subscribe(
      data => {
        this.flights = data;
      })
    
    this.planeService.getPlanes().subscribe(
      data => {
        this.planes = data;
      });
  }
  addTrip(userForm){
    const arrayDepartureAndArrival =  userForm.value.traject.split("*");
    const idDepartureAirport = arrayDepartureAndArrival[0];
    const idArrivalAirport = arrayDepartureAndArrival[1];
    const addTripForm = {
      'trajectOrigin': idDepartureAirport,
      'trajectDestination': idArrivalAirport,
      'plane': userForm.value.plane,
      'startDate': userForm.value.arrivalDate,
      'endDate': userForm.value.departureDate,
      'duration': userForm.value.Duration,
      'price': userForm.value.price
    };
    this.dataService.add(addTripForm);
  }
}
