function listarNomes(alunos){
    return alunos.map(a => a.nome);
}

function gerarCertificado(nome, nomeCurso){
    return `Certificamos que ${nome} Concluiu o curso de ${nomeCurso}.`;
}

module.exports = {listarNomes, gerarCertificado};