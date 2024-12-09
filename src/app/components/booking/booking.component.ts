import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PhotoService } from '../../shared/types/services.interface';
import { PhotoServiceService } from '../../shared/services/photo.service';
import { DateSelectorComponent } from '../../shared/components/date-selector/date-selector.component';
import { EmailService } from '../../shared/services/email.service';
import { format } from 'date-fns';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    TranslateModule,
    DateSelectorComponent
  ],
  template: `
    <section class="min-h-screen w-full py-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-light text-white mb-4">{{ 'booking.title' | translate }}</h2>
          <p class="text-xl text-gray-400">{{ 'booking.subtitle' | translate }}</p>
        </div>

        <div class="bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 border border-white/10 shadow-xl">
          <form [formGroup]="bookingForm" (ngSubmit)="onSubmit()" class="space-y-6">
            <!-- Name Field -->
            <div>
              <label for="name" class="block text-sm font-medium text-gray-200">
                {{ 'booking.form.name' | translate }}
              </label>
              <input
                type="text"
                id="name"
                formControlName="name"
                class="mt-1 block w-full rounded-lg bg-black/30 border border-gray-600 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                [placeholder]="'booking.form.placeholders.name' | translate"
              />
            </div>

            <!-- Email Field -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-200">
                {{ 'booking.form.email' | translate }}
              </label>
              <input
                type="email"
                id="email"
                formControlName="email"
                class="mt-1 block w-full rounded-lg bg-black/30 border border-gray-600 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                [placeholder]="'booking.form.placeholders.email' | translate"
              />
            </div>

            <!-- Phone Field -->
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-200">
                {{ 'booking.form.phone' | translate }}
              </label>
              <input
                type="tel"
                id="phone"
                formControlName="phone"
                class="mt-1 block w-full rounded-lg bg-black/30 border border-gray-600 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                [placeholder]="'booking.form.placeholders.phone' | translate"
              />
            </div>

            <!-- Service Field -->
            <div>
              <label for="service" class="block text-sm font-medium text-gray-200">
                {{ 'booking.form.service' | translate }}
              </label>
              <select
                id="service"
                formControlName="service"
                class="mt-1 block w-full rounded-lg bg-black/30 border border-gray-600 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="" disabled>{{ 'booking.form.selectService' | translate }}</option>
                <option *ngFor="let service of services" [value]="service.name">
                  {{ 'services.categories.' + getServiceKey(service) + '.title' | translate }}
                </option>
              </select>
            </div>

            <!-- Date Field -->
            <div>
              <app-date-selector
                [label]="'booking.form.date' | translate"
                [placeholder]="'booking.form.placeholders.date' | translate"
                (dateSelected)="onDateSelected($event)"
              ></app-date-selector>
            </div>

            <!-- Message Field -->
            <div>
              <label for="message" class="block text-sm font-medium text-gray-200">
                {{ 'booking.form.message' | translate }}
                <span class="text-gray-400 text-xs">
                  ({{ 'booking.form.optional' | translate }})
                </span>
              </label>
              <textarea
                id="message"
                formControlName="message"
                rows="4"
                class="mt-1 block w-full rounded-lg bg-black/30 border border-gray-600 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                [placeholder]="'booking.form.placeholders.message' | translate"
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              [disabled]="bookingForm.invalid || isSubmitting"
              class="w-full py-4 px-6 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <span *ngIf="!isSubmitting">{{ 'booking.form.submit' | translate }}</span>
              <span *ngIf="isSubmitting">{{ 'booking.form.submitting' | translate }}</span>
            </button>

            <!-- Success Message -->
            <div *ngIf="submitSuccess" class="text-green-500 text-center animate-fade-in">
              {{ 'booking.form.success' | translate }}
            </div>

            <!-- Error Message -->
            <div *ngIf="submitError" class="text-red-500 text-center animate-fade-in">
              {{ 'booking.form.error' | translate }}
            </div>
          </form>
        </div>
      </div>
    </section>
  `
})
export class BookingComponent {
  bookingForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  services: PhotoService[] = [];

  constructor(
    private fb: FormBuilder,
    private photoService: PhotoServiceService,
    private translate: TranslateService,
    private emailService: EmailService
  ) {
    this.bookingForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      service: ['', Validators.required],
      date: ['', Validators.required],
      message: ['']
    });

    this.photoService.getServices().subscribe(services => {
      this.services = services;
    });
  }

  onDateSelected(date: Date) {
    this.bookingForm.patchValue({ date });
  }

  getServiceKey(service: PhotoService): string {
    const keyMap: { [key: string]: string } = {
      'Portrait Photography': 'portrait',
      'Wedding Photography': 'wedding',
      'Commercial Photography': 'commercial',
      'Event Photography': 'event',
      'Product Photography': 'product',
      'Landscape Photography': 'landscape',
      'Architectural Photography': 'architectural'
    };
    
    return keyMap[service.name] || 'portrait';
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      this.isSubmitting = true;
      this.submitSuccess = false;
      this.submitError = false;

      const formData = {
        ...this.bookingForm.value,
        date: format(this.bookingForm.value.date, 'PPP')
      };

      this.emailService.sendBookingEmail(formData).subscribe({
        next: () => {
          this.isSubmitting = false;
          this.submitSuccess = true;
          this.bookingForm.reset();
        },
        error: () => {
          this.isSubmitting = false;
          this.submitError = true;
        }
      });
    }
  }
}