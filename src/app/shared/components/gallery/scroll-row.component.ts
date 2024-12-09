import { Component, Input, OnInit, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryImageComponent } from './gallery-image.component';

@Component({
  selector: 'app-scroll-row',
  standalone: true,
  imports: [CommonModule, GalleryImageComponent],
  template: `
    <div class="scroll-container" [class.rtl]="direction === 'rtl'">
      <div class="scroll-content" #scrollContent>
        <div class="flex gap-4">
          <app-gallery-image 
            *ngFor="let image of duplicatedImages; trackBy: trackByIndex" 
            [src]="image"
            [direction]="direction">
          </app-gallery-image>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .scroll-container {
      width: 100%;
      overflow: hidden;
      position: relative;
    }

    .scroll-content {
      display: flex;
      will-change: transform;
    }

    .rtl .scroll-content {
      animation: scrollRTL 60s linear infinite;
    }

    .scroll-content:not(.rtl) {
      animation: scrollLTR 60s linear infinite;
    }

    @keyframes scrollRTL {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-50%);
      }
    }

    @keyframes scrollLTR {
      from {
        transform: translateX(-50%);
      }
      to {
        transform: translateX(0);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .scroll-content {
        animation: none;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollRowComponent implements OnInit {
  @Input() images: string[] = [];
  @Input() direction: 'ltr' | 'rtl' = 'ltr';

  duplicatedImages: string[] = [];

  constructor(private el: ElementRef) {}

  ngOnInit() {
    // Duplicate images to create seamless scrolling effect
    this.duplicatedImages = [...this.images, ...this.images];
  }

  trackByIndex(index: number): number {
    return index;
  }
}