import { Component, OnInit } from '@angular/core';
import { PlaneServiceService } from '../services/plane-service.service';


@Component({
  selector: 'app-add-plane',
  templateUrl: './add-plane.component.html',
  styleUrls: ['./add-plane.component.css']
})
export class AddPlaneComponent implements OnInit {

  constructor(private planeService: PlaneServiceService) { }

  ngOnInit() {
  }


  addAircraft(aircraftForm) {
    const aircraftAddForm = {
      'id': 0,
      'brand': aircraftForm.value.brand,
    }
    this.planeService.addAircraft(aircraftAddForm).subscribe(
      data => console.log('data',data)
    )
  }
}
