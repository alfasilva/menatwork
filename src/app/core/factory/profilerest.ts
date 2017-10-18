import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Profile } from '../entities/profile';

@Injectable()
export class ProfileRest {

    private headers = new Headers({'Content-Type': 'application/json'});
    private url = 'http://127.0.0.1:8080/api/profile';  // URL to web api

    constructor(private http: Http) { }

    getProfiles(): Promise<Profile[]> {
        return this.http.get(this.url)
            .toPromise()
            .then(response => response.json() as Profile[])
            .catch(this.handleError);
    }

    getPrestadores(): Promise<Profile[]> {
        const url = `${this.url}/'prestadores'`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Profile[])
            .catch(this.handleError);
    }

    getProfile(id: number): Promise<Profile> {
        const url = `${this.url}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Profile)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.url}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    create(profile: Profile): Promise<Profile> {
        return this.http
            .post(this.url, JSON.stringify(profile), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Profile)
            .catch(this.handleError);
    }

    update(profile: Profile): Promise<Profile> {
        const url = `${this.url}`;
        return this.http
            .put(url, JSON.stringify(profile), {headers: this.headers})
            .toPromise()
            .then(() => profile)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('ERRO: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}


