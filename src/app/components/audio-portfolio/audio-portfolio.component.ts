import {AfterViewChecked, Component, ElementRef, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {AudioService} from "../../services/audio.service";
import {AudioItem} from "../../models/audio-item.model";

@Component({
  selector: 'app-audio-portfolio',
  templateUrl: './audio-portfolio.component.html',
  styleUrls: ['./audio-portfolio.component.scss']
})
export class AudioPortfolioComponent implements AfterViewChecked {
  displayedColumns: string[] = ['id', 'name', 'fileName'];
  audioItems$: Observable<AudioItem[]>;
  selectedAudioItem: string = '';
  readyToPlay: boolean = false;
  audioPlaying: boolean = false;
  @ViewChild('audioPlayer') audioPlayer!: ElementRef;


  constructor(private audioService: AudioService) {
    this.audioItems$ = audioService.getAll();
  }

  playAudio(audioItem: AudioItem) {
    this.selectedAudioItem = audioItem.fileName;
    this.readyToPlay = false;
    this.audioPlaying = false;
    setTimeout(() => {
      this.readyToPlay = true;
    });
  }

  ngAfterViewChecked(): void {
    if (this.readyToPlay && !this.audioPlaying && this.audioPlayer) {
      this.audioPlayer.nativeElement.play();
      this.audioPlaying = true;
    }
  }
}
