import {Categoria} from './categoria';

export class Servico {
    id: number;
    nome: string;
    descricao: string;
    url: string;
    ativo: boolean;
    icon: string;
    categoria: Categoria;
}
