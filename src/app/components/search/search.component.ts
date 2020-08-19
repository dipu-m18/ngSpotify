import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../models/Artist';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SpotifyService]
})
export class SearchComponent implements OnInit {
  searchStr:string;
  searchRes: Artist[];

  constructor(private _spotifyService:SpotifyService) { }

  ngOnInit(): void {
  }

  searchMusic(){
    this._spotifyService.searchMusic(this.searchStr)
        .subscribe(res => {
           //console.log(res);
          this.searchRes = JSON.parse(JSON.stringify(res)).artists.items;
          //console.log(this.searchRes);
        })
  }

}
