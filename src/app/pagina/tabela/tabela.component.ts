import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  title = 'Angular';
  nome = '';
  vetor = ['Tv', 'Cadeira', 'Sofá', 'Mesa', 'Celular'];

  add() {
    let n = this.nome;
    alert(n)
    this.vetor.push(n)
    this.nome = ''
  }

  remover(x){
    this.vetor.splice(x,1)
  }
}
