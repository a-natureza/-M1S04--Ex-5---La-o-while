const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let contador = 0;
let avaliacoesRuim = 0;

const perguntar = () => {
    if (contador < 4) {
        readline.question('Qual a sua avaliação para a série "Stranger Things"? (ruim, bom, excelente): ', (avaliacao) => {
            avaliacao = avaliacao.toLowerCase();

            if (avaliacao === "ruim" || avaliacao === "bom" || avaliacao === "excelente") {
                if (avaliacao === "ruim") {
                    avaliacoesRuim++;
                }
                contador++;
                perguntar(); // Chama novamente para a próxima pessoa
            } else {
                console.log("Avaliação inválida. Por favor, digite 'ruim', 'bom' ou 'excelente'.");
                perguntar(); // Repete a pergunta para a mesma pessoa
            }

            if (contador === 4) {
                console.log("Número de pessoas que classificaram a série como ruim:", avaliacoesRuim);
                readline.close();
            }
        });
    }
};

perguntar();
