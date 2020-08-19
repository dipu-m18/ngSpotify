import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../models/Artist';
import {Album} from '../../models/Album';
import { ParamMap,ActivatedRoute} from '@angular/router';
//import { map ,tap} from "rxjs/operators"; 

@Component({
  selector: 'artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: Artist;
  albums: Album[];
  constructor(
    private _spotifyService: SpotifyService,
    private _route:ActivatedRoute
    ) { }



  ngOnInit(){
    this._route.paramMap.subscribe((params : ParamMap)=> {  
      this.id = params.get('id');
      //console.log("Id is :", this.id);  
      this._spotifyService.getArtist(this.id)
              .subscribe((artist:Artist)=> {
                this.artist=artist;
               // console.log(this.artist.name);
        })

        this._spotifyService.getAlbums(this.id)
              .subscribe(albums=> {
               // console.log(JSON.parse(JSON.stringify(albums)))
                 this.albums = JSON.parse(JSON.stringify(albums)).items;
                 // console.log(this.artist.name);
         })


    }) 

  }

}
