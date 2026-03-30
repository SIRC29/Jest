const { validarEmail, criarUsuario } = require('../src/usuario');

//TESTE UNITÁRIOS
describe('validarEmail', () => {
    test('deve validar um email válido', () => {
        expect(validarEmail('ana@gmail.com')).toBeTruthy();
    });

    test('não deve validar um email inválido', () => {
        expect(validarEmail('ana-gamil.com')).toBeFalsy();
    });
});

//TESTES DE INTEGRAÇÃO
describe('criarUsuario (integração)', () => {
    test('deve criar um usuário com email válido', () => {
        const usuario = criarUsuario('Ana', 'ana@gmail.com');
        expect(usuario.nome).toBe('Ana');
        expect(usuario.ativo).toBe(true);
        expect(usuario.email).toContain('@');
        expect(usuario.id).toBeDefined();
        expect(usuario.criadoEm).toBeDefined();
    })
    test('deve lançar erro ao criar usuário com email inválido', () => {
        expect(() => criarUsuario('Bob', 'bobegmailcom')).toThrow("Email inválido");
    });
});
