import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      class="slide absolute inset-0"
      [class.active]="active"
      [class.next]="next"
      [class.previous]="previous">
      <img 
        [src]="imageUrl" 
        alt="Slideshow image"
        class="w-full h-full object-cover"
        loading="eager"
        decoding="async"
      />
    </div>
  `,
  styles: [`
    .slide {
      opacity: 0;
      transition: opacity 1s ease-in-out;
      will-change: opacity;
    }

    .slide.active {
      opacity: 1;
      z-index: 2;
    }

    .slide.next,
    .slide.previous {
      opacity: 0;
      z-index: 1;
    }

    img {
      transform: scale(1.02);
      transition: transform 8s ease-out;
    }

    .active img {
      transform: scale(1);
    }

    @media (prefers-reduced-motion: reduce) {
      .slide {
        transition: none;
      }
      
      img {
        transform: none;
        transition: none;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideComponent {
  @Input() imageUrl!: string;
  @Input() active = false;
  @Input() next = false;
  @Input() previous = false;
}