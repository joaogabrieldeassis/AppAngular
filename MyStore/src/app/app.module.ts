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
import { ProdutosService } from './produtos/ListaDeCamisa/camisas.service';
import { ListaDeCamisa } from './produtos/ListaDeCamisa/lista-Camisa.component';
import { ListaDeTenis } from './produtos/ListaDeBermudas/app-lista-bermuda.component';
import { TenisService } from './produtos/ListaDeBermudas/bermudas.service';
import { TesteComponent } from './demos/teste/teste.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { BlusasComponent } from './produtos/blusas/blusas.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    RodapeComponent,
    SobreComponent,
    ContatoComponent,
    DataBindComponent,
    ListaDeCamisa,
    ListaDeTenis,
    TesteComponent,
    CartPageComponent,
    CartPageComponent,
    BlusasComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false })],
  ],
  providers: [
    TenisService,
    ProdutosService,
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
