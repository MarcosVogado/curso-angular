import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {

  public backgroundColor: string = 'blue';
  public valor: boolean = true;
  public heightPx: string = '20px';

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      if(this.valor){
        this.valor = false;
      }else{
        this.valor = true;
      }

      if(this.heightPx == "20px"){
        this.heightPx = "50px";
        this.backgroundColor = "green";
      }else{
        this.heightPx = "20px";
        this.backgroundColor = "blue";
      }
    }, 2000);

  }

}
