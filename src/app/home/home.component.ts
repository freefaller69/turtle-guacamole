import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Voyage } from './voyages/voyage.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  voyages$: Voyage[] = [];
  private cruisesSub: Subscription;
  activeStateroom = 0;

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

  currentIdx(e) {
    this.activeStateroom = e;
  }

  ngOnDestroy() {
    this.cruisesSub.unsubscribe();
  }
}
