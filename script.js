const readline = require('readline');

// Cria uma interface de readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let contador = 0;
let avaliacoesRuim = 0;

const perguntar = () => {
  if (contador < 4) { // Verifica se já foram coletadas as avaliações de 4 usuários
    rl.question('Qual a sua avaliação para a série "Stranger Things"? (ruim, bom, excelente): ', (avaliacao) => {
      avaliacao = avaliacao.toLowerCase(); // Converte a avaliação para minúsculas para facilitar a comparação
      if (avaliacao === 'ruim' || avaliacao === 'bom' || avaliacao === 'excelente') { // Verifica se é uma avaliação válida
        if (avaliacao === 'ruim') {
          avaliacoesRuim++; // Incrementa o contador de avaliações "ruim"
        }
        contador++; // Incrementa o contador de usuários
        perguntar(); // Faz a próxima pergunta
      } else {
        console.log("Avaliação inválida. Por favor, digite 'ruim', 'bom' ou 'excelente'.");
        perguntar(); // Re-faz a pergunta para o mesmo usuário
      }
    });
  } else {
    // Após coletar as avaliações de 4 usuários, exibe o resultado e encerra o programa
    console.log(`Número de pessoas que classificaram a série como ruim: ${avaliacoesRuim}`);
    rl.close();
  }
};

perguntar(); // Inicia o processo de perguntas