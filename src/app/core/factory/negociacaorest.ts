import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Negociacao } from '../entities/negociacao';

@Injectable()
export class NegociacaoRest {

    private headers = new Headers({'Content-Type': 'application/json'});
    private url = 'http://127.0.0.1:8080/api/negociacao';  // URL to web api

    constructor(private http: Http) { }

    getNegociacoes(): Promise<Negociacao[]> {
        return this.http.get(this.url)
            .toPromise()
            .then(response => response.json() as Negociacao[])
            .catch(this.handleError);
    }

    getNegociacao(id: number): Promise<Negociacao> {
        const url = `${this.url}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Negociacao)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.url}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    create(negociacao: Negociacao): Promise<Negociacao> {
        console.log(JSON.stringify(negociacao));
        return this.http
            .post(this.url, JSON.stringify(negociacao), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Negociacao)
            .catch(this.handleError);
    }

    update(negociacao: Negociacao): Promise<Negociacao> {
        console.log(JSON.stringify(negociacao));
        const url = `${this.url}`;
        return this.http
            .put(url, JSON.stringify(negociacao), {headers: this.headers})
            .toPromise()
            .then(() => negociacao)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('ERRO: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}

