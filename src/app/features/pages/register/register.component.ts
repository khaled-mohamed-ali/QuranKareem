import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private auth = inject(AuthService);
  private router = inject(Router);

  username = '';
  password = '';
  confirmPassword = '';
  errorMessage = '';
  successMessage = '';
  isSubmitting = false;

  register(): void {
    this.errorMessage = '';
    this.successMessage = '';
    this.isSubmitting = true;

    if (!this.username.trim() || !this.password || !this.confirmPassword) {
      this.errorMessage = 'Please fill in all fields.';
      this.isSubmitting = false;
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      this.isSubmitting = false;
      return;
    }

    const result = this.auth.register(this.username, this.password);
    this.isSubmitting = false;

    if (!result.success) {
      this.errorMessage = result.message;
      return;
    }

    this.successMessage = result.message;
    setTimeout(() => this.router.navigate(['/login']), 1500);
  }
}
