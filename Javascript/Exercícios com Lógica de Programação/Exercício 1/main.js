// Escreva uma funcão que recebe 2 números e retorne o maior deles

function numeros (primeiro, segundo){
    if (primeiro > segundo) {
        return `O primeiro número (${primeiro}) é maior que o segundo (${segundo})`;
    }
    else if (primeiro === segundo) {
        return `Os dois são idênticos!`;
    }
    else {
        return `O segundo número (${segundo}) é maior que o primeiro (${primeiro})`;
    }
}

console.log(numeros(25,51));

// Outros jeitos de fazer:

// 1: Operação Ternário
function numeros (primeiro, segundo){
    return primeiro > segundo ? `O primeiro número (${primeiro}) é maior que o segundo (${segundo})` : primeiro === segundo ? `Os dois são idênticos!` : `O segundo número (${segundo}) é maior que o primeiro (${primeiro})`;
}
console.log(numeros(2,6));

// 2: Arrow Function
const maiorNumero = (primeiro, segundo) => {
    return primeiro > segundo ? `O primeiro número (${primeiro}) é maior.`: primeiro === segundo ? `Os dois são idênticos!` : `O segundo número (${segundo}) é maior.`;
}
console.log(maiorNumero(4,3)); 
    
    // Porém é aquela coisa, se a função tem APENAS UMA LINHA podemos tirar as chaves dela e deixa na mesma linha, tipo assim:
    const maiorNumero2 = (primeiro, segundo) => primeiro > segundo ? `O primeiro número (${primeiro}) é maior.`: primeiro === segundo ? `Os dois são idênticos!` : `O segundo número (${segundo}) é maior.`;
    console.log(maiorNumero2(5,5));


// O que era um código com 12 linhas, virou um código de apenas 2 linhas.
