import { PhotoService } from '../../types/services.interface';

export const servicesData: PhotoService[] = [
  {
    id: 1,
    name: "Family Photography",
    description: "Professional family photography capturing precious moments and creating lasting memories.",
    duration: "2-3 hours",
    basePrice: 500,
    imageUrl: "https://studiomedhat.com/uploads/image/image_1728136340.jpg",
    inclusions: [
      "Multiple family poses",
      "Indoor and outdoor shots",
      "Professional editing",
      "Digital image gallery",
      "Print release"
    ],
    addOns: [
      {
        name: "Additional Hour",
        price: 150,
        description: "Extra shooting time"
      },
      {
        name: "Premium Photo Album",
        price: 200,
        description: "High-quality family album"
      }
    ]
  },
  {
    id: 2,
    name: "Adult Birthday Photography",
    description: "Capture the joy and celebration of adult birthday parties with professional photography.",
    duration: "3-4 hours",
    basePrice: 400,
    imageUrl: "https://studiomedhat.com/uploads/image/image_1728048492.jpg",
    inclusions: [
      "Event coverage",
      "Candid shots",
      "Group photos",
      "Digital delivery",
      "Basic editing"
    ],
    addOns: [
      {
        name: "Photo Booth Setup",
        price: 200,
        description: "With props and backdrop"
      }
    ]
  },
  {
    id: 3,
    name: "Children's Birthday Photography",
    description: "Specialized photography for children's birthday parties capturing fun and precious moments.",
    duration: "2-3 hours",
    basePrice: 350,
    imageUrl: "https://studiomedhat.com/uploads/image/image_1727981754.jpg",
    inclusions: [
      "Party coverage",
      "Candid moments",
      "Group photos",
      "Digital gallery",
      "Basic editing"
    ],
    addOns: [
      {
        name: "Theme-based Props",
        price: 100,
        description: "Custom party props"
      }
    ]
  },
  {
    id: 4,
    name: "Maternity Photography",
    description: "Beautiful maternity photography celebrating the journey of motherhood.",
    duration: "1-2 hours",
    basePrice: 450,
    imageUrl: "https://studiomedhat.com/uploads/image/image_1727979335.jpg",
    inclusions: [
      "Multiple poses",
      "Outfit changes",
      "Professional editing",
      "Digital delivery",
      "Print release"
    ],
    addOns: [
      {
        name: "Hair and Makeup",
        price: 150,
        description: "Professional styling"
      }
    ]
  },
  {
    id: 5,
    name: "Fashion Photography",
    description: "Professional fashion photography for models, designers, and brands.",
    duration: "3-4 hours",
    basePrice: 800,
    imageUrl: "https://studiomedhat.com/uploads/image/image_1728143380.jpg",
    inclusions: [
      "Studio setup",
      "Multiple looks",
      "Professional editing",
      "Commercial rights",
      "Digital delivery"
    ],
    addOns: [
      {
        name: "Stylist Services",
        price: 300,
        description: "Professional styling"
      }
    ]
  },
  {
    id: 6,
    name: "Graduation Photography",
    description: "Commemorate academic achievements with professional graduation photography.",
    duration: "1-2 hours",
    basePrice: 300,
    imageUrl: "https://studiomedhat.com/uploads/image/image_1725908877.jpg",
    inclusions: [
      "Multiple poses",
      "Group shots",
      "Basic editing",
      "Digital gallery",
      "Print release"
    ],
    addOns: [
      {
        name: "Location Shoot",
        price: 150,
        description: "Campus photography"
      }
    ]
  },
  {
    id: 7,
    name: "Marriage Contract Photography",
    description: "Professional photography for marriage contract ceremonies.",
    duration: "2-3 hours",
    basePrice: 600,
    imageUrl: "https://studiomedhat.com/uploads/image/image_1728144835.jpg",
    inclusions: [
      "Ceremony coverage",
      "Family photos",
      "Professional editing",
      "Digital delivery",
      "Print release"
    ],
    addOns: [
      {
        name: "Same-Day Preview",
        price: 200,
        description: "Quick edited highlights"
      }
    ]
  },
  {
    id: 8,
    name: "Engagement Session Photography",
    description: "Romantic engagement photography sessions for couples.",
    duration: "2-3 hours",
    basePrice: 550,
    imageUrl: "https://studiomedhat.com/uploads/image/image_1728145927.jpg",
    inclusions: [
      "Multiple locations",
      "Outfit changes",
      "Professional editing",
      "Digital gallery",
      "Print release"
    ],
    addOns: [
      {
        name: "Location Scouting",
        price: 150,
        description: "Custom location search"
      }
    ]
  },
  {
    id: 9,
    name: "Printing Services",
    description: "High-quality printing services for your cherished photographs.",
    duration: "Varies",
    basePrice: 100,
    imageUrl: "https://studiomedhat.com/uploads/image/image_1725967005.png",
    inclusions: [
      "Premium paper",
      "Multiple sizes",
      "Color correction",
      "Professional finish",
      "Protective packaging"
    ],
    addOns: [
      {
        name: "Canvas Prints",
        price: 200,
        description: "Gallery-quality canvas"
      },
      {
        name: "Photo Albums",
        price: 300,
        description: "Custom designed albums"
      }
    ]
  }
];