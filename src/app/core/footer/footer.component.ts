import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  facebookLink = 'https://www.facebook.com/sharavathitechnologies/';
  twitter = '';
  googlePlus = '';
  youtube = '';
  linkedin = '';

  constructor() { }

  ngOnInit() {
  }

}
