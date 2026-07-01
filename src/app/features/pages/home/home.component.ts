import { Component, inject, signal } from '@angular/core';
import { GetDataService } from '../../../core/services/getData/getData.service';
import { Surah } from '../../../shared/models/surah';
import { SurahComponent } from "../../../shared/components/surah/surah.component";



@Component({
  selector: 'app-home',
  imports: [SurahComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  getDataApi = inject(GetDataService);
  data = signal<Surah[] | null>(null);
  


  getData() {
    this.getDataApi.fetchData().subscribe({
      next: (res: any) => this.data.set(res.data.surahs)
    })
  }

  getSurah() {

  }

  ngOnInit(): void {
    this.getData()
  }


}


