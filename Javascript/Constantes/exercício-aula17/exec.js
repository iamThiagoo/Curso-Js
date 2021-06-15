const nome = "Thiago";
const sobrenome = "Ferreira";
const idade = 17;
const peso = 65;
const alturaEmCm = 170;

let indiceMassaCorporal;
indiceMassaCorporal = peso / (alturaEmCm * alturaEmCm);
let imcNumeroInteiro = indiceMassaCorporal * 10000;

let anoDeNascimento = 2021 - 18; // Por quê 18 se ele tem 17 anos? Ele irá fazer 18 ainda

console.log(nome, sobrenome + " possui " + idade + " anos, possui " + peso + "kg. Sua altura é " + alturaEmCm + "cm e seu IMC é de " + imcNumeroInteiro.toFixed(2)); // Usei o to.Fixed para fixar apenas 2 casas após a virgula.
console.log("O " +nome + " nasceu em" + anoDeNascimento);

// Podemos usar ao montar uma frase um TEMPLATE DE STRING, vou fazer o mesmo exemplo de cima porém usando o template.
//console.log(`${nome} ${sobrenome} possui ${idade} anos, possui ${peso} kg. Sua altura é ${alturaEmCm}cm e seu IMC é de ${imcNumeroInteiro.toFixed(2)}`);
// Ela é melhor pois você não precisa calcular o espaço entre as strings, é muito mais legível.