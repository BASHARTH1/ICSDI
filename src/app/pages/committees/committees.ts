import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';
import { PageBannerComponent } from '../../components/page-banner/page-banner';
import { COMMITTEES, memberInitials } from '../../core/content';

@Component({
  selector: 'app-committees-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PageBannerComponent],
  templateUrl: './committees.html',
  styleUrl: './committees.css'
})
export class CommitteesPage {
  protected readonly committees = COMMITTEES;
  protected readonly initials = memberInitials;
}
