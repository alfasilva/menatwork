import {Profile} from './profile';
import {Servico} from './servico';

export class ServicoPrestador {
    id: number;
    valor: number;
    dataIni: Date;
    dataFim: Date;
    descricao: string;
    url: string;
    prestador: Profile;
    servico: Servico;
}
