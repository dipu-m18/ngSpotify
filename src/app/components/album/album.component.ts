import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../models/Artist';
import { Album} from '../../models/Album';
import { Track } from '../../models/Track';
import { ParamMap,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  id: string;
  album: Album;
  tracks: Track[];
  constructor(
    private _spotifyService: SpotifyService,
    private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe((params : ParamMap)=> {  
      this.id = params.get('id');
      //console.log("Id is :", this.id);  
      this._spotifyService.getAlbum(this.id)
              .subscribe((album: Album)=> {
                this.album=album;
                this.tracks=JSON.parse(JSON.stringify(album.tracks)).items;
                console.log(this.tracks)
        })
  })

}
}
