import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { ServiceDetailsComponent } from './components/services/service-details/service-details.component';

export const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services/:id', component: ServiceDetailsComponent }
];