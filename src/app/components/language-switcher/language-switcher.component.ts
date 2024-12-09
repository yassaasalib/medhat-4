import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="flex items-center gap-4">
      <button 
        (click)="setLanguage('en')"
        class="flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300"
        [ngClass]="{'bg-white/10': getCurrentLang() === 'en'}">
        <span class="text-xl">🇬🇧</span>
        <span class="text-white text-sm">English</span>
      </button>

      <button 
        (click)="setLanguage('ar')"
        class="flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300"
        [ngClass]="{'bg-white/10': getCurrentLang() === 'ar'}">
        <span class="text-xl">🇪🇬</span>
        <span class="text-white text-sm">عربي</span>
      </button>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }

    button {
      transition: transform 0.2s ease;
    }

    button:hover {
      transform: translateY(-1px);
    }

    button:active {
      transform: translateY(0);
    }
  `]
})
export class LanguageSwitcherComponent {
  constructor(
    private languageService: LanguageService,
    private translate: TranslateService
  ) {}

  getCurrentLang(): string {
    return this.languageService.getCurrentLanguage();
  }

  setLanguage(lang: string): void {
    this.languageService.setLanguage(lang);
    this.translate.use(lang);
  }
}