// Escreva uma funcão chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
// Retorne true se a imagem estiver no modo imagem

const ePaisagem = (largura, altura) => largura > altura; // Já que nós queremos que volte apenas true ou false, avisando se está ou não no modo paisagem, podemos deixar assim que irá retornar automáticamente.
console.log(ePaisagem(1920, 1080));