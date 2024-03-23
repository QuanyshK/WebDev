export class Album{
    userId: number;
    id: number;
    title: string;
  constructor(userId: number=0, id: number=101, title: string='') {
  this.userId = userId;
  this.id = id;
  this.title = title;
}

}


export interface Images{
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}
