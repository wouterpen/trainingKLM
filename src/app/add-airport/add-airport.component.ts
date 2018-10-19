import { Component, OnInit } from '@angular/core';
import { AirportServiceService } from '../services/airport-service.service';


@Component({
  selector: 'app-add-airport',
  templateUrl: './add-airport.component.html',
  styleUrls: ['./add-airport.component.css']
})
export class AddAirportComponent implements OnInit {

  constructor(private airportService: AirportServiceService) { }

  ngOnInit() {
  }

  addAirport(airportForm) {
    const airportAddForm = {
      'id': 0,
      'name':airportForm.value.airport,
      'abbreviation': airportForm.value.abbreviation,
      'city':airportForm.value.city,
      'countryCode': airportForm.value.countryCode
    }
    this.airportService.addAirport(airportAddForm).subscribe(
      data => console.log('data',data)
    )
  }

}
