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
import { AccountsComponent } from './accounts/accounts.component';
import { AccountServiceService } from './services/account-service.service';
import { LandingAdminComponent } from './landing-admin/landing-admin.component';
import { LandingPlannerComponent } from './landing-planner/landing-planner.component';
import { AddTripComponent } from './add-trip/add-trip.component';
import { AddPlaneComponent } from './add-plane/add-plane.component';
import { PaymentComponent } from './payment/payment.component';
import { BookingconfirmedComponent } from './bookingconfirmed/bookingconfirmed.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
<<<<<<< HEAD
import { LandingCustomerComponent } from './landing-customer/landing-customer.component';

=======
import { SearchResultsComponent } from './search-results/search-results.component';
import { DetailsComponent } from './details/details.component';
>>>>>>> master

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    BookflightComponent,
    AddTrajectComponent,
    AddAirportComponent,
    AccountsComponent,
    LandingAdminComponent,
    LandingPlannerComponent,
    AddTripComponent,
    AddPlaneComponent,
<<<<<<< HEAD
    SearchFlightComponent,
    LandingCustomerComponent,

=======
    PaymentComponent,
    BookingconfirmedComponent,
    SearchFlightComponent,
    SearchResultsComponent,
    DetailsComponent
>>>>>>> master
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AccountServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
