import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {from, Observable, of} from 'rxjs';
import { Album, Images } from './album';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  BASE_URL = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]>{
    return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getAlbum(id: number): Observable<Album>{
    return this.http.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}/`)
  }

  getImages(id: number): Observable<Images[]>{
    return this.http.get<Images[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
  }
  addAlbum(album: Album) {
    album.id = new Date().getTime();
    const localAlbums = JSON.parse(localStorage.getItem('albums') || '[]');
    localAlbums.unshift(album);
    localStorage.setItem('albums', JSON.stringify(localAlbums));
    return of(album);
  }
  updateTitle(id: number, newAlbum: Album ){
    this.http.put<Album>(`https://jsonplaceholder.typicode.com/albums/${id}', newAlbum);
  }

}
