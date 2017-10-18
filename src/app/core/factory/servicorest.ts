import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Servico } from '../entities/servico';

@Injectable()
export class ServicoRest {

    private headers = new Headers({'Content-Type': 'application/json'});
    private url = 'http://127.0.0.1:8080/api/servico';  // URL to web api

    constructor(private http: Http) { }

    getServicos(): Promise<Servico[]> {
        return this.http.get(this.url)
            .toPromise()
            .then(response => response.json() as Servico[])
            .catch(this.handleError);
    }

    getServico(id: number): Promise<Servico> {
        const url = `${this.url}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Servico)
            .catch(this.handleError);
    }

    getServicosByIdCategoria(id: number): Promise<Servico[]> {
        const url = `${this.url}/categoria/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Servico[])
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.url}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    create(servico: Servico): Promise<Servico> {
        return this.http
            .post(this.url, JSON.stringify(servico), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Servico)
            .catch(this.handleError);
    }

    update(servico: Servico): Promise<Servico> {
        const url = `${this.url}`;
        return this.http
            .put(url, JSON.stringify(servico), {headers: this.headers})
            .toPromise()
            .then(() => servico)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}

