/* 

Primitivos: strings, number, boolean, undefined, null, symbol e bigint;
Quando falamos de valores primitivos estamos falando de valores imutáveis e dados imutáveis é algo que não pode mudar, ou seja, imutável.
Mas aí você pensa: "Mas eu vivo mudando as variáveis, trocando nome ou mudando número";

let nome = "Thiago";
nome = "Ferreira"; 

Bem, na verdade uma variável pode ser definida como uma caixinha e que pode ou não conter algo dentro. E quando você muda/troca alguma coisa,
você NÃO está alterando a variável, você está MUDANDO o conteúdo dentro dela. Pensa bem, no exemplo acima temos a variável "nome" , certo? 
certo. Se você quiser alterar alguma coisa, vai ser o valor dela, ou seja, o que está sendo carregando dentro dela. E o seu nome continuará
o mesmo, sendo "nome", porém com um valor dentro de si diferente. Agora se você alterar o nome da variável, você estará criando uma nova variável sem saber.

Um outro jeito de entender o que é imutável é através desse exemplo:
    let a = "A";
    let b = a;
    console.log( a, b); // Irá nós retornar A A pois o b fez uma cópia da variável "a".

    a = "O dia está lindo";
    console.log( a, b) // Você verá que nós retornou "O dia está lindo" e "A", por que? Porque a variável b foi declarada lá em cima snedo uma
    cópia da variável "a", e sendo uma cópia do "a" lá de cima ele não muda pois ele não foi redeclarado, então ele vai ficar lá quieto e segurando
    o seu "A" até alguém redeclará-lo.


Referência: Array, objects, function (geralmente é mutável);
Já aqui em valores mutáveis o negócio é diferente, acabei de dar um exemplo do "a" e do "b" e do porque o "b" não muda. Vou fazer a mesma coisa
que o exemplo de cima porém usando array que é mutável.
    let a = [1,2,3,4,5];
    let b = a;
    console.log(a,b); // Irá nos retornar bem certinho, a = 1,2,3,4,5 e b = 1,2,3,4,5

    a.push(6);
    console.log(a, b); // Aí você verá que tanto "a" quanto "b" foram mudados, com a recente alteração na variável "a" onde adicionamos o número
    6.

    b.pop();
    console.log(a, b); // Os dois voltam a ter o mesmo valor inicial lá de cima, pois os dois estão apontando para o mesmo lugar na memória

    Caso a gente coloca uma variável "c" apontando para "b", ciclo vai continuar.
    Mas caso a gente queira que a variável "b" seja independente mesmo faremos o seguinte: 
        let b = [...a]; // Nesse caso o "b" terá o valor "a", mas caso mude "a" ele não será afetado.
        
        */
// Exemplo, como objeto:
    let a = {
        nome: `Thiago`,
        sobrenome: `Ferreira`
    }
    let b = a;
    console.log( a, b); // Retorna para gente, Thiago Ferreira tanto para a variável "a" quanto para "b";

    b.nome = `Thaís`;
    console.log( a, b); // Verá que agora os dois tem Thaís em sua variável afinal as duas estão conectadas, as duas estão se passando referências

    // Agora se a gente que deixar o nosso "b" desconectado/independente do "a", faremos a mesma jogada que nós fizemos com array;
    b = {...a}; // Usando conchetes agora
    a.nome = `Mario`;
    console.log(a, b); // Ai você verá que o "a" está com o nome = "Mário" e o nosso "b" está totalmente independente;

// Resumão: imutáveis serão copiados e serão totalmente independentes;
//          mutáveis serão valores passados por referência e são interligados pois apontam para o mesmo lugar na memória, até você decidir separá-los usando [...nomeDaVariável] ou {...nomeDaVariável};
            

