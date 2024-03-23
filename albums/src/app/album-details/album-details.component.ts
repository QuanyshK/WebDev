import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrl: './album-details.component.css'
})
export class AlbumDetailsComponent implements OnInit {
  album!: Album;
  title: string = '';

  constructor(private route: ActivatedRoute, private albumService: AlbumService){}

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      if(params.get('id')){
        const id = Number(params.get('id'));
        this.albumService.getAlbum(id).subscribe(album =>{
          this.album = album;
        })
      }

    })
  }

  saveTitle(){
    this.album.title = this.title;
  }
}
