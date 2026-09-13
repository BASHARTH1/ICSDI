import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';
import { PageBannerComponent } from '../../components/page-banner/page-banner';
import { CONFERENCE } from '../../core/conference';
import {
  CFP_PARAGRAPHS,
  CONTRIBUTION_TYPES,
  SDG_TITLES,
  SUBMISSION_CLOSING,
  SUBMISSION_SCOPE,
  THEME,
  TRACKS
} from '../../core/content';

@Component({
  selector: 'app-tracks-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PageBannerComponent, RouterLink],
  templateUrl: './tracks.html',
  styleUrl: './tracks.css'
})
export class TracksPage {
  protected readonly c = CONFERENCE;
  protected readonly theme = THEME;
  protected readonly cfpParagraphs = CFP_PARAGRAPHS;
  protected readonly tracks = TRACKS;
  protected readonly contributionTypes = CONTRIBUTION_TYPES;
  protected readonly submissionScope = SUBMISSION_SCOPE;
  protected readonly submissionClosing = SUBMISSION_CLOSING;

  /** Topics visible per track before "Show more". */
  protected readonly previewCount = 6;
  private readonly openTracks = signal<ReadonlySet<number>>(new Set());

  protected sdgImage(n: number): string {
    return `img/sdg/sdg-${n.toString().padStart(2, '0')}.png`;
  }

  protected sdgLabel(n: number): string {
    return `SDG ${n}: ${SDG_TITLES[n] ?? ''}`;
  }

  protected isOpen(n: number): boolean {
    return this.openTracks().has(n);
  }

  protected toggle(n: number): void {
    this.openTracks.update((open) => {
      const next = new Set(open);
      if (!next.delete(n)) next.add(n);
      return next;
    });
  }
}
