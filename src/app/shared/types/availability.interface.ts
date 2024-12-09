export interface TimeSlot {
  start: string;
  end: string;
  type?: string;
}

export interface AvailableDate {
  date: string;
  timeSlots: TimeSlot[];
  seasonalPricing?: {
    multiplier: number;
    reason: string;
  };
}

export interface BlockedDate {
  startDate: string;
  endDate: string;
  reason: string;
}

export interface SeasonalPricing {
  season: string;
  months: number[];
  multiplier: number;
  description: string;
}

export interface Availability {
  availableDates: AvailableDate[];
  blockedDates: BlockedDate[];
  defaultTimeSlots: TimeSlot[];
  seasonalPricing: SeasonalPricing[];
}