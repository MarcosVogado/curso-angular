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

  constructor() { }

  ngOnInit(): void {
  }

}
