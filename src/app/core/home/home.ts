import { Component, OnInit } from '@angular/core';

import {Categoria} from '../entities/categoria';
import {CategoriaRest} from '../factory/categoriarest';

@Component({
    selector: 'my-home',
    templateUrl: './home.html',
    styleUrls: [ './home.css' ]
})
export class HomeComponent implements OnInit {
    categorias: Categoria[] = [];

    constructor(private api: CategoriaRest) { }

    ngOnInit(): void {
        this.api.getCategorias().then(categorias => this.categorias = categorias);
    }
}
