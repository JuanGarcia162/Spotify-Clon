import { TrackService } from './../../services/track.service';
import { TrackModel } from './../../../../core/models/tracks.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []

  listObservers$: Array<Subscription> = []

  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    this.trackService.getAllTracks$()
    .subscribe(response =>{
      console.log('----> 🎈🎈🎈', response);
    })
  }

  ngOnDestroy(): void {

  }

}
