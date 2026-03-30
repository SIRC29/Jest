let produtos = [];

function adicionarProduto(nome, quantidade){
    produtos.push({ nome, quantidade });
}

function buscarProduto(nome){
    return produtos.find((p) => p.nome === nome) || null;
}
function resetEstoque(){
    produtos = [];
}
module.exports = {
    buscarProduto,
    resetEstoque,
    adicionarProduto
};