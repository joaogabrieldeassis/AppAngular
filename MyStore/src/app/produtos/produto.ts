export class Produto {
    id: string;
    nome: string;
    valor: string;
    promocao: boolean;
    valorPromocao: string;
    imagem: string;

    constructor(id: string, nome: string, valor: string, promocao: boolean, valorPromocao: string, imagem: string) {
        this.id = id;
        this.nome = nome;
        this.valor = valor;
        this.promocao = promocao;
        this.valorPromocao = valorPromocao;
        this.imagem = imagem;
    }
}