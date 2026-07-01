// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  login(username: string, password: string): boolean {
    console.log('auth service')
    if (username === 'admin' && password === '1234') {
      this.isLoggedIn = true;
      localStorage.setItem('user', username);
      return true;
    }
    return false;
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('user');
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn || !!localStorage.getItem('user');
  }
}