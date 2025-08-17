import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <!--
  <app-diretivas-atributos>
  <h1>Aula de diretivas de atributos</h1>
  <hr>
  </app-diretivas-atributos>
  <app-diretivas-estruturais></app-diretivas-estruturais>
  <app-data-binding></app-data-binding>
  <app-diretivas-atributos></app-diretivas-atributos>
  <app-new-component></app-new-component>

  <app-input [contador]="addValue"></app-input>
  <br>
  <button (click)="add()">Add</button>
  -->

  <ng-template [ngIf]="getDados">
    <h1>{{getDados.nome}}</h1>
    <h2>{{getDados.idade}}</h2>
  </ng-template>

  <app-output (enviarDados)="setDados($event)"></app-output>

  <router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {

  public addValue: number = 0;
  public getDados: {nome: string, idade: number} | undefined;

  constructor() { }

  ngOnInit(): void {
  
  }

  add() {
    this.addValue++;
  }

  public setDados(event: {nome: string, idade: number}){
    this.getDados = event;
  }
}
