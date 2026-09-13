import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { TracksPage } from './pages/tracks/tracks';
import { CommitteesPage } from './pages/committees/committees';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'tracks', component: TracksPage, title: 'Conference Tracks | ICSDI 2026' },
  { path: 'committees', component: CommitteesPage, title: 'Committees | ICSDI 2026' },
  { path: '**', redirectTo: '' }
];
