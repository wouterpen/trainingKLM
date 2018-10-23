import { Component, OnInit } from '@angular/core';

import { FlightServiceService } from '../services/flight-service.service';
import { PlaneServiceService } from '../services/plane-service.service';
import { DataServiceService } from '../services/data-service.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent implements OnInit {

  constructor(private flightService: FlightServiceService,
    private planeService: PlaneServiceService,
    private dataService: DataServiceService,
    private router: Router) { }

    private planeSelected: number;
  
  flights = [];
  planes = [];

  ngOnInit() {
    this.planeSelected = 0;

    this.flightService.getFlights().subscribe(
      data => {
        this.flights = [...data];
        this.flights.unshift({
          departureAirport: { name: 'choose origin',
          id: 0},
          arrivalAirport:{ name: 'choose destination',
          id: 0},
          inactiveStartdate: '',
          inactiveEnddate: '',
        })

      })
    
    this.planeService.getPlanes().subscribe(
      data => {
        this.planes = [...data];
        this.planes.unshift({
          brand: 'choose plane',
          id: 0
        })
      });

      
  }
  addTrip(userForm){
    const arrayDepartureAndArrival =  userForm.value.traject.split("*");
    const idDepartureAirport = JSON.parse(arrayDepartureAndArrival[0]);
    const idArrivalAirport = JSON.parse(arrayDepartureAndArrival[1]);
    const addTripForm = {
      trajectOrigin: idDepartureAirport,
      trajectDestination: idArrivalAirport,
      plane: userForm.value.plane,
      startDate: userForm.value.arrivalDate,
      endDate: userForm.value.departureDate,
      duration: userForm.value.Duration,
      price: userForm.value.price
    };
    this.dataService.add(addTripForm);
    
    this.router.navigate(['/landingplanner']);
  }
}
