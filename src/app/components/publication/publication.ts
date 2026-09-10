import { Component } from '@angular/core';
import { CONFERENCE } from '../../core/conference';

interface Guideline {
  icon: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-publication',
  standalone: true,
  templateUrl: './publication.html',
  styleUrl: './publication.css'
})
export class PublicationComponent {
  protected readonly c = CONFERENCE;

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
