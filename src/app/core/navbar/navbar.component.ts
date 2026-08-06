import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  private auth = inject(AuthService);
  private router = inject(Router);

  appName = 'Quraan Kareem';

  isAuthenticated(): boolean {
    return this.auth.isAuthenticated();
  }

  getCurrentUser(): string | null {
    return this.auth.getCurrentUser();
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
