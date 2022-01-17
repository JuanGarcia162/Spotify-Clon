import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  mockCover: TrackModel = {
    cover: 'https://t2.genius.com/unsafe/327x327/https%3A%2F%2Fimages.genius.com%2F59ccba75136f90d6a75072cf1c9ee3e5.1000x1000x1.png',
    album: 'BZRP Music Sessions',
    name: 'Morad: Bzrp Music Sessions #47',
    url: 'http://localhost/track.mp3',
    _id: 1
  }

  listObservers$: Array<Subscription> = [

  ]

  constructor(private multimediaService: MultimediaService) { }

  ngOnInit(): void {
    const observer1$: Subscription = this.multimediaService.callback.subscribe(
      (response:TrackModel) => {
        console.log('Recibiendo Cancion', response);
      }
    )

    this.listObservers$ = [observer1$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe)
      console.log('🎈🎈🎈🎈🎈🎈🎈, BOOM!')
  }

}
