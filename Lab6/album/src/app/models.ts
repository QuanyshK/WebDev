export class Album{
  id:number;
  title:string;
  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
  }
}
export class Photos{
  id: number;
  albumId: number;
  url: string;

  constructor(id: number, albumId: number, url : string) {
    this.id = id;
    this.url = url;
    this.albumId = albumId
  }
}

