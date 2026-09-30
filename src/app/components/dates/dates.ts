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
    { date: '25 October 2026', label: 'Full Paper Submission Deadline', icon: 'bi-upload' },
    { date: '5 November 2026', label: 'Notification of Revision / Acceptance', icon: 'bi-envelope-check' },
    { date: '10 November 2026', label: 'Registration Deadline', icon: 'bi-door-closed' },
    { date: '16–17 November 2026', label: 'Conference Dates', icon: 'bi-calendar-event' }
  ];
}
