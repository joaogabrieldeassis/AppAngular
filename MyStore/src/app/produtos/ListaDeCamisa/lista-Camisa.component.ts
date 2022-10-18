import { Component, OnInit } from '@angular/core';
import { Camisa } from './Camisa';
import { ProdutosService } from './camisas.service';

@Component({
  selector: 'app-lista-camisa',
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
