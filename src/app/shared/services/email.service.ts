import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private readonly SERVICE_ID = 'service_f7qjinm';
  private readonly TEMPLATE_ID = 'template_lko4sys';
  private readonly PUBLIC_KEY = 'M16v1GDIkNGaUQ25I';

  constructor() {
    emailjs.init(this.PUBLIC_KEY);
  }

  sendBookingEmail(bookingData: any): Observable<any> {
    const templateParams = {
      to_email: 'info@studiomedhat.com',
      from_name: bookingData.name,
      from_email: bookingData.email,
      phone: bookingData.phone,
      service: bookingData.service,
      date: bookingData.date,
      message: bookingData.message
    };

    return from(emailjs.send(
      this.SERVICE_ID,
      this.TEMPLATE_ID,
      templateParams
    ));
  }
}