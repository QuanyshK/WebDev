import { Component, OnInit } from '@angular/core';
import { Photos } from '../album';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit {
  images!: Photos[];

  constructor(private route: ActivatedRoute, private albumService: AlbumService){}

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      if(params.get('id')){
        const id = Number(params.get('id'));
        this.albumService.getPhotos(id).subscribe(photos => {
          this.images = photos;
        })
      }
    })
  }
}
