import { Component } from '@angular/core';
@Component({
  selector: 'app-data-bind',
  templateUrl: './data-bind.component.html'
})

export class DataBindComponent {
  public item = 'João Gabriel';
  public contador1 = 0;
  public arrayDeNomes = [{
    nome: 'João Gabriel',
    idade: 18
  },
  {
    nome: 'João Gabriel',
    idade: 18,
  },
  {
    nome: 'João Gabriel',
    idade: 18

  }];
  contador() {
    return this.contador1++;
  }
}
