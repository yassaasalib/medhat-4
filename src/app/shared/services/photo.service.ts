import { Injectable } from '@angular/core';
import { PhotoService } from '../types/services.interface';
import { servicesData } from '../data/services/services.data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoServiceService {
  private services: PhotoService[] = servicesData;

  getServices(): Observable<PhotoService[]> {
    return of(this.services);
  }

  getServiceById(id: number): Observable<PhotoService | undefined> {
    return of(this.services.find(service => service.id === id));
  }
}