/*As mesmas regras de variáveis tbm se aplicam para as constantes, são elas:

 - Não podemos criar constantes com palavras reservadas;
 - Não pode começar com números as constantes;
 - Não podem conter traços ou espaços;
 - Utilizamos o camelCase;
 - As constantes são case-sensitive;
 - Não se pode alterar o valor de uma constante, logo que o valor dela será o mesmo até o final do código;
*/

// Para criar uma constante no JavaScript, escrevemos com CONST
const nome = "Thiaguinho";
console.log(nome);
// Se tentar mudar ela, dará erro de sintaxe no código

// Sempre colocar o valor da constante, pois se você apenas inicializar ela como: const nome; dará erro de sintaxe no seu código.

/* Outra coisa, você consegue atribuir uma const em uma outra const por exemplo
const primeiroNumero = 40;
const segundoNumero = 5;
const resultado = primeiroNumero * segundoNumero;
console.log("A multiplicação entre o primeiro número e o segundo é igual a " + resultado);
const resultadoDuplicado = resultado * 2;
*/

//Para descobrir o tipo de uma variável ou const, usamos o typeof dentro do console
const numeroAleatório =  20; // Se eu colocar aspas, esse number irá virar uma string isso faz uma enorme diferença;
console.log(typeof(numeroAleatório)); // Não é necessário usar parenteses, poderia ser apenas console.log(typeof numeroAleatório); 

// Por quê faz diferença se é number ou string?
// Muito simples te liga no código: let numero = 10;
//                                  let numero2 = 5;
//                                  console.log(numero + numero2);
// O que aparecerá no console? Aparecerá o número 15, certo?
// Porém se a gente acrescentar aspas na nossa primeira variável, apelidada como numero e deixá-la assim: let numero = "10";
// E colocarmos no console, acabará retornando para a gente o número 105, pois o console interpretará a nossa variavel numero sendo
// uma string e assim concatenará como a variavel numero2, resultando assim em 105;
// Quer testa?
    let numero = "10";
    let numero2 = 5;
    console.log(numero + numero2);