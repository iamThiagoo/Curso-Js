// Tipo de dados primitivos: string, number, undefined, null, boolean, symbol(não vimos até agora).

/*Strings*/
const nome = `Thiago`;
const nome1 = "Rodrigo";
const nome2 = 'Marcelo'; 

/*Numbers*/
const numb1 = 10;
const numb2 = 10.50; 

/*Undefined*/
let aluno; /*Declaração de variável mas nós não inicializamos ela ainda. Não aponta para nenhum lugar na memória. Não posso iniciar uma constante sem valor nela*/

/*Null*/
const corDeFundo = null; /*Também não aponta para nenhum lugar na memória porém a diferença entre null e undefined é que no null você irá específicar que é nulo. Coisa que não rola no undefined pois que especifica esse valor é o próprio sistema do JavaScript*/

/*Booleano*/
const boolean = true; // São valores lógico
const booleano = false;

/*Verificar o tipo de uma variável*/
console.log(typeof /*Nome da variável, nesse caso vai ser:*/ numb1);

// Caso queira ver o tipo da variável e o valor dela é só fazer
console.log(typeof nome1, nome1);