import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ResponsiveContainerComponent } from '../../shared/layouts/responsive-container.component';
import { ResponsiveGridComponent } from '../../shared/layouts/responsive-grid.component';
import { ServiceCardComponent } from './service-card/service-card.component';
import { PhotoService } from '../../shared/types/services.interface';
import { PhotoServiceService } from '../../shared/services/photo.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    TranslateModule,
    ResponsiveContainerComponent,
    ResponsiveGridComponent,
    ServiceCardComponent
  ],
  template: `
    <section id="services" class="services relative py-24 bg-gradient-to-b from-black via-black to-neutral-900">
      <app-responsive-container [withPadding]="true">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-light mb-4 text-white">
            {{ 'services.title' | translate }}
          </h2>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto">
            {{ 'services.subtitle' | translate }}
          </p>
        </div>
        
        <app-responsive-grid [columns]="1" [smColumns]="2" [mdColumns]="2" [lgColumns]="3">
          <app-service-card 
            *ngFor="let service of services; trackBy: trackByServiceId" 
            [service]="service">
          </app-service-card>
        </app-responsive-grid>
      </app-responsive-container>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }

    :host ::ng-deep section {
      scroll-margin-top: 80px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesComponent {
  services: PhotoService[] = [];

  constructor(private photoService: PhotoServiceService) {
    this.photoService.getServices().subscribe(services => {
      this.services = services;
    });
  }

  trackByServiceId(index: number, service: PhotoService): number {
    return service.id;
  }
}