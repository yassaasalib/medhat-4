import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollRowComponent } from './scroll-row.component';
import { CloudComponent } from './cloud.component';

@Component({
  selector: 'app-scroll-gallery',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    ScrollRowComponent,
    CloudComponent
  ],
  template: `
    <section class="relative py-24 overflow-hidden bg-gradient-to-b from-neutral-900 to-black">
      <!-- Gallery Title -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-light text-white">
          {{ 'header.gallery' | translate }}
        </h2>
      </div>

      <!-- Decorative Clouds -->
      <app-cloud position="left" top="10%" [opacity]="0.02"></app-cloud>
      <app-cloud position="right" top="25%" [opacity]="0.03"></app-cloud>
      <app-cloud position="left" top="45%" [opacity]="0.02"></app-cloud>
      <app-cloud position="right" top="65%" [opacity]="0.03"></app-cloud>
      <app-cloud position="left" top="85%" [opacity]="0.02"></app-cloud>
      
      <!-- Left shadow overlay -->
      <div class="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-neutral-900 to-transparent z-10"></div>
      
      <!-- Right shadow overlay -->
      <div class="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-neutral-900 to-transparent z-10"></div>
      
      <!-- Gallery content -->
      <div class="relative space-y-8">
        <app-scroll-row 
          [images]="row1Images" 
          [direction]="'rtl'">
        </app-scroll-row>
        
        <app-scroll-row 
          [images]="row2Images" 
          [direction]="'ltr'">
        </app-scroll-row>

        <app-scroll-row 
          [images]="row3Images" 
          [direction]="'rtl'">
        </app-scroll-row>

        <app-scroll-row 
          [images]="row4Images" 
          [direction]="'ltr'">
        </app-scroll-row>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollGalleryComponent {
  row1Images = [
    'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1505968409348-bd000797c92e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?auto=format&fit=crop&w=800&q=80'
  ];

  row2Images = [
    'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80'
  ];

  row3Images = [
    'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1509523741335-b95c2ff9c9a1?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
  ];

  row4Images = [
    'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1518021964703-4b2030f03085?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1511207538754-e8555f2bc187?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2?auto=format&fit=crop&w=800&q=80'
  ];
}