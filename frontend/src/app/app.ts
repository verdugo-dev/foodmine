import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/partials/header/header';
import { Home } from './components/pages/home/home';

@Component({
  selector: 'app-root',
  imports: [Header, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
