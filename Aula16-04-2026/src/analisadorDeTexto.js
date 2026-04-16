function contarPalavras(texto) {
  // Verifica se é vazio, null, undefined ou só espaços
  if (!texto || texto.trim() === "") {
    return 0;
  }
  // Remove espaços extras e divide pelas palavras
  const palavras = texto.trim().split(/\s+/);

  return palavras.length;
}

function contarCaracteres(texto) {
  // Se for null/undefined ou vazio
  if (!texto) return 0;

  // Remove todos os espaços (inclui múltiplos e quebras de linha)
  const semEspacos = texto.replace(/\s/g, "");

  return semEspacos.length;
}


function palavraMaisFrequente(texto) {
  // Validação
  if (!texto || texto.trim() === "") {
    throw new Error("Texto não pode ser vazio.");
  }

  // Normaliza: minúsculo + quebra em palavras
  const palavras = texto
    .toLowerCase()
    .trim()
    .split(/\s+/);

  const frequencia = {};
  let maisFrequente = "";
  let max = 0;

  for (const palavra of palavras) {
    frequencia[palavra] = (frequencia[palavra] || 0) + 1;

    if (frequencia[palavra] > max) {
      max = frequencia[palavra];
      maisFrequente = palavra;
    }
  }

  return maisFrequente;
}

function analisarTexto(texto) {
    return{
        totalPalavras: contarPalavras(texto),
        totalCaracteres: contarCaracteres(texto),
        palavraMaisFrequente: palavraMaisFrequente(texto)
    }
}

module.exports = {contarPalavras, contarCaracteres, palavraMaisFrequente, analisarTexto};