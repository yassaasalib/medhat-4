import { Availability } from '../types/availability.interface';

export const availabilityData: Availability = {
  availableDates: [
    {
      date: "2024-03-15",
      timeSlots: [
        { start: "09:00", end: "13:00", type: "Portrait Session" },
        { start: "14:00", end: "18:00", type: "Commercial Shoot" }
      ],
      seasonalPricing: { multiplier: 1.2, reason: "Peak Season" }
    }
  ],
  blockedDates: [
    {
      startDate: "2024-03-20",
      endDate: "2024-03-25",
      reason: "International Photography Conference"
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
    }
  ]
};