import {ServicoPrestador} from './servicoprestador';
import {Profile} from './profile';

export class ServicoQualificacao {
    id: number;
    bom: string;
    descricao: string;
    data: Date;
    cliente: Profile;
    prestador: Profile;
    servicoprestador: ServicoPrestador;
}
