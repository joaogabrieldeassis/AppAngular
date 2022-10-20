import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-data-bind',
  templateUrl: './data-bind.component.html'
})

export class DataBindComponent {
  public teste = 'Dados Enviados';
  public item = 'João Gabriel';
  public contador1 = 0;
  public buutonFalse = true;
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
  Save() {
    return this.teste = this.teste;
  }
  @Input() size!: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }
}
