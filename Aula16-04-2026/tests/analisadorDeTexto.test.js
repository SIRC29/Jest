const { contarPalavras, contarCaracteres, palavraMaisFrequente, analisarTexto } = require("../src/analisadorDeTexto");

describe('Analise de texto', () => {
    test('Olá mundo → 2 palavras', () => {
        expect(contarPalavras('Olá mundo')).toBe(2);
    });
    test('Texto vazio → 0 palavras', () => {
        expect(contarPalavras('')).toBe(0);
    });
    test('Olá mundo → 8 caracteres (sem espaço)', () => {
        expect(contarCaracteres('Olá mundo')).toBe(8);
    });
    test('o gato e o rato → palavra mais frequente é "o"', () => {
        expect(palavraMaisFrequente('o gato e o rato')).toBe('o');
    });
    test('Texto vazio em palavraMaisFrequente() → lança erro', () => {
        expect(() => palavraMaisFrequente('')).toThrow();
    });
    test('Maiúsculas e minúsculas não devem importar: "O gato e o rato" → mais frequente ainda é "o"', () => {
        expect(palavraMaisFrequente('O gato e o rato')).toBe('o');
    });
    test('analisarTexto() retorna objeto com as 3 propriedades corretas', () => {
        const resultado = analisarTexto('Olá mundo');
        expect(resultado).toEqual({
            totalPalavras: 2,
            totalCaracteres: 8,
            palavraMaisFrequente: 'olá'
        });
    });
    
    test('Integração: resultado de analisarTexto() bate com os resultados das funções individuais', () => {
        const resultado = analisarTexto('Olá mundo');
        expect(resultado.totalPalavras).toBe(2);
        expect(resultado.totalCaracteres).toBe(8);
        expect(resultado.palavraMaisFrequente).toBe('olá');
    });

});
