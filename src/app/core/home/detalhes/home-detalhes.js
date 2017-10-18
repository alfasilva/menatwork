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
var categoriarest_1 = require("../../factory/categoriarest");
var servicorest_1 = require("../../factory/servicorest");
var HomeDetalhes = (function () {
    function HomeDetalhes(categoriaApi, servicoApi, route, location) {
        this.categoriaApi = categoriaApi;
        this.servicoApi = servicoApi;
        this.route = route;
        this.location = location;
        this.servicos = [];
    }
    HomeDetalhes.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.categoriaApi.getCategoria(+params['id']); })
            .subscribe(function (categoria) { return _this.categoria = categoria; });
        this.route.params
            .switchMap(function (params) { return _this.servicoApi.getServicosByIdCategoria(+params['id']); })
            .subscribe(function (servicos) { return _this.servicos = servicos; });
    };
    HomeDetalhes.prototype.save = function () {
        var _this = this;
        this.categoriaApi.update(this.categoria).then(function () { return _this.goBack(); });
    };
    HomeDetalhes.prototype.goBack = function () {
        this.location.back();
    };
    return HomeDetalhes;
}());
HomeDetalhes = __decorate([
    core_1.Component({
        selector: 'home-detail',
        templateUrl: './home-detalhes.html',
        styleUrls: ['./home-detalhes.css']
    }),
    __metadata("design:paramtypes", [categoriarest_1.CategoriaRest,
        servicorest_1.ServicoRest,
        router_1.ActivatedRoute,
        common_1.Location])
], HomeDetalhes);
exports.HomeDetalhes = HomeDetalhes;
//# sourceMappingURL=home-detalhes.js.map