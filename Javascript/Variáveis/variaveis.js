let nome = "Thiago"; // Let é mais atual do que Var
let linguagem = "JavaScript";

console.log( nome, "nasceu em 2003.");
console.log( nome, "é filho de Norberto e Cláudia.");
console.log( nome, "vai se formar no Ensino Médio em 2021.");
console.log("Em Junho de 2021," , nome , "está aprendendo", linguagem);

/* Variável indefinida
let idade; //está criando uma variável porém não está declarando ela
console.log(idade); // se rodar, dará Undefined
*/

/* Mudando de variável ao longo do código
EX:
    let idade; // iniciei a variavel
    idade = 17;
    console.log(idade); // aparecerá no console o número 17;
    idade = 25; // Alteração da variável;
    console.log(idade); // aparecerá no console o número 25;

    //// Uma coisa que você não pode fazer é redeclarar de novo a variável por exemplo:
    fazer de novo let idade = 25; pois gerará um erro de sintaxe no nosso código
*/


// Regrinhas:
// Não podemos criar variáveis com palavras reservadas
/* Ex: let let = blabla
        let console = blabla
        let if = blabla

        Se executar, dará erro de sintaxe.
*/

// Variáveis precisam ter nome significativo;
// Não podemos criar uma variável começando com número;

/*Não podem conter traços ou espaços;
EX: let nome-Cliente = "Thiago";
*/

/* As variaveis são Case-sensitive: O que isso quer dizer? Quer dizer que qualquer letrinha acaba fazendo diferença
    por exemplo: declarei uma variavel : let nome = "Thiago";
    e no console começar o nome dela em maiscúla, fará diferença e provavelmente dará erro.
    exemplo de erro: console.log(Nome);
*/

/*
    Caso precise de mais de uma palavra na variável, urlize o camelCase
    EX: let nomeCompletoDoCliente = "Mario";
*/