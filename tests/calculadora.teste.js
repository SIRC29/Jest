const { somar, subtrair, multiplicar, dividir, exponenciacao, modulo } = require('../src/calculadora.js');

describe('Calculadora', () => {
    test('Soma de 2 + 3 deve ser 5', () => {
        expect(somar(2, 3)).toBe(5);
    });
    test('Subtração de 5 - 3 deve ser 2', () => {
        expect(subtrair(5, 3)).toBe(2);
    });
    test('Multiplicação de 2 * 3 deve ser 6', () => {
        expect(multiplicar(2, 3)).toBe(6);
    });
    test('Divisão de 6 / 0 deve lançar erro', () => {
        expect(() => dividir(6, 0)).toThrow("Não é possível dividir por zero");
    });
    test('Exponenciação de 2 ^ 3 deve ser 8', () => {
        expect(exponenciacao(2, 3)).toBe(8);
    });
    test('Módulo de 5 % 3 deve ser 2', () => {
        expect(modulo(5, 3)).toBe(2);
    });
});
