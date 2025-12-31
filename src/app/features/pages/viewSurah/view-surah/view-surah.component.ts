import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { Surah } from '../../../../shared/models/surah';

@Component({
  selector: 'app-view-surah',
  imports: [],
  templateUrl: './view-surah.component.html',
  styleUrl: './view-surah.component.css'
})
export class ViewSurahComponent {
  getData = inject(AuthService);
  surah = signal<Surah | null>(null);

  ngOnInit() {
    this.surah.set(this.getData.surah())

    // setTimeout(() => {
    //   console.log(this.surah(), 'skfjdk')
    // }
    //   , 2000);

  }

}
