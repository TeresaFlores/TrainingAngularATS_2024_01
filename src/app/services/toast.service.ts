import { Injectable } from '@angular/core';
import { ToastEvent, EventTypes } from '@core/models/toast.interface';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toastEvents: Observable<ToastEvent>;
  private _toastEvents = new Subject<ToastEvent>();

  constructor() {
    this.toastEvents = this._toastEvents.asObservable();
  }

  showToast(EventType: EventTypes, message: string) {
    this._toastEvents.next({
      message,
      type: EventType,
    });
  }
}
