import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-food-beverage',
  templateUrl: './food-beverage.component.html',
  styleUrls: ['./food-beverage.component.css']
})
export class FoodBeverageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['/industries']);
  }

}
