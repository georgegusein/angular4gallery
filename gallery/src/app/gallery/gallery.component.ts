import { Component, OnInit ,OnChanges, Input } from '@angular/core';
//service
import {ImageserviceService} from '../imageservice.service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges {
visibleImages: any[] = [];
@Input() filterBy?: string = 'all';
  constructor(private imageserviceService:ImageserviceService) { }

  ngOnInit() {
    this.visibleImages = this.imageserviceService.getImages();
  }
  ngOnChanges() {
    this.visibleImages = this.imageserviceService.getImages();
  }

}
