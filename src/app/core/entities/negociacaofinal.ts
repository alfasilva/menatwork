import {Profile} from './profile';
import {Negociacao} from './negociacao';

export class NegociacaoFinal {
    id: number;
    descricao: string;
    data: Date;
    pessoa: Profile;
    negociacao: Negociacao;
}
