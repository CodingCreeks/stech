import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`  img { max-width: 100%; }
              #cover { background-size: cover; color: white; height: 100%; text-align: center; display: flex; align-items: center;}
              cover-caption { height: 80% }
             /deep/ .carousel-indicators li{ width:4px; height:4px; background: black; }
             /deep/ .carousel-indicators .active { background: red; }
          `],
  // styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
  }

  ngOnInit() {
  }

}
