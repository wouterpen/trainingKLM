import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor() { }

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
  }

  alertButton() {
    alert("Gelukt");
  }

}
