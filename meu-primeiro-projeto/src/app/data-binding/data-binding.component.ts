import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  public nome: string = "Marcos";
  public idade: number = 19;

  public checkedDisabled: boolean = true;
  public imgSrc: string = "https://picsum.photos/200/300";

  public position: {x: number, y: number} = {x: 0, y:0};

  constructor() { }

  ngOnInit(): void {
  }

  public alertaInfo(valor: MouseEvent){
    console.log(valor);
  }

  public mouseMoveTeste(event: MouseEvent) {
    this.position.x = event.offsetX;
    this.position.y = event.offsetY;
  }

}
