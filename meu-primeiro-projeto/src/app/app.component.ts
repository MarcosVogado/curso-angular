import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <button (click)="destruirComponent()">Destruir componente</button>
  <br>
  {{valor}}
  <button (click)="adicionar()">Adicionar</button>
  <app-title *ngIf="destruir" ></app-title>
  1<router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked {

  public destruir:boolean = true;

  public valor: number = 1;

  constructor() { }

  public destruirComponent(): void {
    this.destruir = !this.destruir;
  }

  public adicionar(): number{
    return this.valor++;
  }

  ngOnInit(): void {
    
  }

  ngDoCheck(): void {
    console.log("Do Check");
  }

  ngAfterContentInit(): void {
    console.log("After Content Init");
  }

  ngAfterContentChecked(): void {
    console.log("After Content Checked");
  }

  ngAfterViewInit(): void {
    console.log("After View Init");
  }

  ngAfterViewChecked(): void {
    console.log("After View Checked");
  }


}
