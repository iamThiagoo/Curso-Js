//O objeto Math tem diversas funções relacionadas a matemática que acaba ajudando demais

let num1 = 15.84448;
/* let num2 = Math.floor(num1); // Estamos arredondando para baixo;
console.log(num2); // Retornará 15; */
    /*let num2 = Math.ceil(num1); // Estamos arredondando para cima
    console.log(num2); // Retornando assim 16;*/
        /*let num2 = Math.round(num1); // Arredondando para o número mais próximo, nesse caso ele vai arredondar para 16;
            console.log(num2); // Retorna 16;*/

console.log(Math.max(1, 1000,1400,75000.-100,3,26,99741,14050,-400000)); // o Math.max() pega o maior número entre uma cadeia de números; Nesse caso é o 99741

console.log(Math.min(1, 1000,1400,75000.-100,3,26,99741,14050,-400000)); // Quase a mesma coisa que o Math.max() porém ao contrário. O Math.min() escolhe o menor número da cadeia, nesse caso é o -400000;

console.log(Math.random()); // Gera um número aleatório entre 0 e 0.999999;
//EX: Quero um número entre 10 e 5;
const numeroAleatório = Math.round(Math.random() * (10 - 5) + 5);
console.log((numeroAleatório));

console.log(Math.PI); // Valor de PI;

console.log(Math.pow(2 , 10)); // 2 elevado a 10
//Porém é mais simples usar **

//Para descobrir a raiz quadrada 
num2 = 81;
console.log(num2 ** 0.5); // Retorna 9;


