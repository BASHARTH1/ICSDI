import { Component } from '@angular/core';
import { CONFERENCE } from '../../core/conference';

interface FeeRow {
  label: string;
  price: string;
  featured?: boolean;
}

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {
  protected readonly c = CONFERENCE;

  protected readonly fees: FeeRow[] = [
    { label: 'Virtual Attendance (no paper)', price: 'Free' },
    { label: 'Physical Attendance (no paper)', price: '$200' },
    { label: 'Authors — Virtual (with paper)', price: '$400', featured: true },
    { label: 'Authors — Physical (with paper)', price: '$500', featured: true }
  ];

  protected readonly includes = [
    'Entrance to all sessions of the Conference',
    'An electronic copy of the Conference proceedings',
    'Associated Conference materials',
    'Publication and presentation fee (for authors)'
  ];
}
