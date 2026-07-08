import { Component } from '@angular/core';
import { CONFERENCE } from '../../core/conference';

@Component({
  selector: 'app-venue',
  standalone: true,
  templateUrl: './venue.html',
  styleUrl: './venue.css'
})
export class VenueComponent {
  protected readonly c = CONFERENCE;

  protected readonly features = [
    { icon: 'bi-broadcast', text: 'Hybrid — on-site & virtual' },
    { icon: 'bi-buildings', text: 'Modern conference halls' },
    { icon: 'bi-wifi', text: 'High-speed connectivity' },
    { icon: 'bi-building-check', text: 'Ramada Hotel accommodation' }
  ];
}
