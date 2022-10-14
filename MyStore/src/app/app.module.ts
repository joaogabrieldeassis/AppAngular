import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { RodapeComponent } from './navegacao/rodape/rodape.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { rootRouterConfig } from './app.routes';
import { FormsModule } from '@angular/forms';
import { DataBindComponent } from './demos/data-bind/data-bind.component';
import { ProdutosService } from './produtos/produtos.service';
import { ListaDeCamisa } from './produtos/ListaDeCamisa/lista-Camisa.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    RodapeComponent,
    SobreComponent,
    ContatoComponent,
    DataBindComponent,
    ListaDeCamisa
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false })],
  ],
  providers: [
    ProdutosService,
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
