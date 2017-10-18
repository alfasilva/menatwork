import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './heroes/dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/component/heroes.component';
import { HeroDetailComponent }  from './heroes/hero/hero-detail.component';
import { HomeComponent }  from './core/home/home';
import { HomeDetalhes }  from './core/home/detalhes/home-detalhes';
import { HomeServico } from './core/home/servico/home-servico';
import { HomeServicoPrestador } from './core/home/servicoprestador/home-servicoprestador';
import { HomePrestadores } from './core/home/prestadores/home-prestadores';
import { PrestadorDetalhes } from './core/home/prestadores/detalhes/prestador-detalhes';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'heroDetail/:id', component: HeroDetailComponent },
    { path: 'heroes',     component: HeroesComponent },
    { path: 'home',     component: HomeComponent },
    { path: 'homeDetail/:id', component: HomeDetalhes },
    { path: 'homeServico/:id', component: HomeServico },
    { path: 'homeServicoPrestador/:id', component: HomeServicoPrestador },
    { path: 'prestadores',  component: HomePrestadores },
    { path: 'prestadorDetalhes/:id',  component: PrestadorDetalhes }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
