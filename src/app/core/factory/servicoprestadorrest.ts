import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ServicoPrestador } from '../entities/servicoprestador';

@Injectable()
export class ServicoPrestadorRest {

    private headers = new Headers({'Content-Type': 'application/json'});
    private url = 'http://127.0.0.1:8080/api/servicoprestador';  // URL to web api

    constructor(private http: Http) { }

    getServicosPrestador(): Promise<ServicoPrestador[]> {
        return this.http.get(this.url)
            .toPromise()
            .then(response => response.json() as ServicoPrestador[])
            .catch(this.handleError);
    }

    getServicoPrestador(id: number): Promise<ServicoPrestador> {
        const url = `${this.url}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as ServicoPrestador)
            .catch(this.handleError);
    }

    getServicosPrestadorByIdServico(id: number): Promise<ServicoPrestador[]> {
        const url = `${this.url}/servico/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as ServicoPrestador[])
            .catch(this.handleError);
    }

    getByIdPrestador(id: number): Promise<ServicoPrestador[]> {
        const url = `${this.url}/prestador/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as ServicoPrestador[])
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.url}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    create(servicoprestador: ServicoPrestador): Promise<ServicoPrestador> {
        return this.http
            .post(this.url, JSON.stringify(servicoprestador), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as ServicoPrestador)
            .catch(this.handleError);
    }

    update(servicoprestador: ServicoPrestador): Promise<ServicoPrestador> {
        const url = `${this.url}`;
        return this.http
            .put(url, JSON.stringify(servicoprestador), {headers: this.headers})
            .toPromise()
            .then(() => servicoprestador)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('ERRO: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}

