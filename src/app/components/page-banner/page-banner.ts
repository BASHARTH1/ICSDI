import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-banner',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './page-banner.html',
  styleUrl: './page-banner.css'
})
export class PageBannerComponent {
  readonly eyebrow = input.required<string>();
  readonly icon = input.required<string>();
  readonly heading = input.required<string>();
  readonly lead = input<string>('');
}
