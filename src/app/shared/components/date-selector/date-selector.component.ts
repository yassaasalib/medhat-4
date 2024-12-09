import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { addMonths, format as formatDate, isAfter, isBefore, isSameDay, startOfDay } from 'date-fns';

@Component({
  selector: 'app-date-selector',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="date-selector">
      <label [for]="id" class="block text-sm font-medium text-gray-200">{{ label }}</label>
      
      <div class="relative mt-1">
        <input
          [id]="id"
          type="text"
          [value]="selectedDate ? formatDate(selectedDate, 'MMM dd, yyyy') : ''"
          readonly
          (click)="toggleCalendar()"
          class="block w-full rounded-lg bg-black/30 border border-gray-600 text-white px-4 py-3 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          [placeholder]="placeholder"
        >
        
        <button 
          type="button"
          (click)="toggleCalendar()"
          class="absolute inset-y-0 right-0 px-3 flex items-center text-gray-400 hover:text-orange-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </button>
      </div>

      <!-- Calendar Dropdown -->
      <div *ngIf="isOpen" class="absolute z-10 mt-1 w-full max-w-[320px] bg-neutral-900 rounded-lg shadow-xl border border-gray-800 p-4">
        <!-- Month Navigation -->
        <div class="flex justify-between items-center mb-4">
          <button 
            type="button"
            (click)="previousMonth()"
            class="p-1 hover:text-orange-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <span class="text-lg font-medium">
            {{ formatDate(currentMonth, 'MMMM yyyy') }}
          </span>
          
          <button 
            type="button"
            (click)="nextMonth()"
            class="p-1 hover:text-orange-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <!-- Weekday Headers -->
        <div class="grid grid-cols-7 gap-1 mb-2">
          <span *ngFor="let day of weekDays" class="text-center text-sm text-gray-400 py-1">
            {{ day }}
          </span>
        </div>

        <!-- Calendar Grid -->
        <div class="grid grid-cols-7 gap-1">
          <button
            *ngFor="let date of calendarDays"
            type="button"
            [class]="getDayClasses(date)"
            (click)="selectDate(date)"
            [disabled]="!isDateSelectable(date)">
            {{ date.getDate() }}
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      position: relative;
    }

    .calendar-day {
      @apply w-10 h-10 rounded-full flex items-center justify-center text-sm transition-colors;
    }

    .calendar-day:not(:disabled) {
      @apply hover:bg-orange-500/20 cursor-pointer;
    }

    .calendar-day:disabled {
      @apply text-gray-600 cursor-not-allowed;
    }

    .calendar-day.selected {
      @apply bg-orange-500 text-white;
    }

    .calendar-day.today:not(.selected) {
      @apply border-2 border-orange-500;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateSelectorComponent {
  @Input() id: string = 'date-' + Math.random().toString(36).substr(2, 9);
  @Input() label: string = 'Select Date';
  @Input() placeholder: string = 'Select a date';
  @Input() minDate: Date = new Date();
  @Input() maxDate: Date = addMonths(new Date(), 6);
  
  @Output() dateSelected = new EventEmitter<Date>();

  isOpen = false;
  currentMonth = new Date();
  selectedDate: Date | null = null;
  weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  formatDate = formatDate;

  get calendarDays(): Date[] {
    const start = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), 1);
    const days: Date[] = [];

    // Add previous month's days
    const firstDay = start.getDay();
    for (let i = firstDay; i > 0; i--) {
      days.push(new Date(start.getFullYear(), start.getMonth(), -i + 1));
    }

    // Add current month's days
    const lastDay = new Date(start.getFullYear(), start.getMonth() + 1, 0).getDate();
    for (let i = 1; i <= lastDay; i++) {
      days.push(new Date(start.getFullYear(), start.getMonth(), i));
    }

    // Add next month's days to complete the grid
    const remainingDays = 42 - days.length; // 6 rows * 7 days = 42
    for (let i = 1; i <= remainingDays; i++) {
      days.push(new Date(start.getFullYear(), start.getMonth() + 1, i));
    }

    return days;
  }

  toggleCalendar() {
    this.isOpen = !this.isOpen;
  }

  previousMonth() {
    this.currentMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth() - 1,
      1
    );
  }

  nextMonth() {
    this.currentMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth() + 1,
      1
    );
  }

  selectDate(date: Date) {
    if (this.isDateSelectable(date)) {
      this.selectedDate = date;
      this.dateSelected.emit(date);
      this.isOpen = false;
    }
  }

  isDateSelectable(date: Date): boolean {
    return !isBefore(startOfDay(date), startOfDay(this.minDate)) &&
           !isAfter(startOfDay(date), startOfDay(this.maxDate));
  }

  getDayClasses(date: Date): string {
    const baseClasses = 'calendar-day';
    const today = new Date();
    const classes = [baseClasses];

    if (isSameDay(date, today)) {
      classes.push('today');
    }

    if (this.selectedDate && isSameDay(date, this.selectedDate)) {
      classes.push('selected');
    }

    if (!this.isDateSelectable(date)) {
      classes.push('disabled');
    }

    return classes.join(' ');
  }
}