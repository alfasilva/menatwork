import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppTemplate }         from './core/home/template/home.template';
import { DashboardComponent }   from './heroes/dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/component/heroes.component';
import { HeroDetailComponent }  from './heroes/hero/hero-detail.component';
import { HeroService }          from './heroes/hero/hero.service';
import { HeroSearchComponent }  from './heroes/hero/hero-search.component';

import { ServicoRest }  from './core/factory/servicorest';
import { HomeComponent }  from './core/home/home';
import { HomeDetalhes }  from './core/home/detalhes/home-detalhes';
import { CategoriaRest } from './core/factory/categoriarest';
import { ServicoPrestadorRest } from './core/factory/servicoprestadorrest';
import { HomeServico } from './core/home/servico/home-servico';
import { HomeServicoPrestador } from './core/home/servicoprestador/home-servicoprestador';
import { NegociacaoRest } from './core/factory/negociacaorest';
import { HomePrestadores } from './core/home/prestadores/home-prestadores';
import { ProfileRest } from './core/factory/profilerest';
import { PrestadorDetalhes } from './core/home/prestadores/detalhes/prestador-detalhes';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppTemplate,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    HomeComponent,
    HomeDetalhes,
    HomeServico,
    HomeServicoPrestador,
    HomePrestadores,
    PrestadorDetalhes
  ],
  providers: [ HeroService, ServicoRest, CategoriaRest , ServicoPrestadorRest , NegociacaoRest , ProfileRest ],
  bootstrap: [ AppTemplate ]
})
export class AppModule { }
