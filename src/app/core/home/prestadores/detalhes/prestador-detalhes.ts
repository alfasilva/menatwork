import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }              from '@angular/common';

import {Profile} from '../../../entities/profile';
import {ProfileRest} from '../../../factory/profilerest';
import {ServicoPrestador} from '../../../entities/servicoprestador';
import {ServicoPrestadorRest} from '../../../factory/servicoprestadorrest';


@Component({
    selector: 'prestador-detalhes',
    templateUrl: './prestador-detalhes.html',
    styleUrls: [ './prestador-detalhes.css' ]
})
export class PrestadorDetalhes implements OnInit {
    servicosprestador: ServicoPrestador[] = [];
    prestador: Profile;

    constructor(
        private apiProfile: ProfileRest,
        private apiSrvPrestador: ServicoPrestadorRest,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.apiProfile.getProfile(+params['id']))
            .subscribe(prestador => this.prestador = prestador);

        this.route.params
            .switchMap((params: Params) => this.apiSrvPrestador.getByIdPrestador(+params['id']))
            .subscribe(servicosprestador => this.servicosprestador = servicosprestador);
    }

    save(): void {
        this.apiProfile.update(this.prestador).then(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }
}
