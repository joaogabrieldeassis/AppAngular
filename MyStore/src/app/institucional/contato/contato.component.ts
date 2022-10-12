import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html'
})
export class ContatoComponent {
  public Name = 'João Gabriel de Assis';
  public Endereco = 'Eusebio de queiroz';
  public receive = this.Name + this.Endereco;
}
