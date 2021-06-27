/*
Em JavaScript tudo pode ser avaliado como true ou false. Sendo assim, inventaram na linguagem o short que nada mais é um corte na expressão.
Por exemplo: Nos JS temos os operadores lógicos && e ||
Para retornar true no &&, tudo precisa ser verdadeiro na expressão dada
Para retornar true no ||, tem que ter pelo menos uma operação verdadeira na expressão

Sendo assim o short leria:
    console.log(false && true && true); // A ler o false e logo em seguida o nosso &&, já corta e já retorna false;
    console.log(true || false || false); // Ao ler o true na expressão e logo em seguida || já corta e retorna no console o valor booleano
    

Valores FALSY: Em JS temos o valor literal que chamamos de "false" mas temos outros valores que são considerados como false, que chamamos
de FALSY. São eles: 0, '' "" ``, null / undefined e o NaN. Tudo DIFERENTE de false, 0, ''  ""  ``, null/undefined e NaN são considerados 
true em JavaScript.
*/

console.log("Thiago" && "Ferreira"); // Se for verdadeira, retornará o ultimo valor;
console.log("Thiago" && 0 && "Ferreira"); // Deu false pois temos o valor 0 e esse é um dos valores false

// Tudo isso é usado para deixar o seu código mais performático e com a menor utilização de código

// Exemplo usando &&:
function falaOi(){
    return "Oi, tudo bem?"
}
let ireiFalarOi = false;

console.log(ireiFalarOi && falaOi()); // Não irá executar a função pois a variável é false, um fato interessante é que não precisamos escrever
// um valor literal, como visto acima podemos escrever na nossa variável: 0, "" '' ``, null/undefined e NaN e irá retornar falso mas como o valor
// que você escreveu. Por exemplo se você colocar dentro da variável 0 e comparar com algum outro valor usando &&, voltará no console 0.


// Exemplo usando ||: Se lembra para que o OR ( || ) um dos valores tem que ser verdadeiros para retornar true ou o valor verdadeiro.
// Então, quem você acha que vai voltar no nosso console:
        console.log(false || 0 || "" || null || "Thiago" || 0612); // Vai voltar o "Thiago", pois o JS precisa de apenas um valor verdadeiro
        // para retornar true, então ele vai indo da esquerda para a direita até achar um valor verdadeiro: falso...falso... true (parou ai pois ele já achou o que precisava) e não vai precisar continuar verificando
        // a expressão.


// Exemplo de aonde é aplicado essa lógica:
// Tenho o meu site de vários temas: vermelho, azul, verde, rosa, etc. A cor padrão do site é azul mas se o usuário quiser mudar, também pode. Então
    let corEscolhida = null; // Deixaremos "null" pois o usuário não escolheu uma cor
    let corPadrao = corEscolhida || "azul"; // E se ele não escolheu, o tema do site será preto;
    console.log(corPadrao); // Por que deu azul? Pois o usuário não definiu uma cor, já que deixamos a cor escolhida como "null" até o usuário escolher.
    // Lembrando que null é definido como um valor falsy, o JS vai ir pulando até achar um valor verdadeiro. Ele achou o azul, que é uma string true e escolheu ela. Isso acaba
    // sendo muito útil pois para fazer a mesma funcionalidade teria que usar ifs e logo usando mais e mais linhas de código para algo considerado simples.

// Digamos que o usuário escolheu agora a cor tema preto
    corEscolhida = "preto";
    corPadrao = corEscolhida || "azul";
    console.log(corPadrao);  // Nos retornará preto pois a variável "corEscolhida" deixa de ser null (um valor falso) e passa a ser uma string (um valor verdadeiro).
    // Já que a variável "corEscolhida" vem primeiro e é verdadeira, ela é a escolhida;

// Mas e se caso todas forem falsas? Se caso todas forem falsas com &&, retornará a última opção dada como falsa. 
        // Se tivermos: false && null && "" && false && NaN, voltará NaN no console. 