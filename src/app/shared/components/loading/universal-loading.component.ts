import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-universal-loading',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      *ngIf="isLoading$ | async"
      class="fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-500"
      [class.opacity-0]="!(isLoading$ | async)"
      [class.pointer-events-none]="!(isLoading$ | async)">
      <div class="relative">
        <!-- Main spinner -->
        <div class="spinner">
          <div class="spinner-ring"></div>
        </div>
        
        <!-- Loading text -->
        <div class="mt-8 text-white text-center opacity-80">
          <span class="loading-text">Loading</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }

    .spinner {
      width: 80px;
      height: 80px;
      position: relative;
      perspective: 1000px;
    }

    .spinner-ring {
      position: absolute;
      width: 100%;
      height: 100%;
      border: 3px solid transparent;
      border-top-color: #ff4d00;
      border-radius: 50%;
      animation: spin 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
      will-change: transform;
    }

    .spinner-ring::before,
    .spinner-ring::after {
      content: '';
      position: absolute;
      border: 3px solid transparent;
      border-radius: 50%;
      will-change: transform;
    }

    .spinner-ring::before {
      inset: 5px;
      border-top-color: #ff7a00;
      animation: spin 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite reverse;
    }

    .spinner-ring::after {
      inset: 15px;
      border-top-color: #ffa700;
      animation: spin 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
    }

    .loading-text {
      display: inline-block;
      font-size: 1.125rem;
      letter-spacing: 0.1em;
      animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }

    @media (prefers-reduced-motion: reduce) {
      .spinner-ring,
      .spinner-ring::before,
      .spinner-ring::after {
        animation: none;
      }

      .loading-text {
        animation: none;
      }
    }
  `]
})
export class UniversalLoadingComponent implements OnInit {
  private isLoadingSubject = new BehaviorSubject<boolean>(true);
  isLoading$ = this.isLoadingSubject.asObservable();

  ngOnInit() {
    // Ensure the loader shows for exactly 4 seconds
    setTimeout(() => {
      this.isLoadingSubject.next(false);
    }, 4000);
  }
}