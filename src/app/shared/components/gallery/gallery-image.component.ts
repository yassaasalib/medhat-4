import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery-image',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="image-container" [class.rtl]="direction === 'rtl'">
      <img
        [src]="src"
        alt="Gallery image"
        class="gallery-image"
        loading="lazy"
      />
    </div>
  `,
  styles: [`
    .image-container {
      position: relative;
      width: 300px;
      height: 200px;
      overflow: hidden;
      border-radius: 12px;
      transform: translateZ(0);
    }

    .gallery-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .image-container:hover .gallery-image {
      transform: scale(1.05);
    }

    @media (max-width: 768px) {
      .image-container {
        width: 250px;
        height: 166px;
      }
    }

    @media (max-width: 640px) {
      .image-container {
        width: 200px;
        height: 133px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .gallery-image {
        transition: none;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryImageComponent {
  @Input() src!: string;
  @Input() direction: 'ltr' | 'rtl' = 'ltr';
}