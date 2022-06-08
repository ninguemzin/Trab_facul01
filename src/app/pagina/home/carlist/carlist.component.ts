import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css']
})
export class CarlistComponent implements OnInit {

  carros: string[] = ["Corsel", "Opala", "Fusca", "Kombi", "carro2", "carro3"]

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    for (let i=0; i<this.carros.length; i++) {
      let carro = this.carros[i];
  }

}
}
