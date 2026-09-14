import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_BASE_URL = isDevMode() ? 'http://localhost:3000' : 'https://drive-api.hsalem-anwar.dev';

@Injectable({ providedIn: 'root' })
export class DriveApiService {
  constructor(private readonly http: HttpClient) {}

  getHelloAdmin(): Observable<string> {
    return this.http.get(`${API_BASE_URL}/drive/hello-admin`, { responseType: 'text' });
  }
}
