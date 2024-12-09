import { PhotoService } from '../types/services.interface';

export const servicesData: PhotoService[] = [
  {
    id: 1,
    name: "Wedding Photography",
    description: "Comprehensive wedding day coverage with a blend of photojournalistic and artistic approaches",
    duration: "8 hours",
    basePrice: 2500,
    inclusions: [
      "Pre-wedding consultation",
      "Two photographers",
      "High-resolution digital images",
      "Online gallery",
      "Print release"
    ],
    addOns: [
      {
        name: "Engagement Session",
        price: 500,
        duration: "2 hours"
      },
      {
        name: "Wedding Album",
        price: 800,
        description: "Premium leather-bound album"
      }
    ]
  },
  // ... Additional 4 services with different specialties
];