import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cloud',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      class="cloud" 
      [class.right]="position === 'right'"
      [style.top]="top"
      [style.opacity]="opacity">
      <svg viewBox="0 0 100 100" fill="currentColor" class="w-full h-full">
        <path d="M95 65c0 11-9 20-20 20H25c-11 0-20-9-20-20 0-8.6 5.5-16 13.2-18.8C19.3 35.5 28.4 28 39.5 28c4.4 0 8.5 1.1 12.1 3.1C54.7 21.4 64.3 15 75 15c16.6 0 30 13.4 30 30 0 6.2-1.9 11.9-5.1 16.7C93.6 62.8 95 64.2 95 65z"/>
      </svg>
    </div>
  `,
  styles: [`
    .cloud {
      position: absolute;
      width: 120px;
      height: 120px;
      color: rgba(255, 255, 255, 0.03);
      transform: translateZ(0);
      pointer-events: none;
      transition: opacity 0.5s ease;
    }

    .cloud.right {
      right: 0;
      transform: scaleX(-1) translateZ(0);
    }

    @media (max-width: 768px) {
      .cloud {
        width: 80px;
        height: 80px;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CloudComponent {
  @Input() position: 'left' | 'right' = 'left';
  @Input() top: string = '0px';
  @Input() opacity: number = 0.03;
}