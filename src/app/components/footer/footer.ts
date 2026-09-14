import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  protected readonly year = 2026;

  protected readonly links: { label: string; path: string; fragment?: string }[] = [
    { label: 'About', path: '/', fragment: 'about' },
    { label: 'Committees', path: '/committees' },
    { label: 'Speakers', path: '/', fragment: 'speakers' },
    { label: 'Important Dates', path: '/', fragment: 'dates' },
    { label: 'Conference Tracks', path: '/tracks' },
    { label: 'Call for Papers', path: '/', fragment: 'publication' },
    { label: 'Register', path: '/', fragment: 'register' }
  ];
}
