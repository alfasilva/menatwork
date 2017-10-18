"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
var home_template_1 = require("./core/home/template/home.template");
var dashboard_component_1 = require("./heroes/dashboard/dashboard.component");
var heroes_component_1 = require("./heroes/component/heroes.component");
var hero_detail_component_1 = require("./heroes/hero/hero-detail.component");
var hero_service_1 = require("./heroes/hero/hero.service");
var hero_search_component_1 = require("./heroes/hero/hero-search.component");
var servicorest_1 = require("./core/factory/servicorest");
var home_1 = require("./core/home/home");
var home_detalhes_1 = require("./core/home/detalhes/home-detalhes");
var categoriarest_1 = require("./core/factory/categoriarest");
var servicoprestadorrest_1 = require("./core/factory/servicoprestadorrest");
var home_servico_1 = require("./core/home/servico/home-servico");
var home_servicoprestador_1 = require("./core/home/servicoprestador/home-servicoprestador");
var negociacaorest_1 = require("./core/factory/negociacaorest");
var home_prestadores_1 = require("./core/home/prestadores/home-prestadores");
var profilerest_1 = require("./core/factory/profilerest");
var prestador_detalhes_1 = require("./core/home/prestadores/detalhes/prestador-detalhes");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            home_template_1.AppTemplate,
            dashboard_component_1.DashboardComponent,
            hero_detail_component_1.HeroDetailComponent,
            heroes_component_1.HeroesComponent,
            hero_search_component_1.HeroSearchComponent,
            home_1.HomeComponent,
            home_detalhes_1.HomeDetalhes,
            home_servico_1.HomeServico,
            home_servicoprestador_1.HomeServicoPrestador,
            home_prestadores_1.HomePrestadores,
            prestador_detalhes_1.PrestadorDetalhes
        ],
        providers: [hero_service_1.HeroService, servicorest_1.ServicoRest, categoriarest_1.CategoriaRest, servicoprestadorrest_1.ServicoPrestadorRest, negociacaorest_1.NegociacaoRest, profilerest_1.ProfileRest],
        bootstrap: [home_template_1.AppTemplate]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map