import { Component, OnInit } from '@angular/core';
import { Bermuda } from './Bermuda';
import { BermudaService } from './bermudas.service';

@Component({
  selector: 'app-app-lista-bermuda',
  templateUrl: './app-lista-bermuda.component.html',
  styles: [
  ]
})
export class ListaBermudaComponent implements OnInit {

  constructor(private bermudas: BermudaService) { }
  public bermudaslist!: Bermuda[];

  ngOnInit() {
    this.bermudas.listarBermudas().subscribe(
      bermudas => {
        this.bermudaslist = bermudas;
        console.log(bermudas);
      }
    )
  }

}
