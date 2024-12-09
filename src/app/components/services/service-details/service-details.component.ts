import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PhotoServiceService } from '../../../shared/services/photo.service';
import { PhotoService } from '../../../shared/types/services.interface';
import { ScrollService } from '../../../shared/services/scroll.service';

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="service-details min-h-screen bg-black text-white py-32">
      <div class="max-w-6xl mx-auto px-8">
        <button 
          (click)="navigateBack()"
          class="inline-block mb-8 text-gray-400 hover:text-white transition-colors">
          ← Back to Services
        </button>
        
        <div *ngIf="service" class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div class="relative aspect-[4/3] overflow-hidden rounded-lg">
            <img 
              [src]="service.imageUrl" 
              [alt]="service.name"
              class="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h1 class="text-4xl font-light mb-4">{{service.name}}</h1>
            <p class="text-xl text-gray-400 mb-6">{{service.description}}</p>
            
            <div class="flex items-center justify-between mb-8 p-4 bg-white/5 rounded-lg">
              <div>
                <span class="block text-gray-400">Starting at</span>
                <span class="text-3xl">{{service.basePrice | currency}}</span>
              </div>
              <div class="text-right">
                <span class="block text-gray-400">Duration</span>
                <span class="text-xl">{{service.duration}}</span>
              </div>
            </div>
            
            <div class="mb-8">
              <h2 class="text-2xl mb-4">What's Included</h2>
              <ul class="space-y-3">
                <li *ngFor="let inclusion of service.inclusions" class="flex items-center text-gray-300">
                  <span class="mr-2">•</span>
                  {{inclusion}}
                </li>
              </ul>
            </div>
            
            <div>
              <h2 class="text-2xl mb-4">Available Add-ons</h2>
              <div class="grid gap-4">
                <div *ngFor="let addon of service.addOns" class="p-4 bg-white/5 rounded-lg">
                  <div class="flex justify-between items-center mb-2">
                    <h3 class="text-xl">{{addon.name}}</h3>
                    <span class="text-xl">{{addon.price | currency}}</span>
                  </div>
                  <p *ngIf="addon.description" class="text-gray-400">{{addon.description}}</p>
                  <p *ngIf="addon.duration" class="text-gray-400">Duration: {{addon.duration}}</p>
                </div>
              </div>
            </div>
            
            <button 
              (click)="navigateToBooking()"
              class="w-full mt-8 py-4 px-6 bg-white text-black hover:bg-gray-200 transition-colors rounded-lg text-lg">
              Book Now
            </button>
          </div>
        </div>
        
        <div *ngIf="!service" class="text-center">
          <p class="text-xl text-gray-400">Service not found</p>
        </div>
      </div>
    </section>
  `
})
export class ServiceDetailsComponent implements OnInit {
  service?: PhotoService;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoServiceService,
    private scrollService: ScrollService
  ) {}

  ngOnInit() {
    // Scroll to top when component initializes
    this.scrollService.scrollToTop();
    
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.photoService.getServiceById(id).subscribe(service => {
        this.service = service;
      });
    });
  }

  navigateBack(): void {
    this.scrollService.scrollToElement('services');
  }

  navigateToBooking(): void {
    this.scrollService.scrollToElement('booking');
  }
}