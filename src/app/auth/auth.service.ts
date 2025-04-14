import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);
  private router = inject(Router);

  isAuthenticated = signal(false);
  private tokenKey = 'token';
  
  login(credentials: { email: string, password: string }) {
    return this.http.post<{ token: string }>('https://localhost:7089/api/auth/login', credentials)
    .subscribe({
      next: (res) => {
        localStorage.setItem(this.tokenKey, res.token);
        this.isAuthenticated.set(true);
        this.router.navigate(['/home']);
      }
    });
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.isAuthenticated.set(false);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  constructor() { }

}
