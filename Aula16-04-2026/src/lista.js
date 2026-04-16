function filtrarAtivos(itens){
    return itens.filter(i => i.ativo);
}

function truncar(texto, limite){
    if(texto.length <= limite){
        return texto;
    }
    return texto.slice(0, limite) + '...';
}

module.exports = {
    filtrarAtivos,
    truncar
};