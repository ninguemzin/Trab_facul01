import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carropage',
  templateUrl: './carropage.component.html',
  styleUrls: ['./carropage.component.css']
})
export class CarropageComponent implements OnInit {

id: string;

  constructor(private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['nameCar']
  }

}
