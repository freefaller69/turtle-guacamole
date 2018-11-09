import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { Voyage } from './voyage.model';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private cruises = [];
  private cruisesUpdated = new Subject();

  constructor(private http: HttpClient) {}

  getCruises() {
    this.http
      .get<{ voyage: Voyage }>(API_URL)
      .pipe(
        map(res => {
          return Object.values(res['data'][0].attributes.itineraries).map(
            cruise => {
              return cruise['voyages'].map(voyage => {
                return {
                  id: voyage.itinerary._id,
                  description: voyage.itinerary.description,
                  currency: voyage.currency,
                  dateDepart: voyage.dateDepart,
                  dateArrive: voyage.dateArrive,
                  ship: voyage.ship.displayName,
                  embarkPort: voyage.embarkPort.portName,
                  disembarkPort: voyage.disembarkPort.portName,
                  staterooms: voyage.stateRooms
                };
              });
            }
          );
        })
      )
      .subscribe(transformedCruises => {
        this.cruises = transformedCruises;
        this.cruisesUpdated.next([...this.cruises]);
      });
  }

  getCruiseUpdatedListener() {
    return this.cruisesUpdated.asObservable();
  }
}
