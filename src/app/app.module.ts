import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { VoyagesComponent } from './home/voyages/voyages.component';
import { StateroomComponent } from './home/voyages/stateroom/stateroom.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VoyagesComponent,
    StateroomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
