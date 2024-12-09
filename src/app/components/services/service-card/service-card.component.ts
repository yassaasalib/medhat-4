import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PhotoService } from '../../../shared/types/services.interface';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  template: `
    <div class="service-card group bg-black/30 backdrop-blur-sm rounded-2xl overflow-hidden 
                border border-gray-800 transition-all duration-500 hover:transform hover:scale-[1.02]
                hover:border-gray-700">
      <div class="relative aspect-[4/3] overflow-hidden">
        <img 
          [src]="service.imageUrl" 
          [alt]="service.name"
          loading="lazy"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>
      
      <div class="p-6 md:p-7 lg:p-8 space-y-6">
        <div class="space-y-3">
          <h3 class="text-xl md:text-2xl font-light text-white group-hover:text-orange-500 transition-colors">
            {{ service.name }}
          </h3>
          
          <p class="text-gray-400 line-clamp-3 text-sm md:text-base">
            {{ service.description }}
          </p>
        </div>
        
        <div class="space-y-4 pt-2">
          <div class="flex justify-between items-center text-gray-300">
            <span class="text-xs md:text-sm">{{ 'services.duration' | translate }}: {{service.duration}}</span>
            <span class="text-lg md:text-xl text-orange-500">
              {{ 'services.startingAt' | translate }} {{service.basePrice | currency}}
            </span>
          </div>
          
          <a [routerLink]="['/services', service.id]" 
             class="block w-full py-3.5 px-6 text-center border border-orange-500 text-orange-500 
                    hover:bg-orange-500 hover:text-white transition-all duration-300 rounded-lg 
                    text-sm md:text-base touch-target">
            {{ 'services.learnMore' | translate }}
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }

    .service-card {
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      transform: translateY(0);
      will-change: transform;
    }

    .service-card:hover {
      box-shadow: 0 8px 40px rgba(0, 0, 0, 0.2);
    }

    @media (prefers-reduced-motion: reduce) {
      .service-card {
        transition: none;
      }
      
      .service-card:hover {
        transform: none;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceCardComponent {
  @Input() service!: PhotoService;
}