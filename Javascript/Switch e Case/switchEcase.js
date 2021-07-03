// o Switch e o Case é uma estrutura condicional aqui no JavaScript, não é muito usado mas é sempre bom conhecer e saber em quais casos aplicá-lo.

// Logo abaixo estamos pedindo ao sistema nos retornar que dia é hoje, porém se nós não tivessemos o if e else, o console nos retornaria um número equivalente ao dia
// Então para que o console não retorne um número mas sim o dia literal, acrescentamos o if e else, e se você rodar ele, verá que ele retornará o dia bem certinho.
const data = new Date();
const diaSemana = data.getDate();

let diaSemanaTexto;
    if (diaSemana === 0 ){
        diaSemanaTexto = `Domingo`;
    } 
    else if (diaSemana === 1){
        diaSemanaTexto = `Segunda`;
    } 
    else if (diaSemana === 2){
        diaSemanaTexto = `Terça`;
    }
    else if (diaSemana === 3){
        diaSemanaTexto = `Quarta`;
    }
    else if (diaSemana === 4){
        diaSemanaTexto = `Quinta`;
    } 
    else if (diaSemana === 5){
        diaSemanaTexto = `Sexta`;
    } 
    else if (diaSemana === 6){
        diaSemanaTexto = `Sábado`;
    }
    else{
        diaSemanaTexto = `[ERRO] Configure a data do seu dispositivo!`;
    }

    console.log(diaSemanaTexto);

// Porém perceba que nós estamos usando apenas uma variável para a mesma estrutura e checando a mesma variável para diversos números. Esse é o caso perfeito para
// o uso do switch.

const data = new Date();
const diaSemana = data.getDate();
let diaSemanaTexto;

switch (diaSemana){
    case 0: diaSemanaTexto = `Domingo`;
    break; // É usado o break para caso a afirmação seja verdadeira, ele saia do switch;

    case 1: diaSemanaTexto = `Segunda`;
    break;

    case 2: diaSemanaTexto = `Terça`;
    break;

    case 3: diaSemanaTexto = `Quarta`;
    break;

    case 4: diaSemanaTexto = `Quinta`;
    break;

    case 5: diaSemanaTexto = `Sexta`;
    break;

    case 6: diaSemanaTexto = `Sábado`;
    break;

    default: diaSemanaTexto = `[ERRO] Configure a sua data em seu dispositivo.` // Caso não seja nenhuma das opções, se usa default como se fosse um `else`; Nesse caso se não for do 0 a 6 aparecerá essa mensagem para o usuário.
    break; // Não é necessário colocar break no default, afinal o default é a última opção. Mas eu coloquei porque vai saber? Melhor garantir e colocar.
};

// console.log(diaSemanaTexto);

// // Caso você não coloque o break após o o bloco case, ele irá continuar rodando e ficará `preso` no swich até achar um break;
// // No exemplo acima se a gente não colocasse o break no case 0 e fosse domingo para o usuário, ele não pararia no 0 e sim na segunda que é aonde tem o próximo break
    switch (dia){
        case 0: `Domingo`;

        case 1: `Segunda`;
        break;
    }
    console.log(dia); // Se fosse domingo, retornaria segunda pois no case 0 não possui o break, então ele rodaria até achar o próximo break.


// Também podemos colocar o nosso switch dentro de uma função:
const data = new Date();
const diaSemana = data.getDate();

function getDayText(diaSemana){
    let diaSemanaTexto;

    // Podemos substituir o break do switch por return pois quando a função ler a palavra return, o resto da função será ignorada. Então podemos deixar assim:
    switch (diaSemana){
    case 0: diaSemanaTexto = `Domingo`;
        return diaSemanaTexto;

    case 1: diaSemanaTexto = `Segunda`;
        return diaSemanaTexto;
        
    case 2: diaSemanaTexto = `Terça`;
        return diaSemanaTexto;
    
    case 3: diaSemanaTexto = `Quarta`;
        return diaSemanaTexto;
        
    case 4: diaSemanaTexto = `Quinta`;
        return diaSemanaTexto;

    case 5: diaSemanaTexto = `Sexta`;
        return diaSemanaTexto;

    case 6: diaSemanaTexto = `Sábado`;
        return diaSemanaTexto;

    default: diaSemanaTexto = `[ERRO] Configure a sua data em seu dispositivo.`
    }
}

// Já que o diaSemanaTexto está no escopo local da função, podemos declarar uma variável com o mesmo nome e apontando para a função;
let diaSemanaTexto = getDayText(diaSemana);
console.log(diaSemanaTexto); // Retornará o nome do dia. Você também poderia ir direto no console e colocar o nome da função e o seu parâmetro mas desse caso colocamos ele dentro de uma variável para ficar mais fácil.