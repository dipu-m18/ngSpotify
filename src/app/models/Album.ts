import {Artist} from './Artist';
import {Track} from './Track';

export class Album{
     id: number;
     name: string;
     images: any[];
     artists: Artist[];
     external_urls: string;
     release_date: Date;
     tracks: Track[];    
}