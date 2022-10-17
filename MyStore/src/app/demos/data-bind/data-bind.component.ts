import { Component } from '@angular/core';

@Component({
  selector: 'app-data-bind',
  templateUrl: 'data-bind.component.html'
})
export class DataBindComponent {
  public nome: string = "";
  public carrinho: number = 0;
  public produtoOne: number = 10;
  public produtoTwo: number = 10;
  public joao = 'João Gabriel';
  public nome1 !: string;
  public armazena !: string;
  public imagem: string = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg";
  adicionandoNoCarrinho() {
    this.carrinho += this.produtoOne + this.produtoTwo;
  }
  removerUmProduto() {
    this.carrinho -= this.produtoOne;
  }
  mostraNome() {
    return this.nome;
  }
  MostrarNomeApartirDeUmClick() {
    this.armazena += this.nome1;
  }
}
