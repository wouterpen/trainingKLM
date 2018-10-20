import { Component, OnInit } from '@angular/core';

import { FlightServiceService } from '../services/flight-service.service';
import { Router } from '@angular/router';
import { PlaneServiceService } from '../services/plane-service.service';
import { TripServiceService } from '../services/trip-service.service';
// Service for traject ID
// service to Inject trip

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent implements OnInit {

  constructor(
    private flightService: FlightServiceService,
    private planeService: PlaneServiceService,
    private tripService: TripServiceService,
    private router: Router) { }

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
      })
  }

  // Following function needs to be modified to fit with trips instead of flights (... copied over)
  addTrip(userForm) {

    var trajectId = "";
    var duration = "";
    var planeId = "";
    var origin = "";
    var destination = "";

    // Difficulty getting the value op the option select!
    console.log(this.planes[0].id);
    console.log(userForm.value.plane);
    for (var i = 0; i < this.planes.length;i++){
      if (this.planes[i].name == userForm.value.plane) {
        console.log(this.planes[i].id)
      }
    }

    // const tripAddForm = {
    //   'duration': userForm.value.duration,
    //   'destination': destination,
    //   'origin': origin,
    //   'inactiveEnddate': userForm.value.inactiveEnddate
    // };

    // this.tripService.addTrip(tripAddForm)
    // .subscribe(
    //   data => console.log(data)
    // );

    // //When successfully created
    // alert("Succesfully registered the traject.")
    // this.router.navigate(['/landingplanner']);
    // window.location.reload();
  }
}
