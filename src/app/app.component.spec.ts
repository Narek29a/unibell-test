import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {AudioPortfolioComponent} from "./components/audio-portfolio/audio-portfolio.component";
import {AudioService} from "./services/audio.service";

describe('AppComponent', () => {
  const spyAudioService = jasmine.createSpyObj('AudioService', ['getAll']);
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent,AudioPortfolioComponent],
    providers: [
      {
        provide: AudioService, useValue: spyAudioService
      }
    ],
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


});
