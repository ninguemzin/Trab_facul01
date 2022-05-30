import { Component, OnInit } from '@angular/core';
import { Produto} from './../../produto';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  p1 = new Produto('Batata', 'ALM1427@hotmail.com', 3, 0.10, '2022-05-26');
  constructor() { }

  ngOnInit(): void {
  }

}
