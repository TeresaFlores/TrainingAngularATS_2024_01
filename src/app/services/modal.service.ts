import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private movie = new Subject<string>();
  private schedule = new Subject<string>();

  movie$ = this.movie.asObservable();
  schedule$ = this.schedule.asObservable();

  setMovie(movie: string) {
    this.movie.next(movie);
  }

  setSchedule(sched: string) {
    this.schedule.next(sched);
  }

  resetContent() {
    this.movie.next('');
    this.schedule.next('');
  }
}
