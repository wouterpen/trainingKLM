import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {


  trips: any = new Array();

  constructor() { }

  add(event: object){
    this.trips.push(event);
  };

  get(): object[]{
    return this.trips;
  }
}
