function funcao(){
    console.log(arguments);
}

funcao(1, 5, 10, 55, "Olá");

/* Quando eu defino uma funcao sem nenhum parâmetro porém quando a chamo introduzo diversos nele, não dará um erro na tela, apenas rodará aquilo que estiver na função.
Mas tem uma maneira da gente ver o que foi escrito na chamada do parâmetro com a variável "arguments", quando a introduzimos veremos tudo que foi escrito em um objeto.
Podemos inclusive colocar indices dentro do arguments, como por exemplo: arguments[2] = 10
*/


function soma(a = 0, b = 0, c = 0){
    console.log(a + b);
}

soma(10, 20); // O que estou falando nesse exemplo?
// Estamos mandando 2 valor para os nosso parâmetros (parâmetros podem ser definidos com variáveis que iram receber um valor quando a função for chamada)
// Caso não exista um A, B ou C, quero que eles assumam o valor de 0 SENÃO iram receber o valor que foi enviado para eles.
// A unica maneira de pular o B para que ele possa receber o valor padrão dele  INSERINDO undefined na chamada


// Podemos também colocar objetos e arrays dentro do nosso parâmetro
function pessoa({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}

let pessoa1 = {nome: "Thiago", sobrenome: "Ferreira", idade: 17};
pessoa(pessoa1);

// E também podemos utilizar o REST operator
function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
        acumulador += numero
    }
    console.log(acumulador);
}

conta("+", 0, 20, 50, 60, 14, 10);