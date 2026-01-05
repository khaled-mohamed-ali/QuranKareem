import {
  Component,
  ElementRef,
  ViewChild,
  signal,
  effect,
  inject,
  AfterViewInit
} from '@angular/core';
import { Surah } from '../../../../shared/models/surah';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-view-surah',
  templateUrl: './view-surah.component.html',
  styleUrl: './view-surah.component.css'
})
// export class ViewSurahComponent {

//   getData = inject(AuthService);
//   surah = signal<Surah | null>(null);
//   audioList: string[] = [];
//   currentIndex = 0;

//   @ViewChild('audioPlayer')
//   audioPlayer!: ElementRef<HTMLAudioElement>;

//   constructor() {
//     effect(() => {
//       const surahValue = this.surah();
//       if (surahValue?.['ayahs']?.length) {
//         this.audioList = surahValue?.['ayahs'].map((a: { audio: any; }) => a.audio);
//         this.currentIndex = 0;
//       }
//     });
//   }

//   ngOnInit() {
//     this.surah.set(this.getData.surah())
//     setTimeout(()=> {
//       console.log(this.surah())

//     },2000)
//   }

//   playCurrentAudio() {
//     if (!this.audioList.length) return;

//     const audio = this.audioPlayer.nativeElement;
//     audio.src = this.audioList[this.currentIndex];
//     audio.load();
//     audio.play().catch(() => {});
//   }

//   playNext() {
//     if (this.currentIndex < this.audioList.length - 1) {
//       this.currentIndex++;
//       this.playCurrentAudio();
//     }
//   }

//   pauseAudio() {
//     this.audioPlayer?.nativeElement.pause();
//   }

//   onAudioEnded() {
//     this.playNext();
//   }
// }

export class ViewSurahComponent  {

  surah = signal<Surah | null>(null);
  audioList: string[] = [];
  currentIndex = 0;

  @ViewChild('audioPlayer')
  audioPlayer!: ElementRef<HTMLAudioElement>;

  constructor(private auth: AuthService) {
    effect(() => {
      const s = this.surah();
      if (s?.['ayahs']?.length) {
        this.audioList = s?.['ayahs'].map((a: { audio: any; }) => a.audio);
      }
    });
  }

  ngAfterViewInit() {
    this.playCurrentAudio();
    

  }
  

  ngOnInit() {
    this.surah.set(this.auth.surah());
  }

  playCurrentAudio() {
console.log(this.currentIndex,'cur index')
    if (!this.audioPlayer || !this.audioList.length) return;
    const audio = this.audioPlayer.nativeElement;
    audio.src = this.audioList[this.currentIndex];
    console.log(audio.src,'se')
    audio.play().catch(console.error);
  }

  onAudioEnded() {
    this.currentIndex++;
    if (this.currentIndex < this.audioList.length) {

      this.playCurrentAudio();
    }
  }
}
