import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-creative-text',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="creative-text text-center">
      <h1 class="relative">
        <span class="block text-[12vw] leading-none font-light hover:scale-105 transition-transform duration-500">
          creating
        </span>
        <span class="block mt-4 text-[8vw] text-orange-500 font-light italic opacity-90">
          (feeling)
        </span>
      </h1>
    </div>
  `,
  styles: [`
    .creative-text {
      transform-style: preserve-3d;
      perspective: 1000px;
    }

    h1 span {
      display: block;
      text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
      animation: float 6s ease-in-out infinite;
    }

    h1 span:last-child {
      animation: glow 4s ease-in-out infinite alternate;
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-20px);
      }
    }

    @keyframes glow {
      from {
        text-shadow: 0 0 20px rgba(249, 115, 22, 0.5),
                     0 0 40px rgba(249, 115, 22, 0.3);
      }
      to {
        text-shadow: 0 0 30px rgba(249, 115, 22, 0.7),
                     0 0 60px rgba(249, 115, 22, 0.5);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      h1 span {
        animation: none;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreativeTextComponent {}