import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';


@Component({
  selector: 'app-carropage',
  templateUrl: './carropage.component.html',
  styleUrls: ['./carropage.component.css']
})
export class CarropageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:ServiceService) { }
  getCarroId:any;
  carroData:any;

  ngOnInit(): void {
    this.getCarroId = this.param.snapshot.paramMap.get('id');
    console.log(this.getCarroId,'getcarro');
    if(this.getCarroId) 
    {
      this.carroData = this.service.carros.filter((value)=>{
        return value.id == this.getCarroId;
      });
      console.log(this.carroData,'carrodata>>')
    }
  }
}