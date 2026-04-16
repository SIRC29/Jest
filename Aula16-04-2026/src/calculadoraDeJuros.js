function jurosSimples(capital, taxa, tempo) {
  // Validação: não permitir valores negativos
  if (capital < 0 || taxa < 0 || tempo < 0) {
    throw new Error("Valores não podem ser negativos.");
  }

  return capital * taxa * tempo;
}

function jurosCompostos(capital, taxa, tempo) {
    if (capital < 0 || taxa < 0 || tempo < 0) {
        throw new Error("Valores não podem ser negativos.");
    }
    return capital * (1 + taxa) **tempo - capital;
}

function compararJuros(capital, taxa, tempo) {
    const jurosS = jurosSimples(capital, taxa, tempo);
    const jurosC = jurosCompostos(capital, taxa, tempo);
    const diferenca = jurosC - jurosS;

    return { jurosS, jurosC, diferenca };
}

module.exports = { jurosSimples, jurosCompostos, compararJuros };