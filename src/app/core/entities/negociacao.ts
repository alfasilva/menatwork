import {Profile} from './profile';
import {ServicoPrestador} from './servicoprestador';

export class Negociacao {
    id: number;
    dataIni: Date;
    dataFim: Date;
    cliente: Profile;
    prestador: Profile;
    servicoprestador: ServicoPrestador;
}
