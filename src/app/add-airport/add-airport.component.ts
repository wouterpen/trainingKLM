import { Component, OnInit } from '@angular/core';
import { AirportServiceService } from '../services/airport-service.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-add-airport',
  templateUrl: './add-airport.component.html',
  styleUrls: ['./add-airport.component.css']
})
export class AddAirportComponent implements OnInit {

  constructor(
    private airportService: AirportServiceService,
    private router: Router) { }

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
    this.airportService.addAirport(airportAddForm).subscribe(data =>{
      alert("Succesfully registered the airport.")
    });
    
    this.router.navigate(['/landingadmin']);
  }
}
