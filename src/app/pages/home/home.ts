import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header';
import { HeroComponent } from '../../components/hero/hero';
import { AboutComponent } from '../../components/about/about';
import { SpeakersComponent } from '../../components/speakers/speakers';
import { DatesComponent } from '../../components/dates/dates';
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
    SpeakersComponent,
    DatesComponent,
    PublicationComponent,
    VenueComponent,
    RegisterComponent,
    FooterComponent
  ],
  templateUrl: './home.html'
})
export class HomeComponent {}
