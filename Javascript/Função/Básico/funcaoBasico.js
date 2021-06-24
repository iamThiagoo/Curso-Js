// Geralmente as funcões nos retornam alguma ação

// Para declarar uma função se usa:
        function nomeDaAção(){ // Os conchetes delimitam a área da nossa função
            console.log(`Bom dia`);
        }
        
        nomeDaAção();// Por que a gente fez isso? Porque a gente declarou a função porém nos não a chamamos/executamos ela.
        // Na linha de cima nós a executamos, se não fizessemos isso, nada aconteceria.

// Mas para que utilidade tem aqueles parênteses ao lado direito da nossa função? Bem aqueles parênteses são chamados de parâmetros
        // Se liga no exemplo:
            function saudacao(nome){
                console.log(`Bom dia ${nome}!`);
            }
            
            saudacao(`Thiago`); // Irá nos retornar: Bom dia Thiago!
        
        // Entendeu? A gente fez a nossa função com o parâmetro "nome", incrementamos o nome no console e fechamos a nossa function;
        // Depois quando chamamos a função para ela entrar em ação, declaramos o parâmetro "nome" como "Thiago". E tudo que tiver o parâmetro "nome"
        // Dentro da nossa função, será convertido para "Thiago". Poderiámos declarar qualquer coisa dentro do nosso parâmetro.
        // Poderiámos declarar Maurício, aí o nosso console retornaria "Bom dia Maurício". Poderiámos declarar um number, por que não? No nosso exemplo ficaria estranho, "Bom dia 1" mas poderiámos.
        
        // Vale ressaltar que a função é reutilizável e você decide o quanto que quer usar ela, poderiámos chamar ela de novo com outro parâmetro declarado.
            saudacao(`senhor`);
            saudacao(`senhora`);

// Toda a função é UNDEFINED se você não específica algo para ela
        function helloWorld(){
            console.log(`Eai tudo bem`);
        }

        const hello = helloWorld();
            console.log(hello); // Retorna UNDEFINED porque não especificamos nada a ela

    // E para a gente específicar alguma coisa para ela, usamos o "return ..." para que quando a gente quiser ver a função dentro do console.log ela não acabe voltando UNDEFINED
        // Vamos criar uma função e vamos especificar ela
            function euSouUmaFunção(saudacao){
                //console.log("Olá, eu sou uma função ${saudacao}"); não irá ser preciso deixar o console.log para não voltar a mesma frase duas vezes
                return `Olá, eu sou uma função${saudacao}`; // Se for usar o return, específique bem ele com alguma coisa relacionada ao contéudo da ação
            }

            const minhaFunção = euSouUmaFunção(". Tudo bem com você?");
            console.log(minhaFunção); // E aí o console nos retornará o nosso return e não mais UNDEFINED

            // Mas também há funcões que não retornam nada também em JavaScript

// Criando uma função que soma dois valores:
function soma(n1,n2){
    let resultado = n1 + n2;
    return resultado;
}

console.log(soma(15,1)); // Retorna 16
console.log(soma(6,2)); // Retorna 8
console.log(soma(3,1)); // Retorna 4

// Tudo que estiver dentro da função NÃO pode ser alterado pois ela está protegida com um escopo. Se quiser fazer uma alteração, tem que ir na própria função
    // Tudo que for declarado na função ( variável , const , etc) não existirá fora da função. Se for colocar uma variável dentro do console.log onde foi criada dentro de uma função, irá retornar "(nome da variável) is not defined";
        /*
        function ola(x, y){
            const resultado = x + y; // Essa const não tem nada a ver com a const que está do lado de fora. E mesmo se fosse, const NÃO se pode redeclarar;
            return resultado;
        }
    
        const resultado = soma(1,2); // Essa const não tem nada a ver com a const que está dentro da função. E mesmo se fosse, const NÃO se pode redeclarar;
        console.log(resultado);
        */

// Após o return não deve vir nada pois a engine do JavaScript irá ler até a palavra return e nada mais será executado;

// Se você não espeficifiar os parametros na função, voltará NaN. Como no caso abaixo:
/*         function ola(x, y){
            const resultado = x + y;
            return resultado;
        }

        const resultado = soma(); 
        console.log(resultado);  // Retornará NaN pois não foi especificado os valores na const resultado;
*/


// Temos um outro jeito de criar funções também, como é o exemplo abaixo onde nós declaramos uma função dentro de uma variável;
        const triplicando = function (n){
            return n * 3;
        }; // Não esquece de colocar ponto e vírgula no final, é sempre necessário;

        console.log(triplicando(2)); // Valor triplicado de 2 é 6. Deu tudo certo!
        // Além disso, se lembra que nós podemos reutilizar as funções, então!
        console.log(triplicando(5));
        console.log(triplicando(9));
        console.log(triplicando(10)); // Todas irão nós retornar valores certos

        // Chamamos esse tipo de função que se encontra dentro de uma variável de "Função Anônima" no JavaScript.

// E um outro mais moderno, chamado de "Arrow Function", que é quase a mesma coisa que a "Função Anônima" só mudando um detalhe
/*  (Reutilizando o exemplo de cima, mas comentado para não surgir erros)

    const triplicando = (n) => {
    return n * 3;
    };

    Tudo começa acrescentando a flecha
    A Arrow Function veio para simplificar a vida do programador então nós podemos excluir muitas coisas do nosso código e que mesmo
    assim vai continuar funcionando perfwitamente. Podemos ecluir: o return, se tivermos apenas uma linha na function nós podemos excluir
    as chaves e por fim, se tivermos apenas um parâmetro na função, podemos excluir os parênteses dele

    Nossa nova função ficaria assim:
    const triplicando = n => n ** 3; 
    Bem simplificada através do Arrow Function, mas lembre tiramos as chaves apenas se tiver uma linha na nossa função e tiramos os parênteses
    se tivermos apenas um parâmetro.

*/