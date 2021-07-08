// Geralmente quando usamos For nós temos uma noção de qual é tamanho do nosso objeto e quantas vezes ele será rodado, agora com While ou Do While nós não sabemos quantas vezes
// o laço vai ser repetido até chegar ao seu fim.

// No while e do while acontecerá a mesma coisa que com o for: iremos criar uma variável de controle, abriremos o nosso while e dentro dele criaremos
// uma condição, se retornar true, ele irá repetir aquele laço até retornar um false que é quando ele saíra e continuará a leitura do código.

let i = 0; // A variável de controle é diferente do que no FOR e precisa ser criada fora do WHILE.

while (i <= 10) {
    console.log(i);
    i++;// NÃO ESQUEÇA QUE TEM QUE ATUALIZAR A VARIÁVEL NO FIM DO WHILE.
        // IRMÃOOOO, NAO ESQUECE DISSO SE NÃO VAI EXPLODIR TEU PC, POIS SEMPRE VAI FICAR NO 0 ETERNAMENTE... CRIANDO ASSIM UM LAÇO INFINITO.
}

console.log(`\n`);

// Funcão como exemplo do uso do While:
function random (min, max) {
    const num = Math.random() * ( max - min ) + min;
    return Math.floor(num);
}

const min = 1;
const max = 20;

let numRandom = random( min, max);

while (numRandom !== 6){
    numRandom = random(min, max);
    console.log(numRandom);
}

// Do While: A única diferença entre os dois é que enquanto o while checa primeiro e depois executa (que é de se esperar). O Do while vai
// executar primeiro e depois vai checar com o auxílio do "While" se a condição é TRUE ou FALSE;

do {
    numRandom = random(min,max);
    console.log(numRandom);
} while ( numRandom !== 10); // NO CASO DO "DO WHILE" PRECISA COLOCAR ";" NO FINAL 
