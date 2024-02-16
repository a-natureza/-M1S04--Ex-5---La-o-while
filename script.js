let contador = 0;
let avaliacoesRuim = 0;

while (contador < 4) {
    let avaliacao = prompt('Qual a sua avaliação para a série "Stranger Things"? (ruim, bom, excelente)');
    
    // Normalizar a entrada para evitar problemas de case sensitivity
    avaliacao = avaliacao.toLowerCase();
    
    if (avaliacao === "ruim" || avaliacao === "bom" || avaliacao === "excelente") {
        if (avaliacao === "ruim") {
            avaliacoesRuim++;
        }
        contador++;
    } else {
        alert("Avaliação inválida. Por favor, digite 'ruim', 'bom' ou 'excelente'.");
    }
}

console.log("Número de pessoas que classificaram a série como ruim:", avaliacoesRuim);
