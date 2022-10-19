import { Component, OnInit } from '@angular/core';
import { Tenis } from './Bermuda';
import { TenisService } from './bermudas.service';

@Component({
  selector: 'app-app-lista-bermuda',
  templateUrl: './app-lista-bermuda.component.html',
  styles: [
  ]
})
export class ListaDeTenis implements OnInit {

  constructor(private tenis: TenisService) { }
  public onjTenis!: Tenis[];

  ngOnInit() {
    this.tenis.listarBermudas().subscribe(
      tenis => {
        this.onjTenis = tenis;
        console.log(tenis);
      }
    )
  }

}
