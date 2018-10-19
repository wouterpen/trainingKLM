import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddAirportComponent } from './add-airport/add-airport.component';
import { LoginComponent } from './login/login.component';
import { AddTrajectComponent } from './add-traject/add-traject.component';
import { LandingAdminComponent } from './landing-admin/landing-admin.component';
import { LandingPlannerComponent } from './landing-planner/landing-planner.component';
import { AddTripComponent } from './add-trip/add-trip.component';

const routes = [ {path: 'addairport', component: AddAirportComponent},
{path: 'login', component: LoginComponent}, 
// {path: 'search', component: SearchComponent}, 
{path: 'addtraject', component: AddTrajectComponent},
{path: 'addairport', component: AddAirportComponent},
{path: 'landingadmin', component: LandingAdminComponent },
{path: 'landingplanner', component: LandingPlannerComponent },
// {path: 'addairplane', component: AddAirplaneComponent},
{path: 'addtrip', component: AddTripComponent},

// {path: 'nav2', component: AppComponent},
{path: '', redirectTo: '/landingplanner', pathMatch: 'full'},
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
