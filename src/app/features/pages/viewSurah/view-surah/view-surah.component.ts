import { Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
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
  audioList: string[] = [];



  currentIndex = 0;


  @ViewChild('audioPlayer')
  audioPlayer!: ElementRef<HTMLAudioElement>;
  
  ngOnInit() {


    this.surah.set(this.getData.surah());

    const ayahs = this.surah()?.['ayahs'];
    if (Array.isArray(ayahs)) {
      ayahs.forEach((x: any) => this.audioList.push(x.audio));
    }



  }

  playCurrentAudio() {
    const audio = this.audioPlayer.nativeElement;
    
    if (!audio.src) {
      audio.src = this.audioList[this.currentIndex];
    }

    if (this.currentIndex < this.audioList.length) {
      audio.src = this.audioList[this.currentIndex];
      audio.load();
      audio.play();
    }
  }

  playNext() {
    console.log('work');
    this.currentIndex++;


    if (this.currentIndex < this.audioList.length) {
      this.playCurrentAudio();
    } else {
      console.log('All audios finished');
    }
  }

  pauseAudio() {
    // this.audioPlayer.pause();
  }

  onAudioEnded() {
      this.playNext();

  }


}