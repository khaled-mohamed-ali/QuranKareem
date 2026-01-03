import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Surah } from '../../models/surah';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-surah',
  imports: [RouterLink],
  templateUrl: './surah.component.html',
  styleUrl: './surah.component.css'
})
export class SurahComponent {
  getData = inject(AuthService);

  @Input() Surah!: Surah;

  setSurah() {
    this.getData.surah.set(this.Surah);
  }
}
