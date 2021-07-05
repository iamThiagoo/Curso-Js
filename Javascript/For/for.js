/*
- For é uma estrutura de repetição muito antigo e usado em várias linguagens de programação;
Estrutura :
    
    for () {
        bloco
    }

-  O bloco do for NÃO contém ponto e vírgula no final ";"
*/

// Para a gente criar um For clássico que conta de 0 a 5 nos precisamos:
// Para dividir as expressões se usa o ponto e vírgula ";"
// 1° Criar uma varíavel de controle, geralmente chamada de i = index;
// 2° Criar uma condição (quando esse for vai parar?).
// 3° Incrementar a variável
// Juntando tudo isso, temos:
    for (let i= 0; i <= 5; i++) {
    console.log(i);
    }

// // Tudo vai depender se a condição É ou NÃO VERDADEIRA, se não for ai para e sai do loop de repetição.

// // Exemplo bobo que eu criei:
    for (let i = 0; i <= 92; i++){
        console.log(`Glória tem ${i} anos.`);
            if(i === 92){
                console.log(`Glória faleceu com ${i} anos.`);
            }
    }

// // Se eu nos exemplos acima, o nosso contador está indo de 1 em 1, porém se a gente quisesse que fosse por exemplo de 10 em 10, também é possível;
    for (i = 100; i <= 200; i += 10){
        console.log(`Linha ${i}.`);
    }

// // Também podemos fazer o nosso contador ser negativo;
    for (i = -100; i <= 10 ; i += 20){
        console.log(`Eu sou a linha ${i}`);
    }

// // Podemos fazer o inverso, invés de adicionar, podemos decrementar:
    for(i = 500; i >= 250; i -= 50){
        console.log(`Meu valor está caindo, sou o ${i}`);
    } // Porém invés de incrementar com o sinal de +=, vamos decrementar com -=


// Tem uma maneira da gente descobrir se o número é o não par:
    for(i = 0; i <= 10; i++){
        const eleÉPar = i % 2 === 0 ? `Sim, ele é PAR.` : `Não, ele NÃO é PAR.`;
        console.log(`O número ${i}, é PAR? ${eleÉPar}`);
    }

// IMPORTANTE: Tem um jeito da gente percorrer o nosso array com o for:
const times = [`Internacional`, "Juventude", "Barcelona", "Bayern", "PSG"];
for (i = 0; i <= times.length; i++) { // Lembrando que o i tem que ser MENOR do que o array, se for <= irá aparecer um outro índice com valor vazio
    console.log(`Time ${i} =`, times[i]);
}
    // Dessa forma acaba aprimorando a nossa forma de visualizar o tamanho do array no console.