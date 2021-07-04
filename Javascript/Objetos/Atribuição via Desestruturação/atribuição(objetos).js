const pessoa = {
    nome: "Thiago",
    idade: 17,
    altura: 170,
    endereço: {
        rua: "Av. Pedro Cabral",
        numero: "75",
        pais: "Austrália"
    }
};

console.log(pessoa); // Temos nosso objeto

// Olhando de primeira, para pegar algum tipo de informação, usamos a notação de pontos, ou seja:
console.log(pessoa.nome);

// Mas caso a gente queira colocar dentro de uma variável, faríamos:
const idade = pessoa.idade; // OBS: Atribuição normal
console.log(idade);

// Para a gente fazer a atribuição via desestruturação com os objetos, faremos o seguinte:
    // Abrir as chaves normal, selecionando o atributo que a gente quer daquele objeto:
    const { altura } = pessoa;
    console.log(altura);

    // Podemos escolher mais que um atributo igual na atribuição via desestruturação de arrays:
    const { nome, idadeAtual, alturaDaPessoa, nacionalidade = ``} = pessoa; // Caso a gente não tenha algum atributo no objeto, nós podemos declarar ela na própria variável. Se tivesse a nacionalidade
    // específicada, deixaria de ser um atributo vazio.
    console.log(nome, idade, altura, nacionalidade);

// Caso eu queira mudar o nome da minha chave/atributo no objeto, teríamos que declarar ele na variável e colocar o novo nome;
    const {endereço: mudanca} = pessoa;
    console.log(mudanca); // Dai o nosso atributo não se chama mais endereço

// Caso a gente queira extrair um informação por exemplo do endereço, fariamos o seguinte:
    const {endereço: {rua}} = pessoa;
    console.log(rua); // E teríamos que chamar "rua" pois de uma certa forma nós mudamos/trocamos o nome do atributo

// Podemos usar o resto aqui também, mesma coisa:
    const {altura: alturaDP, endereço, ...resto} = pessoa;
    console.log(altura,endereço, resto);