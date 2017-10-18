import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Categoria } from '../entities/categoria';

@Injectable()
export class CategoriaRest {

    private headers = new Headers({'Content-Type': 'application/json'});
    private url = 'http://127.0.0.1:8080/api/categoria';  // URL to web api

    constructor(private http: Http) { }

    getCategorias(): Promise<Categoria[]> {
        return this.http.get(this.url)
            .toPromise()
            .then(response => response.json() as Categoria[])
            .catch(this.handleError);
    }

    getCategoria(id: number): Promise<Categoria> {
        const url = `${this.url}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Categoria)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.url}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    create(categoria: Categoria): Promise<Categoria> {
        return this.http
            .post(this.url, JSON.stringify(categoria), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Categoria)
            .catch(this.handleError);
    }

    update(categoria: Categoria): Promise<Categoria> {
        const url = `${this.url}`;
        return this.http
            .put(url, JSON.stringify(categoria), {headers: this.headers})
            .toPromise()
            .then(() => categoria)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('ERRO: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
