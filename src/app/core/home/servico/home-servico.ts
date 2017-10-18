import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }              from '@angular/common';

import {Servico} from '../../entities/servico';
import {ServicoRest} from '../../factory/servicorest';
import {ServicoPrestador} from '../../entities/servicoprestador';
import {ServicoPrestadorRest} from '../../factory/servicoprestadorrest';

@Component({
    selector: 'home-detail',
    templateUrl: './home-servico.html',
    styleUrls: [ './home-servico.css' ]
})
export class HomeServico implements OnInit {
    servico: Servico;
    servicoprestadores: ServicoPrestador[] = [];

    constructor(
        private servicoApi: ServicoRest,
        private servicoprestadorrest: ServicoPrestadorRest,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.servicoApi.getServico(+params['id']))
            .subscribe(servico => this.servico = servico);
        this.route.params
            .switchMap((params: Params) => this.servicoprestadorrest.getServicosPrestadorByIdServico(+params['id']))
            .subscribe(servicoprestadores => this.servicoprestadores = servicoprestadores);
    }

    save(): void {
        this.servicoApi.update(this.servico).then(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }
}
