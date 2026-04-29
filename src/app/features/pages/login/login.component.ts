import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  private readonly authService = inject(AuthService);

  username = '';
  password = '';

  login() {
    const ok = this.authService.login(this.username, this.password);
    console.log('login result', ok);
  }

}
