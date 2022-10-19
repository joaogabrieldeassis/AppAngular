import { Component, OnInit } from '@angular/core';
import { Tenis } from './Bermuda';
import { TenisService } from './bermudas.service';

@Component({
  selector: 'app-app-lista-bermuda',
  templateUrl: './app-lista-bermuda.component.html',
  styles: [
  ]
})
export class ListaBermudaComponent implements OnInit {

  constructor(private bermudas: TenisService) { }
  public bermudaslist!: Tenis[];

  ngOnInit() {
    this.bermudas.listarBermudas().subscribe(
      bermudas => {
        this.bermudaslist = bermudas;
        console.log(bermudas);
      }
    )
  }

}
