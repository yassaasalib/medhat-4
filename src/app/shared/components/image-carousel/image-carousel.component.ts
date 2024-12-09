import { Component, Input, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselImageComponent } from './carousel-image.component';
import { BehaviorSubject, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-image-carousel',
  standalone: true,
  imports: [CommonModule, CarouselImageComponent],
  template: `
    <div class="relative w-full h-full overflow-hidden">
      <app-carousel-image
        *ngFor="let image of images; let i = index; trackBy: trackByIndex"
        [src]="image"
        [alt]="'Carousel image ' + (i + 1)"
        [active]="currentIndex === i"
      ></app-carousel-image>
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
export class ImageCarouselComponent implements OnInit, OnDestroy {
  @Input() images: string[] = [];
  @Input() interval: number = 5000;
  @Input() autoPlay: boolean = true;

  currentIndex = 0;
  private intervalSubscription?: Subscription;

  ngOnInit() {
    if (this.autoPlay) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  private startAutoPlay() {
    this.intervalSubscription = interval(this.interval).subscribe(() => {
      this.next();
    });
  }

  private stopAutoPlay() {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  previous() {
    this.currentIndex = this.currentIndex === 0 
      ? this.images.length - 1 
      : this.currentIndex - 1;
  }

  trackByIndex(index: number): number {
    return index;
  }
}