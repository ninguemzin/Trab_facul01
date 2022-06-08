import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css']
})
export class CarlistComponent implements OnInit {

  carros: string[] = ["Corsel", "Opala", "Fusca", "Kombi", "carro2", "carro3"]

  constructor() { }

  ngOnInit(): void {

  }

}
