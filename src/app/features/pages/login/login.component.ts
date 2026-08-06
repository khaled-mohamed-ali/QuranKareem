import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private auth = inject(AuthService);
  private router = inject(Router);

  username = '';
  password = '';
  errorMessage = '';
  isSubmitting = false;

  login(): void {
    this.errorMessage = '';
    this.isSubmitting = true;

    if (!this.username.trim() || !this.password) {
      this.errorMessage = 'Please enter your username and password.';
      this.isSubmitting = false;
      return;
    }

    const success = this.auth.login(this.username, this.password);
    this.isSubmitting = false;

    if (success) {
      this.router.navigate(['/surahs']);
      return;
    }

    this.errorMessage = 'Invalid username or password.';
  }
}
