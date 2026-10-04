import { Component } from '@angular/core';

interface Speaker {
  name: string;
  role: string;
  org: string;
  photo: string;
  bio: string;
  accent: string;
}

@Component({
  selector: 'app-speakers',
  standalone: true,
  templateUrl: './speakers.html',
  styleUrl: './speakers.css'
})
export class SpeakersComponent {
  protected readonly speakers: Speaker[] = [];
}
