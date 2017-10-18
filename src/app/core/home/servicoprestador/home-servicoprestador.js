"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var servicoprestadorrest_1 = require("../../factory/servicoprestadorrest");
var negociacao_1 = require("../../entities/negociacao");
var negociacaorest_1 = require("../../factory/negociacaorest");
var profile_1 = require("../../entities/profile");
var HomeServicoPrestador = (function () {
    function HomeServicoPrestador(api, apiNegociacao, route, location) {
        this.api = api;
        this.apiNegociacao = apiNegociacao;
        this.route = route;
        this.location = location;
        this.negociacao = new negociacao_1.Negociacao;
        this.cliente = new profile_1.Profile();
    }
    HomeServicoPrestador.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.api.getServicoPrestador(+params['id']); })
            .subscribe(function (servicoprestador) { return _this.servicoprestador = servicoprestador; });
    };
    HomeServicoPrestador.prototype.goContratar = function () {
        var _this = this;
        this.cliente.id = 7;
        this.cliente.nome = 'Tiago Michel2';
        this.negociacao.cliente = this.cliente;
        this.negociacao.servicoprestador = this.servicoprestador;
        this.negociacao.prestador = this.servicoprestador.prestador;
        this.apiNegociacao.create(this.negociacao).then(function () { return _this.goBack(); });
    };
    HomeServicoPrestador.prototype.goBack = function () {
        this.location.back();
    };
    return HomeServicoPrestador;
}());
HomeServicoPrestador = __decorate([
    core_1.Component({
        selector: 'home-detail',
        templateUrl: './home-servicoprestador.html',
        styleUrls: ['./home-servicoprestador.css']
    }),
    __metadata("design:paramtypes", [servicoprestadorrest_1.ServicoPrestadorRest,
        negociacaorest_1.NegociacaoRest,
        router_1.ActivatedRoute,
        common_1.Location])
], HomeServicoPrestador);
exports.HomeServicoPrestador = HomeServicoPrestador;
//# sourceMappingURL=home-servicoprestador.js.map