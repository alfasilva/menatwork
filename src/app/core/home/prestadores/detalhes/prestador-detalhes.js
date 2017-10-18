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
var profilerest_1 = require("../../../factory/profilerest");
var servicoprestadorrest_1 = require("../../../factory/servicoprestadorrest");
var PrestadorDetalhes = (function () {
    function PrestadorDetalhes(apiProfile, apiSrvPrestador, route, location) {
        this.apiProfile = apiProfile;
        this.apiSrvPrestador = apiSrvPrestador;
        this.route = route;
        this.location = location;
        this.servicosprestador = [];
    }
    PrestadorDetalhes.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.apiProfile.getProfile(+params['id']); })
            .subscribe(function (prestador) { return _this.prestador = prestador; });
        this.route.params
            .switchMap(function (params) { return _this.apiSrvPrestador.getByIdPrestador(+params['id']); })
            .subscribe(function (servicosprestador) { return _this.servicosprestador = servicosprestador; });
    };
    PrestadorDetalhes.prototype.save = function () {
        var _this = this;
        this.apiProfile.update(this.prestador).then(function () { return _this.goBack(); });
    };
    PrestadorDetalhes.prototype.goBack = function () {
        this.location.back();
    };
    return PrestadorDetalhes;
}());
PrestadorDetalhes = __decorate([
    core_1.Component({
        selector: 'prestador-detalhes',
        templateUrl: './prestador-detalhes.html',
        styleUrls: ['./prestador-detalhes.css']
    }),
    __metadata("design:paramtypes", [profilerest_1.ProfileRest,
        servicoprestadorrest_1.ServicoPrestadorRest,
        router_1.ActivatedRoute,
        common_1.Location])
], PrestadorDetalhes);
exports.PrestadorDetalhes = PrestadorDetalhes;
//# sourceMappingURL=prestador-detalhes.js.map