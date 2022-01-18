import { TrackModel } from './../../../core/models/tracks.model';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL = environment.api;

  constructor(private httpClient: HttpClient) {

   }

   private skipById(listTracks:TrackModel[], id:number):Promise<TrackModel[]>{
     return new Promise((resolve, reject) => {
       const listTmp = listTracks.filter(a => a._id != id)
       resolve (listTmp)
     })
   }

   getAllTracks$():Observable<any>{
    return this.httpClient.get(`${this.URL}/tracks`)
    .pipe(
      map(({data}: any) =>{
        return data
      })
    )
   }

   getAllRandom$():Observable<any>{
    return this.httpClient.get(`${this.URL}/tracks`)
    .pipe(
      tap(data => console.log('🎆🎆',data)),
      mergeMap(({data}: any) => this.skipById(data,1)),
      tap(data => console.log('🎆🎆🎆🎆',data))
    )
   }
}
