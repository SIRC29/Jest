const {listarNomes, gerarCertificado} = require('../src/turma');

describe ('Testes da Turma', () => {

//Testes de listarNomes

    test('Listar nomes contém aluno cadastrado', () => {
        const alunos = [
            {nome: 'Cristiano'},
            {nome: 'Maria'},
            {nome: 'João'}
        ]
    expect (listarNomes(alunos)).toContain('Cristiano'); // se não tem .not.toContain, ele espera que tenha o nome Cristiano na lista de nomes
});
    test('Listar nomes NÃO contém aluno não cadastrado', () => {
        const alunos = [
            {nome: 'Roberto'},
        ]
    expect (listarNomes(alunos)).not.toContain('Cristiano'); // se tem .not.toContain, ele espera que NÃO tenha o nome Cristiano na lista de nomes
});


// Testes de gerarCertificado

    test('certificado contém nome do aluno', () => {
        const cert = gerarCertificado('Cristiano', 'Desenvolvimento de Sistemas');
        expect(cert).toContain('Cristiano');
    });

    test('certificado contém nome do curso', () => {
        const cert = gerarCertificado ('Cristiano', 'Desenvolvimento de Sistemas');
        expect(cert).toContain('Desenvolvimento de Sistemas');
    });

    test('teste de toContainEqual', () => {
        const itemParaBuscar = {id: 3, nome: 'garrafa'};
        const carrinho = [
            {id: 1, nome: 'mouse'},
            {id: 2, nome: 'teclado'},
            {id: 3, nome: 'garrafa'}
        ]
        expect(carrinho).toContainEqual(itemParaBuscar); // toContainEqual é usado para comparar objetos, ele verifica se o objeto itemParaBuscar está presente no array carrinho, comparando as propriedades e valores dos objetos. Se encontrar um objeto no array que seja igual ao itemParaBuscar, o teste passará. Caso contrário, o teste falhará.
    })
});