import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private message = new Subject<string>();
  private open = new BehaviorSubject<boolean>(false);
  message$ = this.message.asObservable();
  open$ = this.open.asObservable();

  setMessage(content: string) {
    this.message.next(content);
  }

  openToast() {
    this.open.next(true);
  }

  clearMessage() {
    this.message.next('');
  }

  constructor() {}
}
