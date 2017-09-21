import { Component, OnInit } from '@angular/core';
//service
import {ImageserviceService} from '../imageservice.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  image:any;

  constructor(private imageserviceService:ImageserviceService,
  private route:ActivatedRoute) { }

  ngOnInit() {
    this.image = this.imageserviceService.getImage(+this.route.snapshot.params['id']);
  }

}
