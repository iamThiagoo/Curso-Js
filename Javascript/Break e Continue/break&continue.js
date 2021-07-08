// Break e Continue são usados dentro do laço e eles funcionam em todos os laços: FOR (CLASSICÃO, IN, OF) e WHILE/DO WHILE.


// USANDO COM FOR IN:
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i of numeros){
    if (i === 2 || i === 8) {
        continue;
    } // Irá pular 2 e 8;

    console.log(i); 
}

for (i of numeros){
    if (i === 5 ){ 
        break; 
    } // Se ele achar o número 5, ele vai sair do laço de repetição sem ter que carregar o resto dele, e isso é muito importante.

    console.log(i);
}

// Caso eu queirar PULAR algum número/interação do laço, uso o CONTINUE.
// Caso eu queira quebrar o meu laço quando chegar em tal número e sair dele, uso o BREAK.
    // Os dois tem que estar antes da chamada da nossa ação.

    // DIFERENÇA ENTRE ELES:
    // CONTINUE VAI ACHAR O ELEMENTO, VAI PULAR ELE E CONTINUARÁ RODANDO O LAÇO
    // BREAK VAI ACHAR O ELEMENTO E VAI SAIR DO LAÇO DE REPETIÇÃO, NÃO TENDO QUE CARREGAR TODO ELE.


// USANDO WHILE
let index = 0; // variável de controle
while (index < numeros.length) {
    let numero = numeros[index];

    if (numero === 2 ){
        console.log(`Pulei o número 2`);
        index++;        // LEMBRE SEMPRE DE INCREMENTAR ANTES DO CONTINUE E BREAK PARA NÃO TER RISCO DE CAIR EM UM LOOP INFINITO
        continue;
    }
    
    console.log(numero);

    if (numero === 6){
        console.log(`6 encontrado... saindo`);
        index++;        // LEMBRE SEMPRE DE INCREMENTAR ANTES DO CONTINUE E BREAK PARA NÃO TER RISCO DE CAIR EM UM LOOP INFINITE
        break;
    }

    index++;
};

// USANDO DO WHILE: SÓ MUDA A ORDEM
do {
    let numero = numeros[index];

    if (numero === 2 ){
        console.log(`Pulei o número 2`);
        index++;        // LEMBRE SEMPRE DE INCREMENTAR ANTES DO CONTINUE E BREAK PARA NÃO TER RISCO DE CAIR EM UM LOOP INFINITO
        continue;
    }
    
    console.log(numero);

    if (numero === 6){
        console.log(`6 encontrado... saindo`);
        index++;        // LEMBRE SEMPRE DE INCREMENTAR ANTES DO CONTINUE E BREAK PARA NÃO TER RISCO DE CAIR EM UM LOOP INFINITE
        break;
    }

    index++;
} while (index < numeros.length);