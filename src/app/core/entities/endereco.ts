import {Profile} from './profile';

export class Endereco {
    id: number;
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    latitude: string;
    longitude: string;
    profile: Profile;
}
