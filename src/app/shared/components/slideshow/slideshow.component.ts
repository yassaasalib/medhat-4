import { Component, Input, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideComponent } from './slide/slide.component';

@Component({
  selector: 'app-slideshow',
  standalone: true,
  imports: [CommonModule, SlideComponent],
  template: `
    <div class="relative w-full h-full overflow-hidden">
      <app-slide
        *ngFor="let image of images; let i = index"
        [imageUrl]="image"
        [active]="i === currentIndex"
        [next]="i === nextIndex"
        [previous]="i === previousIndex"
      ></app-slide>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideshowComponent implements OnInit, OnDestroy {
  @Input() images: string[] = [];
  @Input() interval = 4000;

  currentIndex = 0;
  nextIndex = 0;
  previousIndex = 0;
  private intervalId?: number;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.startSlideshow();
    this.preloadImages();
  }

  ngOnDestroy() {
    this.stopSlideshow();
  }

  private startSlideshow() {
    this.updateIndices();
    this.intervalId = window.setInterval(() => {
      this.next();
    }, this.interval);
  }

  private stopSlideshow() {
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
    }
  }

  private next() {
    this.previousIndex = this.currentIndex;
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.nextIndex = (this.currentIndex + 1) % this.images.length;
    this.cdr.markForCheck();
  }

  private updateIndices() {
    this.previousIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.nextIndex = (this.currentIndex + 1) % this.images.length;
  }

  private preloadImages() {
    this.images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }
}