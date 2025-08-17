import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  public list: Array<{nome: string, idade:number}> = [
    { nome: "Marcos Henrique", idade: 19},
    { nome: "Pedro Henrique", idade: 31},
    { nome: "José Henrique", idade: 58}
]

  constructor() { }

  ngOnInit(): void {
  }

  public getDados(event: number){
    console.log(this.list[event]);
  }

}
