// O FOR IN é um outro tipo de for que também é bem tranquilo de aprender

// Digamos que a gente tenha um vetor
const games = ["Kingdom Heats", "God Of War", "Forza Horizon 5", "Counter Strike", "CupHead"];
// Vetor é um ARRAY de uma única dimensão, ou seja, não tem outros ARRAYS dentro dele.

for (let i = 0; i < games.length; i++) { // Esse seria o FOR CLÁSSICÃO
    console.log(`O jogo número ${i} é ${games[i]}.`);
}

// No FOR IN seria quase a mesma coisa porém ao invés da gente falar a condição e após o incremento, nós simplesmente faríamos:
for ( i in games ){
    console.log(i);
} // No primeiro momento ele irá ler e nos retornar os índices: 0 , 1, 2 ...

for ( i in games) {
    console.log(games[i]);
} // Se a gente declarar games[i] teremos ele nos retornando os nomes como o esperado;

for ( i in games){
    console.log(`O jogo número ${i} é ${games[i]}.`);
} // Resultado anterior porém com o uso do For In

// Ou seja, o FOR IN lê os índices ou chaves dos objetos. Sendo que o For In fica bem interessante com os objetos:

const pessoa = {
    nome: "Thiago", 
    idade: 17,
    altura: 170,
    endereço: {
        cidade: "Caxias do Sul",
        país: "Brasil"
    },
    nomeDosPais: {
        pai: "Norberto",
        mãe: "Claúdia"
    },
    cachorro: "Jake"
}

for ( let chaves in pessoa){ // Ele irá iterar sobre as chaves do objeto
    console.log(chaves, ":" ,pessoa[chaves]); // Outro jeito de acessar as informações de dentro do objeto, além de usar o tradicional que é: pessoas.nome , pessoa.idade
} // Irá nos retornar as informações fornecidas
