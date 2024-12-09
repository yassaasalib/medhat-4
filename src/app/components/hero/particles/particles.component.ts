import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-particles',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="particles-container absolute inset-0 z-15 opacity-30">
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
    </div>
  `,
  styles: [`
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

    @media (prefers-reduced-motion: reduce) {
      .firefly {
        animation: none;
        opacity: 0.3;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParticlesComponent {}