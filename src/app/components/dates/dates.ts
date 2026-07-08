import { Component } from '@angular/core';

interface KeyDate {
  date: string;
  label: string;
  icon: string;
  done?: boolean;
}

@Component({
  selector: 'app-dates',
  standalone: true,
  templateUrl: './dates.html',
  styleUrl: './dates.css'
})
export class DatesComponent {
  protected readonly dates: KeyDate[] = [
    { date: '1 October 2026', label: 'Full Paper Submission', icon: 'bi-upload' },
    { date: '10 October 2026', label: 'Acceptance / Rejection Notification', icon: 'bi-envelope-check' },
    { date: '15 October 2026', label: 'Camera-Ready Submission', icon: 'bi-file-earmark-check' },
    { date: '25 October 2026', label: 'Registration Closing', icon: 'bi-door-closed' },
    { date: '16–17 November 2026', label: 'Conference Days', icon: 'bi-calendar-event' }
  ];
}
