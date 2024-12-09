import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-responsive-container',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      class="container"
      [class.responsive-padding]="withPadding"
      [class.responsive-margin]="withMargin">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
})
export class ResponsiveContainerComponent {
  @Input() withPadding = false;
  @Input() withMargin = false;
}