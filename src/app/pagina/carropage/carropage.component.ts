import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carropage',
  templateUrl: './carropage.component.html',
  styleUrls: ['./carropage.component.css']
})
export class CarropageComponent implements OnInit {

  constructor(private param:ActivatedRoute) { }
  getCarroId:any
  ngOnInit(): void {
    this.getCarroId = this.param.snapshot.paramMap.get('id');
    console.log(this.getCarroId,'getcarro')
  }

}
