import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { Location }              from '@angular/common';

import {Profile} from '../../entities/profile';
import {ProfileRest} from '../../factory/profilerest';

@Component({
    selector: 'home-prestadores',
    templateUrl: './home-prestadores.html',
    styleUrls: [ './home-prestadores.css' ]
})
export class HomePrestadores implements OnInit {
    prestadores: Profile[] = [];
    constructor(
        private api: ProfileRest,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.api.getProfiles().then(prestadores => this.prestadores = prestadores);
    }

    goBack(): void {
        this.location.back();
    }
}
