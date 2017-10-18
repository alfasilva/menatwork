"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./heroes/dashboard/dashboard.component");
var heroes_component_1 = require("./heroes/component/heroes.component");
var hero_detail_component_1 = require("./heroes/hero/hero-detail.component");
var home_1 = require("./core/home/home");
var home_detalhes_1 = require("./core/home/detalhes/home-detalhes");
var home_servico_1 = require("./core/home/servico/home-servico");
var home_servicoprestador_1 = require("./core/home/servicoprestador/home-servicoprestador");
var home_prestadores_1 = require("./core/home/prestadores/home-prestadores");
var prestador_detalhes_1 = require("./core/home/prestadores/detalhes/prestador-detalhes");
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'heroDetail/:id', component: hero_detail_component_1.HeroDetailComponent },
    { path: 'heroes', component: heroes_component_1.HeroesComponent },
    { path: 'home', component: home_1.HomeComponent },
    { path: 'homeDetail/:id', component: home_detalhes_1.HomeDetalhes },
    { path: 'homeServico/:id', component: home_servico_1.HomeServico },
    { path: 'homeServicoPrestador/:id', component: home_servicoprestador_1.HomeServicoPrestador },
    { path: 'prestadores', component: home_prestadores_1.HomePrestadores },
    { path: 'prestadorDetalhes/:id', component: prestador_detalhes_1.PrestadorDetalhes }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map