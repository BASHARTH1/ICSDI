import { Component } from '@angular/core';

interface Orb {
  x: string;
  y: string;
  size: number;
  color: string;
  dur: number;
  delay: number;
}

interface Particle {
  left: number;
  size: number;
  dur: number;
  delay: number;
  color: string;
  sway: number;
}

@Component({
  selector: 'app-backdrop',
  standalone: true,
  templateUrl: './backdrop.html',
  styleUrl: './backdrop.css'
})
export class BackdropComponent {
  /** Large, blurred, slow-drifting colour orbs. */
  protected readonly orbs: Orb[] = [
    { x: '-6%', y: '8%', size: 420, color: 'rgba(16, 185, 129, 0.30)', dur: 26, delay: 0 },
    { x: '78%', y: '2%', size: 360, color: 'rgba(249, 115, 22, 0.22)', dur: 30, delay: 3 },
    { x: '62%', y: '55%', size: 480, color: 'rgba(8, 145, 178, 0.22)', dur: 34, delay: 6 },
    { x: '4%', y: '62%', size: 400, color: 'rgba(52, 211, 153, 0.24)', dur: 28, delay: 2 },
    { x: '40%', y: '30%', size: 300, color: 'rgba(251, 146, 60, 0.18)', dur: 32, delay: 8 }
  ];

  /** Small leaves that rise slowly and drift sideways. */
  protected readonly particles: Particle[] = [
    { left: 6, size: 26, dur: 22, delay: 0, color: 'rgba(16, 185, 129, 0.5)', sway: 30 },
    { left: 18, size: 18, dur: 28, delay: 6, color: 'rgba(52, 211, 153, 0.45)', sway: -40 },
    { left: 30, size: 22, dur: 24, delay: 11, color: 'rgba(5, 150, 105, 0.5)', sway: 24 },
    { left: 44, size: 16, dur: 30, delay: 3, color: 'rgba(249, 115, 22, 0.35)', sway: -28 },
    { left: 57, size: 24, dur: 26, delay: 14, color: 'rgba(16, 185, 129, 0.45)', sway: 36 },
    { left: 69, size: 18, dur: 32, delay: 8, color: 'rgba(8, 145, 178, 0.4)', sway: -22 },
    { left: 81, size: 28, dur: 23, delay: 17, color: 'rgba(52, 211, 153, 0.5)', sway: 32 },
    { left: 92, size: 20, dur: 29, delay: 4, color: 'rgba(5, 150, 105, 0.45)', sway: -34 }
  ];
}
