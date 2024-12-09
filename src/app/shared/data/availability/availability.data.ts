import { Availability } from '../../types/availability.interface';

export const availabilityData: Availability = {
  availableDates: [
    {
      date: "2024-03-15",
      timeSlots: [
        { start: "09:00", end: "13:00", type: "Portrait Session" },
        { start: "14:00", end: "18:00", type: "Commercial Shoot" }
      ],
      seasonalPricing: { multiplier: 1.2, reason: "Peak Season" }
    },
    {
      date: "2024-03-16",
      timeSlots: [
        { start: "10:00", end: "14:00", type: "Wedding Consultation" },
        { start: "15:00", end: "19:00", type: "Engagement Session" }
      ]
    },
    {
      date: "2024-03-17",
      timeSlots: [
        { start: "09:00", end: "17:00", type: "Wedding Photography" }
      ],
      seasonalPricing: { multiplier: 1.3, reason: "Weekend Premium" }
    }
  ],
  blockedDates: [
    {
      startDate: "2024-03-20",
      endDate: "2024-03-25",
      reason: "International Photography Conference"
    },
    {
      startDate: "2024-04-01",
      endDate: "2024-04-05",
      reason: "Equipment Maintenance and Studio Updates"
    }
  ],
  defaultTimeSlots: [
    { start: "09:00", end: "13:00" },
    { start: "14:00", end: "18:00" }
  ],
  seasonalPricing: [
    {
      season: "Summer",
      months: [6, 7, 8],
      multiplier: 1.3,
      description: "Peak wedding season"
    },
    {
      season: "Holiday",
      months: [11, 12],
      multiplier: 1.25,
      description: "Holiday season premium"
    },
    {
      season: "Winter",
      months: [1, 2],
      multiplier: 0.9,
      description: "Winter discount"
    }
  ]
};