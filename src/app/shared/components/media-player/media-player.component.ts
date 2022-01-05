import { Component, OnInit } from '@angular/core';
import { TracksModels } from '@core/models/tracks.model';
import { url } from 'inspector';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
  mockCover: TracksModels = {
    cover: 'https://cdns-images.dzcdn.net/images/cover/ba5eaf2f3a49768164d0728b7ba64372/500x500.jpg',
    album: 'AC/DC',
    name: 'T.N.T. (Live At River Plate, December 2009)',
    url: 'http://localhost/track.mp3',
    _id: 1
  }
  constructor() { }

  ngOnInit(): void {
  }

}
