import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.css']
})
export class IndustriesComponent implements OnInit {

  private childSelected: boolean;

  constructor() { }

  ngOnInit() {
    this.childSelected = false;
  }

  onChildSelect() {
    console.log("on child called!...");
    this.childSelected = true;
  }
}
