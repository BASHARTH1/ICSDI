import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';
import { PageBannerComponent } from '../../components/page-banner/page-banner';
import { COMMITTEES } from '../../core/content';

@Component({
  selector: 'app-committees-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PageBannerComponent],
  templateUrl: './committees.html',
  styleUrl: './committees.css'
})
export class CommitteesPage {
  protected readonly committees = COMMITTEES;

  protected initials(name: string): string {
    return name
      .replace(/^(Prof|Dr)\.?\s+/i, '')
      .split(/\s+/)
      .filter((w) => /^[A-Za-z]/.test(w))
      .slice(0, 2)
      .map((w) => w[0].toUpperCase())
      .join('');
  }
}
