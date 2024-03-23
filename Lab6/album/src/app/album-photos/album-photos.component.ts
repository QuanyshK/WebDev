import {Component, OnInit} from '@angular/core';
import {Album, Photos} from "../models";
import {ActivatedRoute} from "@angular/router";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit{
  photos !: Photos[];
  loaded: boolean;
  constructor(private activatedRoute: ActivatedRoute,
              private albumService: AlbumService) {
    this.loaded = false;
  }
  ngOnInit(): void {
    this.getPhotos()
  }
  getPhotos(){
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = +this.activatedRoute.snapshot.params['id'];
      this.loaded = false;
      this.albumService.getPhotos(id).subscribe((photos) => {
        this.photos = photos;
        this.loaded = true;
      })
    })
}
}
