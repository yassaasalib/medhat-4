import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { TimeService } from '../../shared/services/time.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <div class="fixed bottom-8 flex justify-between w-full px-8 text-white z-50">
      <div class="time">GMT+8 {{currentTime$ | async}}</div>
      <div class="location">Toronto, Canada</div>
    </div>
  `,
})
export class LocationComponent implements OnInit {
  currentTime$!: Observable<string>;

  constructor(private timeService: TimeService) {}

  ngOnInit() {
    this.currentTime$ = this.timeService.getTime();
  }
}