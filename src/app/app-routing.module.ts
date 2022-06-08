import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ContatoComponent } from './pagina/contato/contato.component';
import { HomeComponent } from './pagina/home/home.component';
import { TabelaComponent } from './pagina/tabela/tabela.component';
import { CarropageComponent } from './pagina/carropage/carropage.component';

const routes: Routes = [
  {path:'', component: HomeComponent, pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'contato', component: ContatoComponent},
  {path:'tabela', component: TabelaComponent},
  {path:'tabela/:id', component: CarropageComponent}
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
