import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-oil-gas',
  templateUrl: './oil-gas.component.html',
  styleUrls: ['./oil-gas.component.css']
})
export class OilGasComponent implements OnInit {

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
