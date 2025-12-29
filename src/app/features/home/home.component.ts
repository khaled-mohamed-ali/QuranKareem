import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Surah } from '../../shared/models/surah';
import { SurahComponent } from "../../shared/components/surah/surah.component";



@Component({
  selector: 'app-home',
  imports: [SurahComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  auth = inject(AuthService);
  data = signal<Surah[] | null>(null);
  


  getData() {
    this.auth.fetchData().subscribe({
      next: (res: any) => this.data.set(res.data.surahs)
    })
  }

  getSurah() {

  }

  ngOnInit(): void {
    this.getData()
    setTimeout(()=> {
      console.log(this.data())
    },2000) 
  }


}


