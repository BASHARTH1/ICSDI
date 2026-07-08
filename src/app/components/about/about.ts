import { Component } from '@angular/core';

interface Highlight {
  icon: string;
  value: string;
  label: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  protected readonly highlights: Highlight[] = [
    { icon: 'bi-calendar2-week', value: '2 Days', label: '16–17 November 2026' },
    { icon: 'bi-diagram-3', value: '17 SDGs', label: 'Thematic tracks' },
    { icon: 'bi-globe2', value: 'Hybrid', label: 'On-site & virtual' },
    { icon: 'bi-journal-bookmark', value: 'Springer', label: 'SCOPUS indexed' }
  ];
}
