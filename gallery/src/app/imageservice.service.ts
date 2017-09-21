import { Injectable } from '@angular/core';
//http req
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ImageserviceService {
  visableImages = [];
  constructor(private http:Http) { }

  //service functions
  //get all images
  getImages(){
    return this.http.get('http://localhost:3000/api/pictures').map(res => res.json());
    //return this.visableImages = IMAGES.slice(0);
  }

  getImage(id:number){
    return this.http.get('http://localhost:3000/api/picture/'+id).map(res => res.json());
   // return IMAGES.slice(0).find(image => image.id == id);
  }
}

const IMAGES = [
  {"id":1,"category":"forest","caption":"Fotest in fog","url":"https://www.w3schools.com/w3images/nature.jpg"},
  {"id":2,"category":"fjords","caption":"Fierds in fog","url":"https://www.w3schools.com/w3images/fjords.jpg"},
  {"id":3,"category":"light","caption":"Light in fog","url":"https://www.w3schools.com/w3images/lights.jpg"}
]
