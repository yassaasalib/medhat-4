import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-6">
      <h3 class="text-lg font-medium text-white">{{ title }}</h3>
      <div class="space-y-4">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }

    h3 {
      position: relative;
      padding-bottom: 0.5rem;
    }

    h3::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 2rem;
      height: 2px;
      background: linear-gradient(90deg, #f97316, transparent);
    }

    :host-context([dir="rtl"]) h3::after {
      left: auto;
      right: 0;
      background: linear-gradient(270deg, #f97316, transparent);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterSectionComponent {
  @Input() title: string = '';
}