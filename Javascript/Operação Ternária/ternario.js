// Básicamente é ? : (interrogação e dois pontos);
// Mas para quê é usado? Ele pode ser usado para simplificar um IF e ELSE;

// EXEMPLO: Digamos que eu tenha um sistema de usuários NORMAIS e PREMIUM, quem possuir 1000 pontos ou mais é PREMIUM e que possuir
// menos, é usuário NORMAL. 
// Sem o operador ternário teríamos que usar o IF e o ELSE, ficaria mais ou menos assim:

/*const pontuacaoUsuario = 1000;
    if(pontuacaoUsuario >= 1000){
        console.log(`USUÁRIO PREMIUM`);
    } 
    else{
        console.log(`USUÁRIO NORMAL`);
    } // Porém veja só usamos da linha 8 até a 14 para fazer algo considerado muito simples, para fazer a mesma coisa porém usando uma
      // única linha de código utilizaremos a OPERAÇÃO TERNÁRIA;
*/

const pontuacaoUsuario = 999; 
const nivelUsuario = pontuacaoUsuario >= 1000 ? `USUÁRIO PREMIUM` : `USUÁRIO NORMAL`;
console.log(nivelUsuario);

// A INTERROGAÇÃO (?) REPRESENTA TRUE E LOGO DEPOIS O SEU BLOCO;
// OS DOIS PONTO (:) REPRESENTA FALSE E LOGO DEPOIS VOCÊ PRECISA DIGITAR O SEU BLOCO;

// ALGO QUE ANTES USAVA 7 LINHAS, AGORA ESTÁ USANDO 3.


// ATUALIZAÇÃO 08/07/2021:
// É POSSÍVEL USAR O ELSE IF EM TERNÁRIO SEGUE O EXEMPLO:

function numeros (primeiro, segundo){
    return primeiro > segundo ? `O primeiro número (${primeiro}) é maior que o segundo (${segundo})` : primeiro === segundo ? `Os dois são idênticos!` : `O segundo número (${segundo}) é maior que o primeiro (${primeiro})`;
} 
console.log(numeros(800, 1600));

// Observe que nós temos duas condições no nosso return: primeiro > segundo e primeiro === segundo, se não for nenhum desses dois quer dizer que então o segundo é maior. 