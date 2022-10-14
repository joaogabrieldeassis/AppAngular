import { Component, OnInit } from '@angular/core';
import { Camisa } from '../Camisa';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-Camisa.component.html'
})
export class ListaDeCamisa implements OnInit {

  constructor(private produtosService: ProdutosService) { }

  public produtos!: Camisa[];

  ngOnInit() {
    this.produtosService.obterProdutos()
      .subscribe(
        produtos => {
          this.produtos = produtos;
          console.log(produtos);
        }
      );
  }

}
