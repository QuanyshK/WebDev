import {Component, OnInit} from '@angular/core';
import { Album } from '../album';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  albums!: Album[];
  newAlbum: Album;

  constructor(private albumService: AlbumsService){
    this.albums = [];
    this.newAlbum = new Album();
  }

  ngOnInit(){
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    })
  }

  deleteAlbum(id: number){
    this.albums = this.albums.filter(a => a.id !== id)
  }
  addAlbum(): void {
    this.albumService.addAlbum(this.newAlbum).subscribe((album) => {
      this.albums.unshift(album);
      this.newAlbum = new Album();
    });
  }
}
