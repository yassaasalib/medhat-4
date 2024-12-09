export interface Testimonial {
  id: number;
  clientName: string;
  serviceType: string;
  rating: number;
  review: string;
  serviceDate: string;
  clientPhoto?: string;
}