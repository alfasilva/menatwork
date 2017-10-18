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
var servicorest_1 = require("../../factory/servicorest");
var servicoprestadorrest_1 = require("../../factory/servicoprestadorrest");
var HomeServico = (function () {
    function HomeServico(servicoApi, servicoprestadorrest, route, location) {
        this.servicoApi = servicoApi;
        this.servicoprestadorrest = servicoprestadorrest;
        this.route = route;
        this.location = location;
        this.servicoprestadores = [];
    }
    HomeServico.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.servicoApi.getServico(+params['id']); })
            .subscribe(function (servico) { return _this.servico = servico; });
        this.route.params
            .switchMap(function (params) { return _this.servicoprestadorrest.getServicosPrestadorByIdServico(+params['id']); })
            .subscribe(function (servicoprestadores) { return _this.servicoprestadores = servicoprestadores; });
    };
    HomeServico.prototype.save = function () {
        var _this = this;
        this.servicoApi.update(this.servico).then(function () { return _this.goBack(); });
    };
    HomeServico.prototype.goBack = function () {
        this.location.back();
    };
    return HomeServico;
}());
HomeServico = __decorate([
    core_1.Component({
        selector: 'home-detail',
        templateUrl: './home-servico.html',
        styleUrls: ['./home-servico.css']
    }),
    __metadata("design:paramtypes", [servicorest_1.ServicoRest,
        servicoprestadorrest_1.ServicoPrestadorRest,
        router_1.ActivatedRoute,
        common_1.Location])
], HomeServico);
exports.HomeServico = HomeServico;
//# sourceMappingURL=home-servico.js.map