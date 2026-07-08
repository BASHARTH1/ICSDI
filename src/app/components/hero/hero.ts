import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { CONFERENCE } from '../../core/conference';

interface Unit {
  value: string;
  label: string;
}

interface Dot {
  x: number;
  y: number;
  size: number;
  color: string;
  dx: string;
  dy: string;
  dur: number;
  delay: number;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  protected readonly c = CONFERENCE;
  protected readonly countdown = signal<Unit[]>([]);
  protected readonly started = signal(false);

  /** Glowing particles that drift across the hero. */
  protected readonly dots: Dot[] = [
    { x: 8, y: 22, size: 6, color: '#34d399', dx: '40px', dy: '-30px', dur: 14, delay: 0 },
    { x: 20, y: 68, size: 4, color: '#5eead4', dx: '-30px', dy: '-40px', dur: 18, delay: 2 },
    { x: 33, y: 38, size: 8, color: '#fbbf24', dx: '25px', dy: '35px', dur: 16, delay: 4 },
    { x: 46, y: 78, size: 5, color: '#fb923c', dx: '-35px', dy: '-25px', dur: 20, delay: 1 },
    { x: 58, y: 28, size: 7, color: '#34d399', dx: '30px', dy: '40px', dur: 15, delay: 5 },
    { x: 70, y: 60, size: 4, color: '#38bdf8', dx: '-25px', dy: '30px', dur: 19, delay: 3 },
    { x: 82, y: 34, size: 6, color: '#6ee7b7', dx: '35px', dy: '-35px', dur: 17, delay: 6 },
    { x: 90, y: 72, size: 5, color: '#fdba74', dx: '-30px', dy: '-30px', dur: 21, delay: 2 },
    { x: 14, y: 48, size: 5, color: '#22d3ee', dx: '28px', dy: '28px', dur: 22, delay: 7 },
    { x: 63, y: 82, size: 7, color: '#34d399', dx: '-32px', dy: '-38px', dur: 16, delay: 4 },
    { x: 40, y: 16, size: 4, color: '#facc15', dx: '30px', dy: '30px', dur: 18, delay: 8 },
    { x: 76, y: 18, size: 5, color: '#5eead4', dx: '-28px', dy: '34px', dur: 20, delay: 1 }
  ];

  private timer: ReturnType<typeof setInterval> | undefined;
  private readonly target = new Date(CONFERENCE.startDate).getTime();

  ngOnInit(): void {
    this.tick();
    this.timer = setInterval(() => this.tick(), 1000);
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }

  private tick(): void {
    const diff = this.target - Date.now();
    if (diff <= 0) {
      this.started.set(true);
      this.countdown.set([]);
      if (this.timer) clearInterval(this.timer);
      return;
    }
    const s = Math.floor(diff / 1000);
    const pad = (n: number) => String(n).padStart(2, '0');
    this.countdown.set([
      { value: String(Math.floor(s / 86400)), label: 'Days' },
      { value: pad(Math.floor((s % 86400) / 3600)), label: 'Hours' },
      { value: pad(Math.floor((s % 3600) / 60)), label: 'Minutes' },
      { value: pad(s % 60), label: 'Seconds' }
    ]);
  }
}
