import { Component, inject, Input } from '@angular/core';
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

  @Input() Surah!: Surah;

  setSurah() {
    console.log(this.Surah?.['number'],'surad') 
    this.getData.getSurahData(this.Surah?.['number'])
  }

  

 
}
