import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { environment } from '../../environments/environment';
import { ApiService } from './../api.service';
import { Voyage } from './../voyage.model';

const API_URL = environment.apiUrl;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  voyages$: Voyage[] = [];
  cruises = [];
  private cruisesSub: Subscription;

  constructor(
    private api: ApiService
  ) {}

  ngOnInit() {
    this.api.getCruises();
    this.api.getCruiseUpdatedListener()
      .subscribe((cruises: Voyage[]) => {
        console.log('home cruises', cruises);
        this.voyages$ = cruises;
        console.log('observable cruises', this.voyages$);
      });
  }

  ngOnDestroy() {
    this.cruisesSub.unsubscribe();
  }
}
