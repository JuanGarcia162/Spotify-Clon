import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {
  mockTracksList = 
  [
    {
      name: 'T.N.T. (Live At River Plate, December 2009)'
    },
    {
      name: 'T.N.T. (Live At River Plate, December 2009)'
    },
    {
      name: 'T.N.T. (Live At River Plate, December 2009)'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
