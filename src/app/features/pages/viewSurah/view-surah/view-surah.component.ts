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
[x: string]: any;
  getData = inject(AuthService);
  surah = signal<Surah | null>(null);
  audioList :string[]  = [];

//   ngOnInit() {
//     // this.audioUrl = this.getData.surah()?.['ayahs']?.[1].audio
//     this.surah()?.ayah?.map(audio => console.log(audio,'skdl'))



// }



currentIndex = 0;
audio = new Audio();

ngOnInit() {

  
  this.surah.set(this.getData.surah());

  setTimeout(() => {
    const ayahs = this.surah()?.['ayahs'];
    if (Array.isArray(ayahs)) {
      ayahs.forEach((x: any) => this.audioList.push(x.audio));
    }
    console.log(this.audioList,'skfjdk');
  }, 2000);
  this.playCurrentAudio();

  this.audio.addEventListener('ended', () => {
    this.playNext();
  });
}

playCurrentAudio() {
  if (this.currentIndex < this.audioList.length) {
    this.audio.src = this.audioList[this.currentIndex];
    this.audio.load();
    this.audio.play();
  }
}

playNext() {
  this.currentIndex++;

  if (this.currentIndex < this.audioList.length) {
    this.playCurrentAudio();
  } else {
    console.log('All audios finished');
  }
}

pauseAudio() {
  this.audio.pause();
}


}