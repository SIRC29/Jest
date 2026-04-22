let usuarios = {};
let tentativas = {};

function cadastrar(usuario, senha) {
  if (usuarios[usuario]) {
    throw new Error('Usuário já existe');
  }

  if (senha.length < 6) {
    throw new Error('Senha muito curta');
  }

  usuarios[usuario] = senha;
  tentativas[usuario] = 0;
}

function login(usuario, senha) {
  if (!usuarios[usuario]) {
    return false;
  }

  if (tentativas[usuario] >= 3) {
    throw new Error('Conta bloqueada');
  }

  if (usuarios[usuario] === senha) {
    tentativas[usuario] = 0; // reseta após sucesso
    return true;
  } else {
    tentativas[usuario]++;

    if (tentativas[usuario] >= 3) {
      throw new Error('Conta bloqueada');
    }

    return false;
  }
}

function resetar() {
  usuarios = {};
  tentativas = {};
}

module.exports = { cadastrar, login, resetar };