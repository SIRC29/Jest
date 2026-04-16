function criarFila() {
  return {
    itens: [],
    get tamanho() {
      return this.itens.length;
    }
  };
}

function entrar(fila, nome){
    if(fila.includes(nome)){
        throw new Error("O nome já está na fila.");
    }
    fila.push(nome);
    return fila;
}

function atender(fila){
    if(fila.length === 0){
        throw new Error("A fila está vazia.");
    }
    return fila.shift();
}

function consultarProximo(fila){
    if(fila.length === 0){
        return null;
    }
    return fila[0];
}

module.exports = { criarFila, entrar, atender, consultarProximo };