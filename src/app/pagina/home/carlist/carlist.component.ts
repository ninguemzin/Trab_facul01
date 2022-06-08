import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css']
})
export class CarlistComponent implements OnInit {

  constructor(private service:ServiceService) { }
  carros:any;
  ngOnInit(): void {
    this.carros = this.service.carros
  }

}
