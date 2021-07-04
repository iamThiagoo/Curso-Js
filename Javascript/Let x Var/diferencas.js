/* 1° DIFERENÇA
Pois bem, se lembra que com o LET não podemos redeclarar uma variável, exemplo: let nome = "Thiago"; se quisermos mudar essa variável teremos que fazer o seguinte: let nome = "Thiago";
                                                                                let nome = "Paulo";                                                                 nome = "Paulo";

Já com VAR nós podemos redeclarar ela, deixando ela assim: var nome = "Thiago";
                                                        var nome = "Paulo";

Esse problema com o var foi arrumado no ECMAScript 2015 (ES6);

Caso você faça: nome = "Thiago"; sem especificar se é let, var ou const pode dar erro em outras variáveis no seu sistema, então não faça.

UTILIZAR SEMPRE: let e const
*/


/* 2° DIFERENÇA

A segunda diferença entre VAR e LET é que o LET tem escopo de bloco {}; Mas como assim: */
    let verdadeira = true;
    
    let nome = `Thiago`; // Nós estamos criando a variável
    if (verdadeira){
        let nome = `Ferreira`; // E aqui seria como se nós tivessemos criando uma outra variável
        console.log(nome);

        if(verdadeira){
            let nome = `Tudo bem?`; // Outra variável, tudo pertencendo ao seu bloco
            console.log(nome);
        }
    }
    console.log(nome); // Se chamarmos o console aqui, veremos a volta do nome Thiago.

    // Se por algum acaso não tiver a variável declarada dentro daquele bloco específico, ela irá ir para o outro bloco, caso não tenha, ela irá procurar no escopo global

//Se você quiser fazer a mesma coisa que o let só que com o VAR, você não vai estar criando uma função dentro do bloco e sim redeclarando ele. 
    let verdadeira = true;
        var nome = `Thiago`; // Criando a variável
        if (verdadeira){
            var nome = `Ferreira`; // Redeclarando a variável
            console.log(nome);

            if(verdadeira){
                var nome = `Tudo bem?`; // Redeclarando a variável
                console.log(nome);
            }
        }
    // Se der um console.log();
    console.log(nome); // Irá aparecer `Tudo bem?` e não Thiago como a gente viu no exemplo do let.


// ENQUANTO O LET TEM O ESCOPO DE BLOCO, O VAR TEM O ESCOPO DA FUNÇÃO, OU SEJA, A ÚNICA COISA QUE O VAR VAI RESPEITAR É A FUNCTION. POIS SE A SUA VARIÁVEL NÃO
// TIVER DENTRO DE UMA FUNÇÃO, VOCÊ ESTARÁ SEMPRE REDECLARANDO ELA.

/* 3° DIFERENÇA: HOSTING

Quando declaramos uma variável depois de pedir para o console executar aquela variável, a gente espera que nos retorne um erro. E isso acontece com o let, mas com o var não.
O que vai acontecer com o var é que o JS vai entregá-lo como undefined pois seria como se ele levasse a nossa variável lá em cima do nosso código e só iniciasse ela.
EX: console.log(numeroDeTelefone);
    
    var numeroDeTelefone = 555555555; // Ele identifica a nossa variável mas retorna undefined no console coisa que não acontece com o LET pois retorna no console "(nome da variável) is not defined" que é o certo a se fazer.
*/