import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-business-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-3">
      <a href="tel:+201205895924" 
         class="flex items-center space-x-3 rtl:space-x-reverse hover:text-orange-500 transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
        <span dir="ltr">+20 12 0589 5924</span>
      </a>
      <a href="mailto:info@studiomedhat.com" 
         class="flex items-center space-x-3 rtl:space-x-reverse hover:text-orange-500 transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
        <span>info@studiomedhat.com</span>
      </a>
      <div class="flex items-start space-x-3 rtl:space-x-reverse">
        <svg class="w-5 h-5 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
        <address class="not-italic">
          <a href="https://www.google.com/maps/place/Studio+Medhat/@30.109043,31.339675,14z/data=!4m6!3m5!1s0x14581554198a5b05:0x93048924a48d035f!8m2!3d30.1090431!4d31.3396746!16s%2Fg%2F11jsf4pyqw?hl=ar&entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D" 
             target="_blank" 
             rel="noopener noreferrer"
             class="hover:text-orange-500 transition-colors">
            {{ getAddress() }}
          </a>
        </address>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BusinessLocationComponent {
  constructor(private translate: TranslateService) {}

  getAddress(): string {
    const currentLang = this.translate.currentLang;
    
    if (currentLang === 'ar') {
      return '٨٨ شارع الحجاز، المطار، قسم النزهة، محافظة القاهرة‬ 4470323';
    }
    
    return '88 El Hegaz Street\nAirport, El Nozha District\nCairo Governorate 4470323\nEgypt';
  }
}