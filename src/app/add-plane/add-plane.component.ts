import { Component, OnInit } from '@angular/core';
import { PlaneServiceService } from '../services/plane-service.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-add-plane',
  templateUrl: './add-plane.component.html',
  styleUrls: ['./add-plane.component.css']
})
export class AddPlaneComponent implements OnInit {

  constructor(
    private planeService: PlaneServiceService,
    private router: Router) { }

  ngOnInit() {
  }


  addAircraft(aircraftForm) {
    const aircraftAddForm = {
      'name': aircraftForm.value.name,
      'model': aircraftForm.value.model,
      'capacity' : aircraftForm.value.capacity
    }
    this.planeService.addAircraft(aircraftAddForm).subscribe(
      data => console.log('data',data)
    )
    alert("Succesfully registered the airplane.")
    this.router.navigate(['/landingadmin']);
  }

  
}
