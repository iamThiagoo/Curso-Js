// Arrays são usados ára listar algo. Um exemplo para o uso de array seria para uma lista de alunos
// Ficaria muito estranho se a gente fizesse: let aluno = "Maria João Thiago";
// E por que ficaria estranho? Porque seria mais complexo mudar o nome da Maria ou do João. E para ficar mais simples para fazer certas mudanças, foi criado os arrays

// Podemos imaginar um array como uma lista de compras;
// Um array pode ser definido com o uso de [] dentro de uma variável sendo separado por vírgula;

let familia = ["Mãe", "Pai", "Irmã" , "Eu"];
//               0      1       2       3

// Os arrays também são índexados como as strings. Caso não me lembre, ser indexado é cada letra ter um número. Exemplo: thiago ; T=0, H=1, I=2... 
// Porém vale ressaltar que eles são indexados de maneira diferente. Onde cada expressão dentro dela valerá como um índice

console.log(familia[2]); // O que nós estamos tentando falar aqui? Que eu quero que o console pegue o segundo indice do meu Array, eles nos retornará irmã

// Caso queira acessar o índice da Mãe
    console.log(familia[0]);

// Mas blz, e se eu quiser mudar o índice Irmã por Irmão, se eu tivesse, como eu modifico o índice da Irmã
    familia[2] = "Irmão";
        console.log(familia); // Trocamos a palavra irmã por irmão

// Caso eu não queira mudar mas sim adicionar alguma coisa no meu array é só criar um índice que não exista ainda. Por exemplo:
    familia[4] = "Tia";
        console.log(familia); // Agora temos a Tia adicionada no índice 4 que antes não existia

    // Beleza, mas e seu eu não souber o número do meu último índice? O que eu faço?
        // A mesma coisa que você faz com strings
            console.log(familia.length); // Retornará 5, pois lembre-se, começa pelo índice 0 e vai indo;
    
    //Mas também temos uma outra forma de adicionar alguma coisa ao array sem ne saber o tamanho dele
                familia[familia.length] = "Tio";
                familia[familia.length] = "Vô";
                familia[familia.length] = "Vó"; // Adiciona no fim
    // Isso vai funcionar da mesma maneira;
                console.log(familia);

    //Temos uma função no JavaScriot para adicionar um item ao nosso array sem nem precisar saber seu tamanho; 
    familia.push("Prima");
    familia.push("Primo"); // Adiciona no fim
        console.log(familia);

// Ahh mas eu não quero mais a Mãe no índice 0, beleza também temos uma função que troca o índice 0 pelo que nós iremos adicionar. 
familia.unshift("Tia-Vó");
console.log(familia);
//OBS: "Tia Vó" passa a ser o índice 0 e a "Mãe" passa a ser o índice 1, cada vez que colocamos a função unshift todos os índices sobem uma casa;

// Quero tirar o último índice do meu Array. Como faço?
familia.pop();
console.log(familia); // Foi tirado da nossa array o ultimo índice que era Primo.

// O bacana da função .pop() é que podemos colocar ele em uma variável, ai teremos o índice que foi removido salvo dentro de uma variável;
// S dermos um console.log() nesse ponto, podemos ver que a "Prima" é o nosso último índice. Vamos tirar ela da nossa array porém nós iremos salva-lá em uma variável
const parenteRemovido = familia.pop();
console.log(familia);
console.log(parenteRemovido); // E ai está a nossa prima que foi removida da nossa array que agora está salva em um const

// Beleza, mas Thiagão, me arrependi de ter colocado a Tia vó na lista, como eu faço para tirar ela e fazer com que a mãe voltei a ser o índice 0;
familia.shift();
console.log(familia); // Mãe voltou a ser o índice 0 e o pai voltou a ser o índice 1. A função shift() tira apenas o índice 0 assim que o unshift adiciona apenas o índice 0.
// OBS: FICA LIGADÃO NESSAS FUNÇÕES DE UNSHIFT E SHIFT PORQUE ELAS MEXEM NO SEU ÍNDICE 0. Blz?

//Quero deletar algum conteúdo da minha índice. Pode deixar!
delete familia[4];
console.log(familia); // Nesse caso, eu exclui a "Tia" mas foi de forma aleatória kkk. Mas o que aconteceu? Bem, excluimos o conteúdo da índice mas não excluímos ela, e aí ela continuou existindo porém sem nada dentro dela (virou um buraco dentro da nossa array). O índice 4 continua vivo mas sem nada dentro;

//Caso eu queira dividir meu array é só fazer que nem no strings, com a função slice();
    console.log(familia.slice(0, 5)); //Aqui ele irá ir até o índice que nós excluímos ali em cima. Porque ele não conta o elemento selecionado que nesse caso é o 5
    // Se você quiser pegar o índice 5 teremos que adicionar o número 6 no slice;
    console.log(familia.slice(0,6)); 

    // O slice também trabalha com números negativos.
        console.log(familia.slice(0, -2)); // Nesse caso ele pegará o índice 0 e voltará duas casas negativas, ou seja, ele irá lá para o final da nossa array
            // E aí ele irá remover os dois últimos índices e nós retornará o restante do array sem esses últimos 2 que nós selecionamos

//Algo que confunde muitas cabeças:
    console.log(typeof familia); //Nós retornará um objeto, por que? Pois de fato um array é muito semelhante com um objeto, uma diferença é que o array índexa automaticamente os índices enquanto o objeto trabalha de uma forma diferente

    //Mas caso tenha dúvida se você está ou não trabalhando com um array, é só fazer:
        console.log(familia instanceof Array) // A variável "familia" é uma instância de array? True ou false? No nosso caso irá retornar, obviamentem um true;