import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }              from '@angular/common';

import {Categoria} from '../../entities/categoria';
import {CategoriaRest} from '../../factory/categoriarest';
import {Servico} from '../../entities/servico';
import {ServicoRest} from '../../factory/servicorest';

@Component({
    selector: 'home-detail',
    templateUrl: './home-detalhes.html',
    styleUrls: [ './home-detalhes.css' ]
})
export class HomeDetalhes implements OnInit {
    servicos: Servico[] = [];
    categoria: Categoria;

    constructor(
        private categoriaApi: CategoriaRest,
        private servicoApi: ServicoRest,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.categoriaApi.getCategoria(+params['id']))
            .subscribe(categoria => this.categoria = categoria);

        this.route.params
            .switchMap((params: Params) => this.servicoApi.getServicosByIdCategoria(+params['id']))
            .subscribe(servicos => this.servicos = servicos);
    }

    save(): void {
        this.categoriaApi.update(this.categoria).then(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }
}
