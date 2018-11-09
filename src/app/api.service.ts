import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getCruises() {
    return this.http.get(API_URL)
    .pipe(
      map(cruiseData => {
        console.log(cruiseData);
        return cruiseData;
      })
    );
  }

}
