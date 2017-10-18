import {Profile} from './profile';
import {Negociacao} from './negociacao';

export class Mensagem {
    id: number;
    dataIni: Date;
    dataFim: Date;
    lida: boolean;
    emissor: Profile;
    receptor: Profile;
    negociacao: Negociacao;
}

