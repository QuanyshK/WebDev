import { Component } from '@angular/core';
import {Album} from "../album";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-albums',

  templateUrl: './albums.component.html',

  styleUrl: './albums.component.css'
})
export class AlbumsComponent {
  albums!:Album[];
  constructor(private albumService: AlbumService) {
  }
  ngOnInit(){
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    })
  }
  deleteAlbum(id: number){
    this.albums = this.albums.filter(a => a.id !== id)
  }
}
