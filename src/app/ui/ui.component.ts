import { Component, OnInit } from '@angular/core';
import { variacion } from '../funcion-lineal/funcion-lineal';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit{

  a : number = 0;
  b : number = 0;
  x : String = "";
  TextV : any;

  constructor() { }

  ngOnInit(): void {
  }

  variacion() {
    let result : number[];
    let x: number[] = this.x.split(",").map(number => {return parseFloat(number)});
    result = variacion(this.a, this.b, x);
    this.TextV = result;
  }

}