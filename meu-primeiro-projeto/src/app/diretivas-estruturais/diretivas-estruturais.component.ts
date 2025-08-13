import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true;
  public conditionClick: boolean = true;
  public list: Array<{nome: string, idade: number}> = [
    { nome: "Marcos Henrique", idade: 30 },
    { nome: "Tonin carlos" , idade: 25 },
    { nome: "Macedo cabuloso" , idade: 28 },
  ]

  constructor() { }

  ngOnInit(): void {

    setInterval(()=>{
      if(this.condition){
      this.condition = false;
      }else{
        this.condition = true;
      }
    }, 3000)

  }

  public onClick(){
    if(this.conditionClick){
      this.conditionClick = false;
    }else{
      this.conditionClick = true;
    }
  }

  public onClickAddList(){
    this.list.push({nome: "Novo nome", idade: 20});
  }

  public onClickEventList(event: number){
    
    this.list.splice(event, 1);

  }

}
