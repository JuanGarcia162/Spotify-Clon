import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
  mockCover: TrackModel = {
    cover: 'https://t2.genius.com/unsafe/327x327/https%3A%2F%2Fimages.genius.com%2F59ccba75136f90d6a75072cf1c9ee3e5.1000x1000x1.png',
    album: 'BZRP Music Sessions',
    name: 'Morad: Bzrp Music Sessions #47',
    url: 'http://localhost/track.mp3',
    _id: 1
  }
  constructor() { }

  ngOnInit(): void {
  }

}
