import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes = [ {path: 'home', component: AppComponent},
{path: 'login', component: AppComponent},
// {path: 'nav2', component: AppComponent},
{path: '', redirectTo: '/home', pathMatch: 'full'},
{path: '**', redirectTo: '/home', pathMatch: 'full'}
];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
