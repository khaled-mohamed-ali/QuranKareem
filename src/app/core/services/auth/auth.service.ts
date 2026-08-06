import { Injectable } from '@angular/core';

export interface StoredUser {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly usersKey = 'qk_users';
  private readonly currentUserKey = 'user';

  login(username: string, password: string): boolean {
    const trimmedUsername = username.trim();
    if (!trimmedUsername || !password) {
      return false;
    }

    const user = this.findUser(trimmedUsername);
    if (user && user.password === password) {
      localStorage.setItem(this.currentUserKey, trimmedUsername);
      return true;
    }

    return false;
  }

  register(username: string, password: string): { success: boolean; message: string } {
    const trimmedUsername = username.trim();

    if (!trimmedUsername || !password) {
      return { success: false, message: 'Username and password are required.' };
    }

    if (trimmedUsername.length < 3) {
      return { success: false, message: 'Username must be at least 3 characters.' };
    }

    if (password.length < 4) {
      return { success: false, message: 'Password must be at least 4 characters.' };
    }

    if (this.findUser(trimmedUsername)) {
      return { success: false, message: 'This username is already taken.' };
    }

    const users = this.getUsers();
    users.push({ username: trimmedUsername, password });
    localStorage.setItem(this.usersKey, JSON.stringify(users));

    return { success: true, message: 'Account created successfully.' };
  }

  logout(): void {
    localStorage.removeItem(this.currentUserKey);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.currentUserKey);
  }

  getCurrentUser(): string | null {
    return localStorage.getItem(this.currentUserKey);
  }

  private getUsers(): StoredUser[] {
    const stored = localStorage.getItem(this.usersKey);
    if (!stored) {
      return [{ username: 'admin', password: '1234' }];
    }

    try {
      return JSON.parse(stored) as StoredUser[];
    } catch {
      return [{ username: 'admin', password: '1234' }];
    }
  }

  private findUser(username: string): StoredUser | undefined {
    return this.getUsers().find((user) => user.username === username);
  }
}
