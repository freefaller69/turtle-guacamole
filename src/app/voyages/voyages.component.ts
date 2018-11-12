import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { environment } from '../../environments/environment';
import { ApiService } from './../api.service';
import { Voyage } from '../voyage.model';

@Component({
  selector: 'app-voyages',
  templateUrl: './voyages.component.html',
  styleUrls: ['./voyages.component.scss']
})
export class VoyagesComponent implements OnInit, OnDestroy {
  voyages$: Voyage[] = [];
  private cruisesSub: Subscription;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.getCruises();
    this.api.getCruiseUpdatedListener()
      .subscribe((cruises: Voyage[]) => {
        this.voyages$ = cruises;
      });
  }

  ngOnDestroy() {
    this.cruisesSub.unsubscribe();
  }

}
