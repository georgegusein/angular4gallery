import { Injectable } from '@angular/core';

@Injectable()
export class ImageserviceService {
  visableImages = [];
  constructor() { }

  //service functions
  //get all images
  getImages(){
    return this.visableImages = IMAGES.slice(0);
  }

  getImage(id:number){
    return IMAGES.slice(0).find(image => image.id == id);
  }
}

const IMAGES = [
  {"id":1,"category":"forest","caption":"Fotest in fog","url":"https://www.w3schools.com/w3images/nature.jpg"},
  {"id":2,"category":"fjords","caption":"Fierds in fog","url":"https://www.w3schools.com/w3images/fjords.jpg"},
  {"id":3,"category":"light","caption":"Light in fog","url":"https://www.w3schools.com/w3images/lights.jpg"}
]
