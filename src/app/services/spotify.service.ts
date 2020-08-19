import { Injectable } from '@angular/core';
// import { Headers } from '@anguar/http';
import {   HttpClient, HttpClientModule,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private searchUrl:string;
  private artistUrl:string;
  private albumsUrl:string;
  private albumUrl: string;
  private accessToken:string='xxxx';
   constructor(private _http:HttpClient) {

   }
   private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer '+this.accessToken
    })
  }
     
   searchMusic(str:string, type='artist'){
     
     this.searchUrl='https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
      return this._http.get(this.searchUrl, this.httpOptions)
                 .pipe(map(res => res ));
    }


    getArtist(id:string){
      this.artistUrl='https://api.spotify.com/v1/artists/'+id;
       return this._http.get(this.artistUrl, this.httpOptions)
                  .pipe(map(res => res ));
     }
    
     getAlbums(artistId:string){
     this.albumsUrl='https://api.spotify.com/v1/artists/'+artistId+'/albums';
       return this._http.get(this.albumsUrl, this.httpOptions)
                  .pipe(map(res => res ));
     }

     getAlbum(id:string){
      this.albumUrl='https://api.spotify.com/v1/albums/'+id;
        return this._http.get(this.albumUrl, this.httpOptions)
                   .pipe(map(res => res ));
      }
}

