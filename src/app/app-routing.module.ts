import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AddAirportComponent } from './add-airport/add-airport.component';
import { LoginComponent } from './login/login.component';
import { AddTrajectComponent } from './add-traject/add-traject.component';
import { AccountsComponent } from './accounts/accounts.component';
import { LandingAdminComponent } from './landing-admin/landing-admin.component';
import { LandingPlannerComponent } from './landing-planner/landing-planner.component';
import { AddTripComponent } from './add-trip/add-trip.component';
import { BookflightComponent } from './bookflight/bookflight.component';
import { AddPlaneComponent } from './add-plane/add-plane.component';
import { PaymentComponent } from './payment/payment.component';
import { BookingconfirmedComponent } from './bookingconfirmed/bookingconfirmed.component';

import { SearchFlightComponent } from './search-flight/search-flight.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { DetailsComponent } from './details/details.component';

const routes = [ {path: 'addairport', component: AddAirportComponent},
{path: 'login', component: LoginComponent},
{path: 'addtraject', component: AddTrajectComponent},
{path: 'adduser', component: AccountsComponent},
{path: 'addairport', component: AddAirportComponent},
{path: 'landingadmin', component: LandingAdminComponent },
{path: 'landingplanner', component: LandingPlannerComponent },
{path: 'addairplane', component: AddPlaneComponent},
{path: 'addtrip', component: AddTripComponent},
{path: 'bookflight', component: BookflightComponent},
{path: 'payment', component: PaymentComponent},
{path: 'bookingconfirmed', component: BookingconfirmedComponent},
{path: 'search', component: SearchFlightComponent},
{path: 'searchresults', component: SearchResultsComponent},
{path: 'details', component: DetailsComponent},

{path: '', redirectTo: '/search', pathMatch: 'full'},
{path: '**', redirectTo: '/search', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
