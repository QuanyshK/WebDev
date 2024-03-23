import { NgModule } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {AlbumsComponent} from "./albums/albums.component";
import {AlbumDetailComponent} from "./album-detail/album-detail.component";
import {AlbumPhotosComponent} from "./album-photos/album-photos.component";
import {AboutComponent} from "./about/about.component";
import {AppRoutingModule} from "./app-routing.module";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlbumsComponent,
    AlbumDetailComponent,
    AlbumPhotosComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports:[AboutComponent],
  bootstrap:[AppComponent]
})
export class AppModule { }
