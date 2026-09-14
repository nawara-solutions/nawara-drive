import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeCard } from './components/welcome-card/welcome-card';

@Component({
  imports: [RouterOutlet, WelcomeCard],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Nawara Drive Admin');
}
