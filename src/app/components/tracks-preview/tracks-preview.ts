import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { sdgImage, sdgLabel, TRACKS } from '../../core/content';

@Component({
  selector: 'app-tracks-preview',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tracks-preview.html',
  styleUrl: './tracks-preview.css'
})
export class TracksPreviewComponent {
  protected readonly tracks = TRACKS;
  protected readonly sdgImage = sdgImage;
  protected readonly sdgLabel = sdgLabel;
}
