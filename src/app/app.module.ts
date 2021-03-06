import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { routing } from './app-routing.module'
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ContatoComponent } from './pagina/contato/contato.component';
import { HomeComponent } from './pagina/home/home.component';
import { MenuComponent } from './pagina/menu/menu.component';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { CarouselComponent} from './pagina/home/carousel/carousel.component';
import { FormularioComponent } from './pagina/carropage/formulario/formulario.component';
import { CarlistComponent } from './pagina/home/carlist/carlist.component';
import { CarropageComponent } from './pagina/carropage/carropage.component';
import { HttpClientModule } from '@angular/common/http';
registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    HomeComponent,
    MenuComponent,
    CarropageComponent,
    CarouselComponent,
    FormularioComponent,
    CarlistComponent,
    CarropageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [ {provide: LOCALE_ID, useValue: 'pt'}],
  bootstrap: [AppComponent],
})
export class AppModule { }
