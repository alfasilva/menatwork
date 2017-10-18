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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var ServicoRest = (function () {
    function ServicoRest(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.url = 'http://127.0.0.1:8080/api/servico'; // URL to web api
    }
    ServicoRest.prototype.getServicos = function () {
        return this.http.get(this.url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ServicoRest.prototype.getServico = function (id) {
        var url = this.url + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ServicoRest.prototype.getServicosByIdCategoria = function (id) {
        var url = this.url + "/categoria/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ServicoRest.prototype.delete = function (id) {
        var url = this.url + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    ServicoRest.prototype.create = function (servico) {
        return this.http
            .post(this.url, JSON.stringify(servico), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ServicoRest.prototype.update = function (servico) {
        var url = "" + this.url;
        return this.http
            .put(url, JSON.stringify(servico), { headers: this.headers })
            .toPromise()
            .then(function () { return servico; })
            .catch(this.handleError);
    };
    ServicoRest.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return ServicoRest;
}());
ServicoRest = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ServicoRest);
exports.ServicoRest = ServicoRest;
//# sourceMappingURL=servicorest.js.map