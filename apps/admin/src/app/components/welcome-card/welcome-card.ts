import { Component, OnInit, inject, signal } from '@angular/core';
import { DriveApiService } from '../../services/drive-api';

@Component({
  selector: 'app-welcome-card',
  templateUrl: './welcome-card.html',
  styleUrl: './welcome-card.scss',
})
export class WelcomeCard implements OnInit {
  private readonly driveApi = inject(DriveApiService);

  protected readonly apiGreeting = signal<string | null>(null);

  ngOnInit(): void {
    this.driveApi.getHelloAdmin().subscribe({
      next: (greeting) => this.apiGreeting.set(greeting),
      error: () => this.apiGreeting.set(null),
    });
  }
}
