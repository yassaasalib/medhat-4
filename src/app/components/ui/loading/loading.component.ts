import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loading-container" *ngIf="isLoading">
      <div class="loading-spinner">
        <div class="spinner-ring"></div>
      </div>
    </div>
  `,
  styles: [`
    .loading-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #000000;
      z-index: 9999;
      opacity: 0;
      animation: fadeIn 0.3s ease-in forwards;
    }

    .loading-spinner {
      width: 80px;
      height: 80px;
      position: relative;
    }

    .spinner-ring {
      position: absolute;
      width: 100%;
      height: 100%;
      border: 3px solid transparent;
      border-top-color: #ff4d00;
      border-radius: 50%;
      animation: spin 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
    }

    .spinner-ring::before,
    .spinner-ring::after {
      content: '';
      position: absolute;
      border: 3px solid transparent;
      border-radius: 50%;
    }

    .spinner-ring::before {
      top: 5px;
      left: 5px;
      right: 5px;
      bottom: 5px;
      border-top-color: #ff7a00;
      animation: spin 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite reverse;
    }

    .spinner-ring::after {
      top: 15px;
      left: 15px;
      right: 15px;
      bottom: 15px;
      border-top-color: #ffa700;
      animation: spin 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `]
})
export class LoadingComponent implements OnInit {
  isLoading = true;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
}