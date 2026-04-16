const {criarFila, entrar, atender, consultarProximo} = require('../src/fila');

describe('Fila recem criada tem tamanho 0', () => {

    let fila;

beforeEach(() => {
    fila = criarFila();
});


    test('dever criar fila vazia', () => {
        expect(fila.tamanho).toBe(0);
    });

    test('Após entrar tamanho da fila deve ser 1', () => {
        entrar(fila.itens, 'João');
        expect(fila.tamanho).toBe(1);
    });

    test('Entrar com nome já existente deve lançar erro', () => {
        entrar(fila.itens, 'Maria');
        expect(() => entrar(fila.itens, 'Maria')).toThrow("O nome já está na fila.");
    });

    test('Atender o primeiro que entrou (FIFO)', () => {
        entrar(fila.itens, 'Ana');
        entrar(fila.itens, 'Carlos');
        const atendido = atender(fila.itens);
        expect(atendido).toBe('Ana');
    });

    test('Atender fila vazia deve lançar erro', () => {
        expect(() => atender(fila.itens)).toThrow("A fila está vazia.");
    });

    test('consultarProximo nao deve remover o item da fila', () => {
        entrar(fila.itens, 'Pedro');
        const proximo = consultarProximo(fila.itens);
        expect(proximo).toBe('Pedro');
        expect(fila.tamanho).toBe(1);
    });

    test('Fila vazia consultarProximo deve retornar null', () => {
        const proximo = consultarProximo(fila.itens);
        expect(proximo).toBeNull();
    });

    test('3 pessoas entram, 1 é atendida, tamanho da fila deve ser 2', () => {
        entrar(fila.itens, 'Lucas');
        entrar(fila.itens, 'Mariana');
        entrar(fila.itens, 'Rafael');
        atender(fila.itens);
        expect(fila.tamanho).toBe(2);
    });
});