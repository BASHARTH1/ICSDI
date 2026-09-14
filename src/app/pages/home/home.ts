import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header';
import { HeroComponent } from '../../components/hero/hero';
import { AboutComponent } from '../../components/about/about';
import { CommitteesPreviewComponent } from '../../components/committees-preview/committees-preview';
import { SpeakersComponent } from '../../components/speakers/speakers';
import { DatesComponent } from '../../components/dates/dates';
import { TracksPreviewComponent } from '../../components/tracks-preview/tracks-preview';
import { PublicationComponent } from '../../components/publication/publication';
import { VenueComponent } from '../../components/venue/venue';
import { RegisterComponent } from '../../components/register/register';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    CommitteesPreviewComponent,
    SpeakersComponent,
    DatesComponent,
    TracksPreviewComponent,
    PublicationComponent,
    VenueComponent,
    RegisterComponent,
    FooterComponent
  ],
  templateUrl: './home.html'
})
export class HomeComponent {}
