import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackdropComponent } from './components/backdrop/backdrop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BackdropComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
