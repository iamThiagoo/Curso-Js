// Se lembra no início do curso com a atividade das letras? Onde tinhamos 3 variáveis declaradas como A,B,C com seus respectivos valores e tinhamos que trocar eles.
// Onde o teriamos que deixar: A=B , B=C ,C=A, onde o professor disse que tinha uma forma mais simples de fazer essas mudança fazendo uso dos arrays sem ter que criar uma
// nova variável para segurar um dos valores. Então, essa aula a gente vai conhecer mais sobre essa maneira fácil de desestruturação com o uso de arrays.

// Começando com a estruturação da nossa variável array:

const [a,b,c] = [1, 2, 3]; // Cada letra é uma variável e cada número está organizado conforme sua letra.
console.log(a, b, c); // Retorna os números

const [nome1, nome2, nome3] = [`Thiago`, `Mario`, `Joao`];
console.log(nome1); // E retorna o nome Thiago

// O que está do lado esquerdo do sinal de igual é a "ATRIBUIÇÃO VIA DESESTRUTURAÇÃO" e o que está do lado direito, respectivamente é um ARRAY.
// Por que ele é chamado assim? Pois eu estou atribuindo para cada índice de array um valor para nossa variável.

// Também poderíamos muito bem fazer dessa forma:
const doces = ["Pé de moleque", "Marshmallow", "Algodão Doce", "Sagu"];
[A, B, C, D] = doces;
console.log(A, B, C, D); // Que vai funcionar mesmo assim.


// No exemplo abaixo, nós também podemos ter um array com bastante indíces porém apenas pegar os dados necessários sem ter que criar diversas variáveis em diversas linhas, TUDO para deixar o nosso código mais clean.
const numeros = [5000,8000,3000,20000,15000,4000];
const [primeiroMes, segundoMes, ...resto]= numeros; // Os três pontinhos significam que os valores que sobraram do array vão ir TUDO para a variável "resto", esse resto no JavaScript é chamado de "REST OPERATOR";
console.log(primeiroMes, segundoMes); // Retornará o índice 0 e 1.

// Caso eu queira pular valores é só fazer:
const cadeiaDeNumeros = [10,20,30,40,50,60,70,80,90,100];
let [primeiroNum, , terceiroNum, , quintoNum, , setimoNum, ,nonoNum]= cadeiaDeNumeros; // Só colocar um espaço entre os arrays separados por vírgulas que ele irá pular.
console.log(primeiroNum, terceiroNum, quintoNum, setimoNum, nonoNum);



// Tem uma forma mais complexa de se fazer a atribuição via desestruturação:
const cadeiaDeNumeros2 = [
    [1, 2, 3],
    [4, 5, 6], // Parece complexo mas não é tanto
    [7, 8, 9]  // Se você for ver bem para os arrays, em linhas vamos ter esse esquema:
               // Cada conchete é um índice:    0          1          2
               // E dentro temos outros:     0  1  2    0  1  2    0  1  2
               // const cadeiaDeNumeros2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
];

// Caso eu queira acessar o número 6 do meu array eu teria que fazer:
console.log(cadeiaDeNumeros2[1][2]);
//                           1: representa o primeiro índice, no caso é selecionado o índice [4, 5, 6];
//                           2: representa o segundo índice de dentro do índice que a gente recém selecionou, no caso 6.


// Beleza mas a "complexidade" não está em fazer o Array(que já é um pouquinho complexo de entender) mas sim em fazer a tal da atribuição.
// Agora eu quro jogar o meu número 6 dentro de uma variável, como fazemos?
    // Primeira coisa a se observar é que temos que pular um índice para ir até o índice que está o índice que nós queremos pegar kkk, que é o [4, 5, 6];
    // Segunda coisa é pular os dois índices que nós temos, sendo o 4 e o 5;
    let [,[,,seis]] = cadeiaDeNumeros2;
    console.log(seis);
    // Entendeu? Nós abrimos o array inteiro com todos os índices.
    // Depois disso nós pulamos um índice com uma vírgula, chegando no índice que queríamos que era o primeiro.
    // Logo após isso nós abrimos os conchetes do array que queríamos e colocamos duas vírgulas para pular os números 4 e 5.
    // Chegando no número 6, nós declaramos a variável com o seu nome "seis" e é isso.

        // Mas isso é só para complicar a vida mesmo, mas é bom saber disso para caso apareça, não ficar perdido que nem cego em tiroteio.

