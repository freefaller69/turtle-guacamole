import { ApiService } from './../api.service';
// import { Component, OnInit } from '@angular/core';

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { interval, timer, fromEvent, Observable, noop } from 'rxjs';
import { createHttpObservable } from '../common/util';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

const API_URL = environment.apiUrl;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cruises;

  constructor() { }

  // ngOnInit() {
  //   this.cruises = this.api.getCruises();
  //   console.log(this.cruises);
  // }

  ngOnInit() {

    const http$ = createHttpObservable(API_URL);

    const cruises$ = http$
      .pipe(
        map(res => Object.values(res['payload']))
      );

    cruises$.subscribe(
      cruises => console.log(cruises),
      noop,
      () => console.log('completed')
    );
  }

}
