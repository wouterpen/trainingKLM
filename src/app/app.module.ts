import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { BookflightComponent } from './bookflight/bookflight.component';
import { HttpClientModule } from '@angular/common/http';
import { AddTrajectComponent } from './add-traject/add-traject.component';
import { AddAirportComponent } from './add-airport/add-airport.component';

@NgModule({
  declarations: [
    AppComponent,
    BookflightComponent,
    AddTrajectComponent,
    AddAirportComponent
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
