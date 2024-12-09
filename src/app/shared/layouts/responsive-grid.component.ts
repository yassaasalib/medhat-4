import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-responsive-grid',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="gridClass">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }

    .grid-base {
      display: grid;
      gap: var(--space-4);
      width: 100%;
    }

    .grid-1 {
      grid-template-columns: repeat(1, 1fr);
    }

    @media (min-width: 640px) {
      .grid-sm-2 {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 768px) {
      .grid-md-3 {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media (min-width: 1024px) {
      .grid-lg-4 {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  `]
})
export class ResponsiveGridComponent {
  @Input() columns: number = 1;
  @Input() smColumns: number = 2;
  @Input() mdColumns: number = 3;
  @Input() lgColumns: number = 4;

  get gridClass(): string {
    return `grid-base grid-${this.columns} grid-sm-${this.smColumns} grid-md-${this.mdColumns} grid-lg-${this.lgColumns}`;
  }
}