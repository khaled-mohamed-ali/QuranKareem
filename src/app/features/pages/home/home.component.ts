import { Component, inject, signal } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { GetDataService } from '../../../core/services/getData/getData.service';
import { Surah } from '../../../shared/models/surah';
import { SurahComponent } from "../../../shared/components/surah/surah.component";



@Component({
  selector: 'app-home',
  imports: [SurahComponent, NgbDropdownModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  getDataApi = inject(GetDataService);
  data = signal<Surah[] | null>(null);
  ricters = signal<any[] | null>(null);
  


  getData() {
    this.getDataApi.fetchData().subscribe({
      next: (res: any) => this.data.set(res.data.surahs)
    })
  }

  getReciter() {
    this.getDataApi.getReciters().subscribe({
      next :(res) => this.ricters.set(res.data.reciters)
    })
  }

  ngOnInit(): void {
    this.getData();
    this.getReciter();
}
}


