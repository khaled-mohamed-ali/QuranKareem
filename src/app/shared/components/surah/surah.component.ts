import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Surah } from '../../models/surah';
import { GetDataService } from '../../../core/services/getData/getData.service';

@Component({
  selector: 'app-surah',
  imports: [RouterLink],
  templateUrl: './surah.component.html',
  styleUrl: './surah.component.css'
})
export class SurahComponent {
  getData = inject(GetDataService);

  @Input() Surah!: Surah;

  setSurah() {
    this.getData.surah.set(this.Surah);
  }
}
