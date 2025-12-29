import { Component, Input } from '@angular/core';
import { Surah } from '../../models/surah';

@Component({
  selector: 'app-surah',
  imports: [],
  templateUrl: './surah.component.html',
  styleUrl: './surah.component.css'
})
export class SurahComponent {

  ngOnInit() {
    console.log(this.Surah?.['ayahs'].length)
  }

  @Input() Surah!: Surah;
}
