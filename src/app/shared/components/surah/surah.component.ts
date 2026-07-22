import { Component, inject, input, Input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Surah } from '../../models/surah';
import { GetDataService } from '../../../core/services/getData/getData.service';
import { ViewSurahComponent } from '../../../features/pages/viewSurah/view-surah/view-surah.component';

@Component({
  selector: 'app-surah',
  imports: [RouterLink],
  templateUrl: './surah.component.html',
  styleUrl: './surah.component.css'
})
export class SurahComponent {
  getData = inject(GetDataService);
  Surah = input.required<Surah>();


  setSurah() {
    // this.surahNumber.set(this.Surah()?.['number'])
  }

  

 
}
