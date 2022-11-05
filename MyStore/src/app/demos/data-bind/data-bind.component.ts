import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-data-bind',
  templateUrl: './data-bind.component.html'
})

export class DataBindComponent {
  public teste = '09042004';
  public testetwo = true;
  public arrayDeNomes = [{
    id: 1,
    nome: 'Jesus',
    idade: 18
  },
  {
    id: 2,
    nome: 'Mariana Pereira',
    idade: 18,
  },

  {
    id: 3,
    nome: 'João Gabriel',
    idade: 18

  }];
  joao() {
    var receive = this.arrayDeNomes.map(function (nomes) {
      return nomes.nome
    });
    return receive
  }
  gabriel() {
    var receive = this.arrayDeNomes.map(function (calculoidade) {
      var receivetwo = calculoidade.idade + calculoidade.idade;
      return receivetwo
    })
    return receive;
  }
}
