import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AlbumService} from "../album.service";
import {Album} from "../models";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit{
  album !: Album;
  loaded: boolean;
  constructor(private activatedRoute: ActivatedRoute,
              private albumService: AlbumService) {
    this.loaded = false;
  }
  ngOnInit(): void {
    this.getAlbum()
  }
  getAlbum(){
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = +this.activatedRoute.snapshot.params['id'];
      this.loaded = false;
      this.albumService.getAlbum(id).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      })
    })
  }
  changeTitle(newTitle: string){
    this.album.title = newTitle;
    if (this.album) {
      this.albumService.updateAlbum(this.album)
        .subscribe(updatedAlbum => {
          // Update local copy of the album
          this.album = updatedAlbum;
          // Optional: Show success message or perform other actions
        });
    }
  }

}
