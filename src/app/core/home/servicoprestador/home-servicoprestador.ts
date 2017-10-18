import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }              from '@angular/common';

import {ServicoPrestador} from '../../entities/servicoprestador';
import {ServicoPrestadorRest} from '../../factory/servicoprestadorrest';
import {Negociacao} from '../../entities/negociacao';
import {NegociacaoRest} from '../../factory/negociacaorest';
import {Profile} from '../../entities/profile';

@Component({
    selector: 'home-detail',
    templateUrl: './home-servicoprestador.html',
    styleUrls: [ './home-servicoprestador.css' ]
})
export class HomeServicoPrestador implements OnInit {
    servicoprestador: ServicoPrestador;
    negociacao: Negociacao = new Negociacao;
    cliente: Profile = new Profile();
    constructor(
        private api: ServicoPrestadorRest,
        private apiNegociacao: NegociacaoRest,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.api.getServicoPrestador(+params['id']))
            .subscribe(servicoprestador => this.servicoprestador = servicoprestador);
    }

    goContratar(): void {
        this.cliente.id = 7;
        this.cliente.nome = 'Tiago Michel2';
        this.negociacao.cliente = this.cliente;
        this.negociacao.servicoprestador = this.servicoprestador;
        this.negociacao.prestador = this.servicoprestador.prestador;
        this.apiNegociacao.create(this.negociacao).then(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }
}
