import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONFERENCE } from '../../core/conference';
import { CFP_PARAGRAPHS, THEME, TRACKS } from '../../core/content';

interface Guideline {
  icon: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-publication',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './publication.html',
  styleUrl: './publication.css'
})
export class PublicationComponent {
  protected readonly c = CONFERENCE;
  protected readonly theme = THEME;
  protected readonly cfpParagraphs = CFP_PARAGRAPHS;
  protected readonly tracks = TRACKS;
  protected readonly expanded = signal(false);

  protected readonly guidelines: Guideline[] = [
    {
      icon: 'bi-file-earmark-text',
      title: 'Original Work',
      text: 'Papers must present original, unpublished research not under review elsewhere.'
    },
    {
      icon: 'bi-card-checklist',
      title: 'Paper Template',
      text: 'Format your manuscript using the official ICSDI 2026 paper template.'
    },
    {
      icon: 'bi-shield-check',
      title: 'Peer Review',
      text: 'All submissions undergo a double-blind peer-review by the scientific committee.'
    },
    {
      icon: 'bi-award',
      title: 'SCOPUS Indexed',
      text: 'Accepted papers are submitted for indexing in SCOPUS.'
    }
  ];
}
