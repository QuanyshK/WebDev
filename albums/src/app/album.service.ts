import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Album, Photos} from "./album";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) {

  }
  getAlbums():Observable<Album[]>{
    return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }
  getAlbum(id: number): Observable<Album>{
    return this.http.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}/`);
  }
  getPhotos(id: number): Observable<Photos[]>{
    return this.http.get<Photos[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  }
}
