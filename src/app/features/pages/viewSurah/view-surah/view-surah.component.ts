import {
  Component,
  ElementRef,
  ViewChild,
  signal,
  effect,
  inject,
  AfterViewInit,
  QueryList,
  ViewChildren
} from '@angular/core';
import { Surah } from '../../../../shared/models/surah';
import { GetDataService } from '../../../../core/services/getData/getData.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-view-surah',
  templateUrl: './view-surah.component.html',
  styleUrl: './view-surah.component.css'
})





export class ViewSurahComponent {

  getData = inject(GetDataService)
  private readonly route = inject(ActivatedRoute);

  @ViewChildren('ayahElement')
  ayahElements!: QueryList<ElementRef>;

  surah = signal<any | null>(null);
  audioList: string[] = [];
  currentIndex = 0;

  @ViewChild('audioPlayer')
  audioPlayer!: ElementRef<HTMLAudioElement>;

  constructor(private getDataService: GetDataService) {
    effect(() => {
      const s = this.surah();
      this.audioList.push(s?.['audio']?.['example_audio'])

    });
  }

  ngOnInit() {

    this.route.paramMap.subscribe((params: { get: (arg0: string) => any; }) => {
      const id = Number(params.get('id'));
      this.getData.getSurahData(id).subscribe({
        next: (x: any) => {
          this.surah.set(x.data)
          console.log(this.surah())
        }})
      
    });

  }


  getSurah(surahNumber:number) {
    console.log(this.surah(),'surah'
    );

  }

  ngAfterViewInit() {
    this.playCurrentAudio();


  }



  readonly basmala = 'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ';

  removeBasmala(text: string): string {
    return text.startsWith(this.basmala)
      ? text.slice(this.basmala.length).trim()
      : text;
  }


  scrollToCurrentAyah(): void {
    const element = this.ayahElements.get(this.currentIndex);

    if (element) {
      element.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }

  onAudioEnded(): void {
    if (this.currentIndex < this.audioList.length - 1) {
      this.currentIndex++;

      this.scrollToCurrentAyah();

      this.audioPlayer.nativeElement.src =
        this.audioList[this.currentIndex];

      this.audioPlayer.nativeElement.play();
    }
  }




  playCurrentAudio() {
    if (!this.audioPlayer || !this.audioList.length) return;
    const audio = this.audioPlayer.nativeElement;
    audio.src = this.audioList[this.currentIndex];
    audio.play().catch(console.error);
  }

  // onAudioEnded() {
  //   this.currentIndex++;
  //   if (this.currentIndex < this.audioList.length) {

  //     this.playCurrentAudio();
  //   }
  // }
}
