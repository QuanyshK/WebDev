import {Component, OnInit} from '@angular/core';
import {Album, Photos} from "../models";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{

  albums: Album[];
  photos: Photos[];
  constructor(private albumService:AlbumService) {
    this.albums = []
    this.photos = []
  }
  ngOnInit(): void {
    this.getAlbums()
  }
  getAlbums(){
    this.albumService.getAlbums().subscribe((albums) => {this.albums = albums})
  }
}
