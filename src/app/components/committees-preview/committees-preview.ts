import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMMITTEES, memberInitials } from '../../core/content';

@Component({
  selector: 'app-committees-preview',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './committees-preview.html',
  styleUrl: './committees-preview.css'
})
export class CommitteesPreviewComponent {
  /** Chairperson, Steering and Organizing committees; the international committee is on /committees. */
  protected readonly committees = COMMITTEES.slice(0, 3);
  protected readonly initials = memberInitials;
}
