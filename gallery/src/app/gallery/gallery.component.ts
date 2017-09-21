import { Component, OnInit ,OnChanges, Input } from '@angular/core';
//service
import {ImageserviceService} from '../imageservice.service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges {
categories:any[];
visibleImages: Object;
@Input() filterBy?: string = 'all';
  constructor(private imageserviceService:ImageserviceService) { }

  ngOnInit() {
    var i:number;
    this.imageserviceService.getImages().subscribe(data => {

      this.visibleImages = data;
    });
  }
  ngOnChanges() {
    this.imageserviceService.getImages().subscribe(data => {
      this.visibleImages = data;
    });
  }

}
