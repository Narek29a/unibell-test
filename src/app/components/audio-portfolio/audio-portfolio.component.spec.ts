import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioPortfolioComponent } from './audio-portfolio.component';
import {AudioService} from "../../services/audio.service";
import {of} from "rxjs";
import {MatTableModule} from "@angular/material/table";
import {AudioItem} from "../../models/audio-item.model";

const mockAudios: AudioItem[] = [
  {
    "id": 0,
    "name": "arcade-retro",
    "fileName": "arcade-retro.mp3"
  },
  {
    "id": 1,
    "name": "light-rain-loop",
    "fileName": "light-rain-loop.mp3"
  },
  {
    "id": 2,
    "name": "little-birds-singing-in-the-trees",
    "fileName": "little-birds-singing-in-the-trees.mp3"
  },
  {
    "id": 3,
    "name": "trumpet-fanfare",
    "fileName": "trumpet-fanfare.mp3"
  }
]


describe('AudioPortfolioComponent', () => {
  let component: AudioPortfolioComponent;
  let fixture: ComponentFixture<AudioPortfolioComponent>;
  const spyAudioService = jasmine.createSpyObj('AudioService', ['getAll']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatTableModule],
      providers: [
        {
          provide: AudioService, useValue: spyAudioService
        }
      ],
      declarations: [AudioPortfolioComponent]
    });
    fixture = TestBed.createComponent(AudioPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should provide data', () => {
    const audioStubValue = of(mockAudios);
    spyAudioService.getAll.and.returnValue(audioStubValue);
    spyAudioService.getAll().subscribe((audios: AudioItem[]) => {
      expect(audios).not.toBe([]);
      expect(audios[2].fileName).toBe('little-birds-singing-in-the-trees.mp3')
    });
  });
});
