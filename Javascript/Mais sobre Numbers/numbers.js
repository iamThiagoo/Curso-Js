let numero = 1; //number
let numero2 = 10.5; // number

// A gente já viu como faz para passar uma string para número, certo? Mas e se eu quiser passar um number para string, o que eu faço?
// Bem, para isso temos a função .toString() que pega o seu number ou outro tipo de variável e transforma ele em uma string.

console.log(numero.toString() + numero2); // Uma coisa a se observar é que você está mudando ele temporariamente, apenas para fazer essa operação
// Se você quiser checkar é só usar o atributo typeof no console.log que irá retornar um number
// Caso eu queira mudar ela para uma string fora dessa operação, fazemos:
numero = numero.toString();
console.log(typeof numero); // Agora mudou para uma string

// Caso eu queira uma representação binária do número, é só colocar dentro de .toString() o número 2, deixando ele assim: .toString(2)
console.log(numero2.toString(2)); // Retornará 1010.1 que é o número 10.5 em binário;

// Tenho um número muito grande. Como eu poderia diminuí-lo?
// Tem uma função em JavaScript que te ajuda com isso, ele é chamado de .toFixed() e dentro do parênteses dele é onde nós definimos quantas casas
// que terá após a vírgula
let numero3 = 15.56444195841;
console.log(numero3.toFixed(2)); // Duas casas após a vírgula

//Caso eu queira saber se um número é inteiro ou não, podemos usar a função isInteger() e ele nós retornará: true ou false.
let numero4 = 10;
console.log(Number.isInteger(numero4)); //True
numero4 = 10.25;
console.log(Number.isInteger(numero4)); // False, pois eu redeclarei a variável;


//Caso a gente queira saber se o variável é ou não um NaN;
let numero5 = 10;
let temp = numero5 * "Ola";
console.log(Number.isNaN(temp));// True, se fosse um número aí viria um false para a gente;


// IEEE 754-2008: O JavaScript usa essa precisão com números com casas decimais, mas rola algo bem estranho ao fazer 0.7 + 0.1
let num1 = 0.7;
let num2 = 0.1; 

num1 += num2 // num1 = num1 + num2;
num1 += num2
num1 += num2

// num1 = num1.toFixed(2);
//console.log(num1); // Pela lógica seria 1 mas pelo JS é 0.999999, com o .toFixed(2) arrumamos ele aos nosso olhos tranformando ele em inteiro
// console.log(Number.isInteger(num1)); // Mas se a gente for verificar se o JS considera ele um inteiro, nós retorna FALSE

// para resolver esse problema, devemos usar o to.Fixed(2) com o parseFloat, ai o JS o "considera" como inteiro, pois a gente o arredonda com o .toFixed()
// e com o parseFloat(), nós tiramos as suas duas casas decimais

num1 = parseFloat(num1.toFixed(2));
console.log(Number.isInteger(num1)); // Nos retorna true;