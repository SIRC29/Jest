const { jurosSimples, jurosCompostos, compararJuros } = require('../src/calculadoraDeJuros');

describe('Calculadora de Juros', () => {

    test('Juros simples: R$1000, taxa 5% (0.05), 3 anos → R$150', () => {
        expect(jurosSimples(1000, 0.05, 3)).toBe(150);
    });

    test('Juros simples com capital zero → retorna 0', () => {
        expect(jurosSimples(0, 0.05, 3)).toBe(0);
    });

    test(' Juros simples com valor negativo → retorna erro', () => {
        expect(() => jurosSimples(-1000, 0.05, 3)).toThrow("Valores não podem ser negativos.");
    });

    test('Juros compostos: R$1000, 10% ao ano (0.1), 2 anos → R$210', () => {
        expect(jurosCompostos(1000, 0.1, 2)).toBeCloseTo(210, 0.01);
    });

    test('Juros compostos com valor negativo → lança erro', () => {
        expect(() => jurosCompostos(1000, -0.1, 2)).toThrow("Valores não podem ser negativos.");
    });

    test('Compostos são sempre maiores ou iguais aos simples (para tempo > 1)', () => {
        const capital = 1000;
        const taxa = 0.05;
        const tempo = 3;
        const { jurosS, jurosC } = compararJuros(capital, taxa, tempo);
        expect(jurosC).toBeGreaterThanOrEqual(jurosS);
    });

    test('compararJuros() retorna objeto com as 3 propriedades corretas', () => {
        const resultado = compararJuros(1000, 0.05, 3);
        expect(resultado).toHaveProperty('jurosS');
        expect(resultado).toHaveProperty('jurosC');
        expect(resultado).toHaveProperty('diferenca');
    });

    test('diferenca em compararJuros() é sempre >= 0', () => {
        const resultado = compararJuros(1000, 0.05, 3);
        expect(resultado.diferenca).toBeGreaterThanOrEqual(0);
    });
});