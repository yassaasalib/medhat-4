import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { TimeConfig } from '../types/time.interface';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  private timeConfig: TimeConfig = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  };

  private currentTime$ = new BehaviorSubject<string>(
    this.formatTime(new Date())
  );

  constructor() {
    interval(1000)
      .pipe(
        map(() => this.formatTime(new Date()))
      )
      .subscribe(time => this.currentTime$.next(time));
  }

  private formatTime(date: Date): string {
    return date.toLocaleTimeString('en-US', this.timeConfig);
  }

  getTime() {
    return this.currentTime$.asObservable();
  }
}