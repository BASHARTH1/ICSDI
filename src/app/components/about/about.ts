import { Component, signal } from '@angular/core';
import { ABOUT_PARAGRAPHS, AUDIENCE, AUDIENCE_CLOSING, THEME } from '../../core/content';

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
  protected readonly theme = THEME;
  protected readonly paragraphs = ABOUT_PARAGRAPHS;
  protected readonly audience = AUDIENCE;
  protected readonly audienceClosing = AUDIENCE_CLOSING;

  /** Paragraphs visible before "Show more". */
  protected readonly previewCount = 2;
  protected readonly expanded = signal(false);

  protected readonly highlights: Highlight[] = [
    { icon: 'bi-calendar2-week', value: '2 Days', label: '16–17 November 2026' },
    { icon: 'bi-diagram-3', value: '8 Tracks', label: 'Aligned with the UN SDGs' },
    { icon: 'bi-globe2', value: 'Hybrid', label: 'On-site & virtual' },
    { icon: 'bi-journal-bookmark', value: 'SCOPUS', label: 'Indexed proceedings' }
  ];
}
