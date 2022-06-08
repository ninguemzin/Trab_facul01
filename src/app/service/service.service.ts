import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  carros = [
  {
    id: 1,
    nameCar: "Opala SS4",
    ano: "1973",
    marca: "Chevrolet",
    cor: "vermelho",
    valor:"R$ 230.000.00",
    detalhes: "Carro reformado do zero tapeçaria feito em couro motor feito inteiro pneus semi novos cambio 5 marchas",
    img: "https://blog.selfcar.com.br/wp-content/uploads/2019/02/1200pxChevroletOpalaSS19744.jpeg",
  },
  {
    id: 2,
    nameCar: "Corsel",
    ano: "1976",
    marca: "Ford",
    cor: "Amarelo",
    valor:"R$ 50.000.00",
    detalhes: "Corcel I 76 impecável, nada pra fazer, todo revisado a qualquer prova, com manual do proprietário e certificado de originalidade! Carro muito bonito!",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/39/Ford_Corcel_luxo_1973_crop.jpg",
},
{
  id: 3,
  nameCar: "Kombi Corujinha",
  ano: "1974",
  marca: "Volkswagen",
  cor: "Laranja",
  valor:"R$ 130.000.00",
  detalhes: "Carro exclusivo com ar condicionado e direção hidráulica sem nenhuma manutenção . Carro todo revisado",
  img: "https://motortudo.com/wp-content/uploads/2019/08/Kombi-Cprujinha-1968-Motor-Tudo-24-1024x683.jpg",
},
]
}
