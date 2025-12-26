import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  auth = inject(AuthService);
  data = signal(null)

  getData() {
    this.auth.fetchData().subscribe({
      next: (res: any) => this.data.set(res)
    })
  }

  ngOnInit(): void {
    this.getData()
  }

}


