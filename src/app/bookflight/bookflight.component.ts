import { Component, OnInit } from '@angular/core';
import { AirportServiceService } from '../services/airport-service.service';
import { FlightServiceService } from '../services/flight-service.service';
import { PassengerServiceService } from '../services/passenger-service.service';
import { PlaneServiceService } from '../services/plane-service.service';
import { Order } from '../domain/order.model';
import { Airport } from '../domain/airport.model';

@Component({
  selector: 'app-bookflight',
  templateUrl: './bookflight.component.html',
  styleUrls: ['./bookflight.component.css']
})
export class BookflightComponent implements OnInit {

  constructor(private airportService: AirportServiceService,
              private flightService: FlightServiceService,
              private passengerService: PassengerServiceService,
              private planeService: PlaneServiceService) { }
  airports = [];
  flights = [];
  passengers = [];
  planes = [];
  private originSelected : number;
  private destinationSelected : number;
  private airport : Airport;


  ngOnInit() {
    this.airport = new Airport;
    this.airport.id = 0;
    this.airport.name = '';

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

    this.passengerService.getPassengers().subscribe(
      data => {
        this.passengers = data;
      })

    this.planeService.getPlanes().subscribe(
      data => {
        this.planes = data;
      })
  }

  // logConsole(userForm){
  //   console.log(userForm.control.value)
  //   console.log(userForm.control.value.origin)
  //   console.log(userForm.control.value.Destination)
  // }

  addFlight(userForm){
    const flightAddForm = {
      'duration': 120,
      'origin': {
       'id': userForm.control.value.origin,
      },
      'destination':{
        'id': userForm.control.value.Destination,
      }
    }

    this.flightService.addFlight(flightAddForm).subscribe(
      data => console.log(data)
    )
  }

  addAirport(){
    this.airportService.addAirport(this.airport).subscribe(
      data => console.log(data)
    )
  }

}
