// // DECLARAÇÃO NORMAL
// function falandoOi (){ // Considerada uma declaração mais literal
//     console.log(`Olá`);
// }

// COM ESSE TIPO DE FUNÇÃO ACONTECE O "FUNCTION HOSTING" QUE É A MESMA COISA QUE AS VARIÁVEIS.
// E O QUE É FUNCTION HOSTING? É COMO SE FOSSE UMA FUNÇÃO QUE DÁ PARA CHAMAR ELA EM QUALQUER LUGAR DO CÓDIGO;
// EU PODERIA CHAMAR ANTES MESMO DELA SER DECLARADA QUE VAI FUNCIONAR NORMALMENTE



// AS FUNÇÕES EM JAVASCRIPT SÃO "FIRST-CLASS OBJECTS" (OBJETOS DE PRIMEIRA CLASSE). E o que é isso? Podemos definir como "function expression", seria jogar uma função dentro de um dado. Por exemplo:

const souUmDado = function() {
    console.log(`Olá tudo bem?`);
} 
// souUmDado();

// ISSO ACONTECE POIS A NOSSA VARIÁVEL RECEBE UMA FUNÇÃO, AÍ ELA PASSA A SER UMA.
// ISSO ACABA SENDO MUITO PODEROSO, POIS PODEMOS USAR ELA DENTRO DE UM PARÂMETRO DE UMA OUTRA FUNÇÃO

function executando(função) {
    função();
}

executando(souUmDado);

// 1° O QUE ACONTECEU AQUI? NÓS DECLARAMOS UMA VARIÁVEL QUE POSSUI UMA FUNÇÃO DENTRO DE SI, LOGO ELA VIRA UMA FUNCTION EXPRESSION 
// 2° NÓS CRIAMOS UMA FUNÇÃO NORMAL, BEM TRANQUILO. E NELA TEMOS UM PARÂMETRO QUE PODE RECEBER QUALQUER COISA
// 3° DENTRO DESSA FUNÇÃO, PEDIMOS QUE O NOSSO PARÂMETRO SEJA EXECUTADO
// 4° EXECUTAMOS A NOSSA FUNÇÃO, MOSTRANDO QUAL VAI SER O PARÂMETRO DENTRO DELA, QUE POR COINCIDÊNCIA, VAI SER UMA FUNÇÃO.
// 5° AÍ VAI EXECUTAR A FUNÇÃO QUE VAI POSSUIR UMA FUNÇÃO COMO PARÂMETRO, QUE VAI SER EXECUTADA DENTRO DESSA FUNÇÃO "EXECUTANDO()" QUANDO FOR CHAMADA


// ARROW FUNCTION: Mais novo, sendo criado em 2015
const muitoPrazer = () => {
    console.log("Eaí Thiago, tudo certo?");
}

const olaVouExecutarSuaFunçao = (suaFuncao) => {
    suaFuncao();
}

olaVouExecutarSuaFunçao(muitoPrazer);


// Dentro de um objeto
const pessoa = {
    cumprimento: () => {
        console.log(`Olá, tudo bem? Eu sou o Thiago`);
    }
}
pessoa.cumprimento(); // Modo tradicional de fazer

const pessoa = {
    cumprimento() {
        console.log(`Olá, tudo bem? Eu sou o Thiago`);
    }
}
pessoa.cumprimento();