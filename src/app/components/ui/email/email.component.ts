import { Component } from '@angular/core';

@Component({
  selector: 'app-email',
  standalone: true,
  template: `
    <div class="email">
      <a 
        href="mailto:hellomoca@design.io" 
        title="Send us an email" 
        class="email-link hover:opacity-75 transition-opacity">
        hellomocagmaiil.io
      </a>
    </div>
  `,
  styles: [`
    .email-link {
      color: inherit;
      text-decoration: none;
    }
  `]
})
export class EmailComponent {}