import { Component, OnInit } from '@angular/core';
import { Produto} from './../../produto';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  p1 = new Produto('Batata', 'ALM1427@hotmail.com', 3, 0.10, '2022-05-26');

  constructor() { }

  ngOnInit(): void {
  }
}
