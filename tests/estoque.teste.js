const {adicionarProduto, buscarProduto, resetEstoque} = require('../src/estoque');

describe('Estoque', () => {
    beforeEach(() => {
        resetEstoque(); //limpar o estoque antes de cada teste
    });

    test('adicionar produto corretamente', () => {
        adicionarProduto('Camiseta', 10);
        const p = buscarProduto('Camiseta');
        expect(p).not.toBeNull();
        expect(p.quantidade).toBe(10);
        expect(p.nome).toBe('Camiseta');
    });

    test('retornar null para produto não encontrado', () => {
        expect(buscarProduto('Calça')).toBeNull();
    });
});