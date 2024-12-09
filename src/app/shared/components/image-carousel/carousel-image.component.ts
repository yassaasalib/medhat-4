import { Component, Input, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel-image',
  standalone: true,
  imports: [CommonModule],
  template: `
    <img 
      [src]="src" 
      [alt]="alt"
      class="w-full h-full object-cover"
      [class.opacity-100]="active"
      [class.opacity-0]="!active"
    />
  `,
  styles: [`
    :host {
      display: block;
      position: absolute;
      inset: 0;
      overflow: hidden;
    }

    img {
      transition: opacity 800ms cubic-bezier(0.4, 0, 0.2, 1);
      will-change: opacity;
    }

    @media (prefers-reduced-motion: reduce) {
      img {
        transition: none;
      }
    }
  `]
})
export class CarouselImageComponent {
  @Input() src!: string;
  @Input() alt: string = '';
  @Input() active: boolean = false;

  @HostBinding('style.z-index') get zIndex() {
    return this.active ? 1 : 0;
  }
}