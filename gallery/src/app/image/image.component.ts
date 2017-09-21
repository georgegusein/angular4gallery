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
  image:Object;

  constructor(private imageserviceService:ImageserviceService,
  private route:ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.imageserviceService.getImage(id).subscribe(data => {
      this.image = data;
    });
   // this.image = this.imageserviceService.getImage(+this.route.snapshot.params['id']);
  }

}
