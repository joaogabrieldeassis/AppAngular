import { Component } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public mensage!: string;
}
