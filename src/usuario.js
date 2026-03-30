function validarEmail(email) {
    return email.includes('@') && email.includes('.');
}
function criarUsuario(nome, email) {
    if (!validarEmail(email)) {
        throw new Error("Email inválido");
    }
    return {
        id: Math.floor(Math.random() * 1000),
        nome,
        email,
        ativo: true,
        criadoEm: new Date().toISOString()
    }
};
module.exports = {
    validarEmail,
    criarUsuario
};