import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddAirportComponent } from './add-airport/add-airport.component';
import { LoginComponent } from './login/login.component';
import { AddTrajectComponent } from './add-traject/add-traject.component';
import { AccountsComponent } from './accounts/accounts.component';

const routes = [ {path: 'addairport', component: AddAirportComponent},
{path: 'login', component: LoginComponent},
{path: 'addtraject', component: AddTrajectComponent},
{path: 'adduser', component: AccountsComponent},

// {path: 'nav2', component: AppComponent},
{path: '', redirectTo: '/login', pathMatch: 'full'},
{path: '**', redirectTo: '/login', pathMatch: 'full'}
];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
