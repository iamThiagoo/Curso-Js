/* 
Operadores Lógicos são:   && -> AND -> E // Todas precisam ser verdadeiras
                          || -> OR -> OU
                          ! -> NOT -> NÃO
*/

console.log(10 > 5 && 6 >=5 && 5 === 5); // No && todas as condições precisam dar true, se alguma dar false, toda a expressão irá retornar false. Nesse exemplo
// todas as operações retornaram true, logo a nossa expressão retorna true;

console.log( 10 > 5 || 10 > 15 || true === false); // No caso do || pelo menos uma das expressões precisam entregar true para que toda a expressão retorne verdadeira. No nosso 
// exemplo 10 é maior ou igual a 5? Certo, mas 10 é maior que 15? False. Mas não importa o último resultado porque nós já conseguimos o nosso true, e com ela já 
// é o suficiente para retornar true na nossa operação


console.log(!true); // O de negação pelo nome nega algo. No nosso exemplo estamos negando o true logo nos retornará false.
console.log(!false); // Estamos negando o false logo é true;
    // Mas podemos usar duas exclamações (!!) em uma expressão mas não é muito utilizado pois irá retornar o que for escrito
        // console.log(!!true); // O true foi negado, passa a ser false mas aí o false é negado e volta a ser true;
        // console.log(!!false); // Mesma coisa, o false é negado, vira true e o true é negado e volta a ser false na expressão


// Exemplo usando operadores de lógica:
// Nesse exemplo iremos usar os operadores lógicos para saber se o usuário irá logar ou não, isso o login irá nos informar;

let usuario = "ThiagoFer12";
let senha = 123456;

let login = usuario === "ThiagoFer12" && senha === 123456; // Precisamos de todos verdadeiros para ele logar, se um for falso, ele não logará;
// login = usuario === "ThiagoFer12" || senha === 1234; // Irá logar pois precisa apenas de um verdadeiro para entrar no sistema;
console.log(login); 

