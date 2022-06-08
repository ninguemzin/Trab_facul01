import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  carros = [
    {
      id: 1,
      namecar: "Opala SS4",
      ano: "1973",
      marca: "Chevrolet",
      cor: "vermelho",
      valor: "R$ 230.000.00",
      detalhes: "Carro reformado do zero tapeçaria feito em couro motor feito inteiro pneus semi novos cambio 5 marchas",
      img: "https://blog.selfcar.com.br/wp-content/uploads/2019/02/1200pxChevroletOpalaSS19744.jpeg",
    },
    {
      id: 2,
      namecar: "Corsel",
      ano: "1976",
      marca: "Ford",
      cor: "Amarelo",
      valor: "R$ 50.000.00",
      detalhes: "Corcel I 76 impecável, nada pra fazer, todo revisado a qualquer prova, com manual do proprietário e certificado de originalidade! Carro muito bonito!",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/39/Ford_Corcel_luxo_1973_crop.jpg",
    },
    {
      id: 3,
      namecar: "Kombi Corujinha",
      ano: "1974",
      marca: "Volkswagen",
      cor: "Laranja",
      valor: "R$ 130.000.00",
      detalhes: "Carro exclusivo com ar condicionado e direção hidráulica sem nenhuma manutenção . Carro todo revisado",
      img: "https://motortudo.com/wp-content/uploads/2019/08/Kombi-Cprujinha-1968-Motor-Tudo-24-1024x683.jpg",
    },
    {
      id: 4,
      namecar: "Fusca",
      ano: "1986",
      marca: "Volkswagen",
      cor: "Azul",
      valor: "R$ 50.000.00",
      detalhes: "1.6 8v Gasolina 2p Manual, Suspensão esportiva, Rodas Porsche da época tala larga, 4 pneus novos Goodyear, Veículo em excelente estado de conservação e mecânica",
      img: "https://pensecarros.com.br/cms/uploads/fusca_azul_61b8eb1245653.jpg",
    },
    {
      id: 5,
      namecar: "Fiat 147",
      ano: "1977",
      marca: "Fiat",
      cor: "Marrom",
      valor: "R$ 50.000.00",
      detalhes: "Pintura muito bom estado. Todos os vidros originais Blindex e cromagem dos para-choques em bom estado. Rodas esportivas com pneus meia vida na traseira e dianteira em bom estado. Acompanha também o conjunto de rodas originais. Interior todo forrado, com bancos altos. Painel em bom estado com som de época.",
      img: "https://revistacarro.com.br/wp-content/uploads/2018/09/Fiat-147-1.jpg",
    },
    {
      id: 6,
      namecar: "Ford F100",
      ano: "1986",
      marca: "Ford",
      cor: "Preto esverdeado",
      valor: "R$ 70.000.00",
      detalhes: "F100 mwm229 tb, amortecedores novos, direção hidráulica , freios a disco novos, pneus novos, tds óleos e fluidos novos, doc em dia.",
      img: "https://i0.wp.com/thegarage.com.br/wp-content/uploads/2019/07/1986-ford-f100-the-garage-1.jpg?fit=1952%2C1301&ssl=1",
    },
  ]
}
