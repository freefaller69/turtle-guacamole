import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

const API_URL = environment.apiUrl;

export function createHttpObservable(url: string) {
  return Observable.create(observer => {
    fetch(API_URL)
      .then(response => {
        return response.json();
      })
      .then(body => {
        observer.next(body);
        observer.complete();
      })
      .catch(err => {
        observer.error(err);
      });
  });
}
