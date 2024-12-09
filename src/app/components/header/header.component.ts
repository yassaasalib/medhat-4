import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { ScrollService } from '../../shared/services/scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, TranslateModule, LanguageSwitcherComponent],
  template: `
    <header class="fixed w-full z-50 px-4 sm:px-8 py-4">
      <nav class="max-w-7xl mx-auto flex justify-between items-center bg-black/80 backdrop-blur-md rounded-full px-6 py-4">
        <a (click)="scrollToTop($event)" class="text-2xl font-light text-orange-500 transition-colors duration-300 hover:text-orange-400 cursor-pointer">
          Studio Mediate
        </a>
        
        <div class="hidden md:flex items-center gap-8">
          <div class="flex gap-8 text-white">
            <a (click)="scrollToSection($event, 'hero')" 
               class="hover:text-orange-500 transition-colors cursor-pointer">
              {{ 'header.home' | translate }}
            </a>
            <a (click)="scrollToSection($event, 'services')" 
               class="hover:text-orange-500 transition-colors cursor-pointer">
              {{ 'header.services' | translate }}
            </a>
            <a (click)="scrollToSection($event, 'booking')" 
               class="hover:text-orange-500 transition-colors cursor-pointer">
              {{ 'header.booking' | translate }}
            </a>
          </div>
          <app-language-switcher></app-language-switcher>
        </div>

        <button 
          (click)="toggleMenu()"
          class="md:hidden text-white p-2 hover:text-orange-500 transition-colors"
          aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      <div *ngIf="isMenuOpen" class="fixed inset-0 bg-black/95 z-50 md:hidden">
        <div class="flex flex-col items-center justify-center h-full">
          <button 
            (click)="toggleMenu()"
            class="absolute top-8 right-8 text-white p-2 hover:text-orange-500 transition-colors"
            aria-label="Close menu">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div class="flex flex-col items-center gap-8">
            <a (click)="scrollToSectionAndCloseMenu($event, 'hero')" 
               class="text-2xl text-white hover:text-orange-500 transition-colors cursor-pointer">
              {{ 'header.home' | translate }}
            </a>
            <a (click)="scrollToSectionAndCloseMenu($event, 'services')" 
               class="text-2xl text-white hover:text-orange-500 transition-colors cursor-pointer">
              {{ 'header.services' | translate }}
            </a>
            <a (click)="scrollToSectionAndCloseMenu($event, 'booking')" 
               class="text-2xl text-white hover:text-orange-500 transition-colors cursor-pointer">
              {{ 'header.booking' | translate }}
            </a>
            <app-language-switcher></app-language-switcher>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [`
    :host {
      display: block;
    }

    @media (prefers-reduced-motion: no-preference) {
      a, button {
        transition: all 0.3s ease;
      }
    }
  `]
})
export class HeaderComponent {
  isMenuOpen = false;

  constructor(private scrollService: ScrollService) {}

  scrollToTop(event: Event): void {
    event.preventDefault();
    this.scrollService.scrollToTop();
  }

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    this.scrollService.scrollToElement(sectionId);
  }

  scrollToSectionAndCloseMenu(event: Event, sectionId: string): void {
    this.scrollToSection(event, sectionId);
    this.toggleMenu();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }
}