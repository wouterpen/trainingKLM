import { Component, OnInit } from '@angular/core';
import { AirportServiceService } from '../services/airport-service.service';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {

  constructor(private airportService : AirportServiceService) { }
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

  selectedFlight(searchForm) {
    var searchFlightDetails = {
      'from': searchForm.value.from,
      'to': searchForm.value.to,
      'departure' : searchForm.value.departureDate,
      'return' : searchForm.value.returnDate,
      'passengers' : searchForm.value.passengers,
    }
  }



}
