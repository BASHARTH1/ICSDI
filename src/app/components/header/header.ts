import { Component, HostListener, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavLink {
  label: string;
  /** Section on the home page. */
  fragment?: string;
  /** Standalone page route. */
  path?: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);

  protected readonly navLinks: NavLink[] = [
    { label: 'Home', fragment: 'home' },
    { label: 'About', fragment: 'about' },
    { label: 'Tracks', path: '/tracks' },
    { label: 'Committees', path: '/committees' },
    { label: 'Speakers', fragment: 'speakers' },
    { label: 'Dates', fragment: 'dates' },
    { label: 'Call for Papers', fragment: 'publication' }
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 40);
  }

  toggleMenu() {
    this.menuOpen.update((v) => !v);
    this.syncBodyLock();
  }

  closeMenu() {
    this.menuOpen.set(false);
    this.syncBodyLock();
  }

  private syncBodyLock() {
    if (typeof document === 'undefined') return;
    document.body.classList.toggle('nav-locked', this.menuOpen());
  }
}
