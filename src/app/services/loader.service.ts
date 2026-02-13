import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  //_loading is a private variable(Private Variable are used using ex:- _hello)
  private _loading = new BehaviorSubject<boolean>(false);
  loading$ = this._loading.asObservable();

  private requestcounts = 0; // Track number of active requests

  show() {
    this.requestcounts++;
    this._loading.next(true); // Show loader
  }
  hide() {
    this.requestcounts--;
    if (this.requestcounts <= 0) {
      this._loading.next(false); // Hide loader only if all requests complete
      this.requestcounts = 0; // Reset count to prevent negatives
    }
  }
}
