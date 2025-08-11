import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {

  @Input() public title: string = "Meu Primeiro Projeto Angular";

  constructor() { }

  ngOnDestroy(): void {
    console.log("Componente destruído");
  }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    console.log("Foi alterado com sucesso");
  }

}
