import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { BookflightComponent } from './bookflight/bookflight.component';
import { HttpClientModule } from '@angular/common/http';
import { AddTrajectComponent } from './add-traject/add-traject.component';
import { AddAirportComponent } from './add-airport/add-airport.component';

import { NavigationComponent } from './navigation/navigation.component';
import { AddTripComponent } from './add-trip/add-trip.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    BookflightComponent,
    AddTrajectComponent,
    AddAirportComponent,
    AddTripComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
