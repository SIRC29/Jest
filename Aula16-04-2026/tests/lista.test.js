const {filtrarAtivos, truncar} = require('../src/lista');

describe('Testar quantidade de caracteres', () => {
    test('array vazio tem comprimento 0', () => {
        expect([]).toHaveLength(0);
    });

    test('Filtrar itens ativos', () => {
        const itens = [
            {nome: 'Item 1', ativo: true},
            {nome: 'Item 2', ativo: false},
            {nome: 'Item 3', ativo: true}
        ];
        expect(filtrarAtivos(itens)).toHaveLength(2);
    });

    test('string truncada tem comprimento correto', () => {
        const resultado = truncar('Programação', 5);
        // O resultado esperado é 'Progr...' Verificando se tem 5 caracteres + '...' 8 Caracteres no total
        expect(resultado).toHaveLength(8);
    });

    test('texto curto não é truncado', () => {
        const resultado = truncar('Olá', 10);
        // O resultado esperado é 'Olá' que tem 3 caracteres
        expect(resultado).toHaveLength(3);
    });
});