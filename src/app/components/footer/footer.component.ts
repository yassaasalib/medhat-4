import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { BusinessLocationComponent } from '../../shared/components/business-location/business-location.component';
import { ResponsiveContainerComponent } from '../../shared/layouts/responsive-container.component';
import { ScrollService } from '../../shared/services/scroll.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    FooterSectionComponent,
    SocialLinksComponent,
    BusinessLocationComponent,
    ResponsiveContainerComponent
  ],
  template: `
    <footer class="relative">
      <!-- Background with gradient and noise texture -->
      <div class="absolute inset-0 bg-gradient-to-b from-neutral-900 to-black opacity-95">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] opacity-20"></div>
      </div>

      <app-responsive-container [withPadding]="true">
        <!-- Main Footer Content -->
        <div class="relative py-24">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            <!-- Brand Section -->
            <app-footer-section [title]="'footer.about' | translate">
              <div class="space-y-10">
                <div class="space-y-6">
                  <h2 class="text-2xl font-light text-orange-500">Studio Medhat</h2>
                  <p class="text-sm leading-relaxed text-gray-300">
                    {{ 'footer.description' | translate }}
                  </p>
                </div>
                <app-social-links></app-social-links>
              </div>
            </app-footer-section>

            <!-- Quick Links -->
            <app-footer-section [title]="'footer.quickLinks' | translate">
              <nav class="space-y-4">
                <a *ngFor="let link of quickLinks" 
                   (click)="scrollToSection(link.route)"
                   class="block text-gray-400 hover:text-orange-500 transition-colors cursor-pointer">
                  {{ link.label | translate }}
                </a>
              </nav>
            </app-footer-section>

            <!-- Contact Info -->
            <app-footer-section [title]="'footer.contact' | translate">
              <app-business-location></app-business-location>
            </app-footer-section>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="relative border-t border-white/10">
          <div class="py-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p class="text-sm text-gray-400">
              © {{ currentYear }} Studio Medhat.
            </p>
          </div>
        </div>
      </app-responsive-container>
    </footer>
  `,
  styles: [`
    :host {
      display: block;
      position: relative;
      z-index: 1;
    }

    footer {
      position: relative;
      overflow: hidden;
    }

    footer::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.1),
        transparent
      );
    }

    @media (prefers-reduced-motion: reduce) {
      a {
        transition: none;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'header.home', route: 'hero' },
    { label: 'header.services', route: 'services' },
    { label: 'header.booking', route: 'booking' }
  ];

  constructor(private scrollService: ScrollService) {}

  scrollToSection(sectionId: string): void {
    this.scrollService.scrollToElement(sectionId);
  }
}