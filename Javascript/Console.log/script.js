// Aula 8 do curso de Luiz Otávio Miranda sobre console.log

// O console é importante para debbugar um código.

// Em JavaScript, não é obrigatório colocar ";" no final mas é sempre bom para se acostumar, pois tem linguagens muito rígidas que exigem no final

// Sempre fechar com o tipo que você escolheu
// Existe 3 tipos: aspas duplas, aspas simples e crase
console.log("Thiago Ferreira");
console.log('Thiago Ferreira');
console.log(`Thiago Ferreira`);

// CERTO
console.log("Meu apelido é 'Thiaguinho'"); // Aparecerá no console o seguinte: Meu apelido é 'Thiaguinho'
console.log('Meu apelido é ""Thiaguinho'); // Aparecerá no console o seguinte: Meu apelido é "Thiaguinho"
console.log(`"Meu apelido é" 'Thiaguinho'`); // Dá certo pois não confunde o engine do JavaScript, aparecerá no console: "Meu apelido é" 'Thiaguinho' , exemplo estranho mas só para mostrar que é possível ser feito

// ERRADO
// console.log('Meu apelido é 'Thiaguinho''); // Irá dar erro de sintaxe pois a engine do JavaScript não entende que você quer usar aspas na própria frase, ele entende que você está fechando no -Meu apelido é-. 
// console.log("Meu apelido é "Thiaguinho");


/*No caso de número dentro do console */
// Se coloca de forma literal o número dentro do console por exemplo:
console.log(123 , 15.889514); 
