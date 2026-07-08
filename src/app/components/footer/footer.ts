import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  protected readonly year = 2026;

  protected readonly links = [
    { label: 'About', href: '#about' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'Important Dates', href: '#dates' },
    { label: 'Call for Papers', href: '#publication' },
    { label: 'Register', href: '#register' }
  ];
}
