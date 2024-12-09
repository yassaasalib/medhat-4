import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {}

  scrollToElement(elementId: string): void {
    if (isPlatformBrowser(this.platformId)) {
      // First navigate to the home page if we're not already there
      this.router.navigate(['/']).then(() => {
        // Wait for navigation and DOM update
        setTimeout(() => {
          const element = document.getElementById(elementId);
          if (element) {
            const headerOffset = 80; // Account for fixed header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100); // Small delay to ensure DOM is updated
      });
    }
  }

  scrollToTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}