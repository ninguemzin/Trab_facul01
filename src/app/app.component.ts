import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MotoSport';
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
