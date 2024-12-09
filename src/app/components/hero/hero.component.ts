import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from '../services/services.component';
import { RouterModule } from '@angular/router';
import { BookingComponent } from '../booking/booking.component';
import { ScrollGalleryComponent } from '../../shared/components/gallery/scroll-gallery.component';
import { SlideshowComponent } from '../../shared/components/slideshow/slideshow.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    ServicesComponent,
    RouterModule,
    BookingComponent,
    ScrollGalleryComponent,
    SlideshowComponent
  ],
  template: `
    <div>
      <section id="hero" class="hero relative w-full h-screen overflow-hidden bg-black">
        <app-slideshow
          [images]="images"
          [interval]="4000"
          class="absolute inset-0"
        ></app-slideshow>
        
        <div class="absolute inset-0 bg-black/30 z-10"></div>

        <!-- Decorative elements -->
        <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-30"></div>
        
        <!-- Animated particles -->
        <div class="absolute inset-0 z-15 opacity-30">
          <div class="firefly"></div>
          <div class="firefly"></div>
          <div class="firefly"></div>
          <div class="firefly"></div>
          <div class="firefly"></div>
        </div>
      </section>
      <app-services></app-services>
      <app-scroll-gallery></app-scroll-gallery>
      <section id="booking">
        <app-booking></app-booking>
      </section>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }

    .hero {
      height: 100vh;
      min-height: 600px;
      max-height: 1080px;
    }

    .firefly {
      position: absolute;
      width: 3px;
      height: 3px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      animation: move 4s infinite;
      opacity: 0;
    }

    .firefly:nth-child(1) { left: 20%; animation-delay: 0s; }
    .firefly:nth-child(2) { left: 40%; animation-delay: 1s; }
    .firefly:nth-child(3) { left: 60%; animation-delay: 2s; }
    .firefly:nth-child(4) { left: 80%; animation-delay: 3s; }
    .firefly:nth-child(5) { left: 90%; animation-delay: 4s; }

    @keyframes move {
      0% {
        transform: translateY(100vh);
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: translateY(-100vh);
        opacity: 0;
      }
    }

    :host ::ng-deep section {
      scroll-margin-top: 80px;
    }

    @media (prefers-reduced-motion: reduce) {
      .firefly {
        animation: none;
      }
    }
  `]
})
export class HeroComponent {
  images = [
    'https://studiomedhat.com/uploads/image/image_1725909659.jpg',
    'https://studiomedhat.com/uploads/image/image_1725909675.jpg',
    'https://studiomedhat.com/uploads/image/image_1725909696.jpg'
  ];
}