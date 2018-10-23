import { Component, OnInit } from '@angular/core';
import { TripServiceService } from '../services/trip-service.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(
    private tripService: TripServiceService
  ) { }

  trips = [];
  tripsHC = [
    {
      trajectOrigin: {
          abbreviation: "SCH",
          city: "Amsterdam",
          countryCode: "NL",
          id: 45,
          name: "Schiphol"
      },
      trajectDestination: {
          abbreviation: "BCN",
          city: "Barcelona",
          countryCode: "Spain",
          id: 3,
          name: "Barcelona Airport"
      },
      plane: "C2 Hercules",
      startDate: "2018-10-27",
      endDate: "2018-10-28",
      duration: "00:02:45",
      price: "169"
    }
  ];

  ngOnInit() {
    this.tripService.getTrips().subscribe(
      data => {
        this.trips = data;
        console.log(this.trips)
      })   
  }

}
