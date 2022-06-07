import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ContatoComponent } from './pagina/contato/contato.component';
import { HomeComponent } from './pagina/home/home.component';
import { MenuComponent } from './pagina/menu/menu.component';
import { TabelaComponent } from './pagina/tabela/tabela.component';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { CarouselComponent} from './pagina/home/carousel/carousel.component';
import { FormularioComponent } from './pagina/tabela/formulario/formulario.component';
registerLocaleData(ptBr);



@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    HomeComponent,
    MenuComponent,
    TabelaComponent,
    CarouselComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ {provide: LOCALE_ID, useValue: 'pt'}],
  bootstrap: [AppComponent],
})
export class AppModule { }
