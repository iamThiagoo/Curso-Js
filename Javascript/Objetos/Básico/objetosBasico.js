// Podemos criar um objeto usando {} dentro de uma variável;

// Vamos ao exemplo: Se eu quisesse criar dados de duas pessoas eu teria que fazer o seguinte:

let nome01 = `Thiago`;
let sobrenome01 = `Ferreira`;
let idade01 = 17;

let nome02 = `Jessica`;
let sobrenome02 = `Medeiros`;
let idade02 = 17;

// Ou seja para cada pessoa que eu quiser adicionar no meu código, teria que declarar várias variáveis para ela e isso encheria demais meu código
// Esse é o conceito de objeto, pegar várias informações sobre alguma coisa e agrupar elas em um único lugar. Vamos fazer o mesmo exemplo de cima usando objeto;

let primeiraPessoa = {
    nome: 'Maria',
    sobrenome: "Rodrigues", 
    idade: 37,
    cidade: "Caxias do Sul",
    país: "Brazil"
};

    // ERRO QUE ENFRENTEI AGORA E FIQUEI QUEBRANDO A CABEÇA: VERIFIQUE SEMPRE OS ATRIBUTOS DENTRO DO SEU OBJETO, TODOS TEM QUE ESTAR COM
    // OS DOIS PONTOS ":" APÓS A SUA DECLARAÇÃO, CUIDADO PARA NÃO COLOCAR "=" SE NÃO IRÁ DAR ERRO DE SÍNTAXE "invalid shorthand property initializer"
    // E NÃO PODE TER DOIS PONTOS APÓS A TER DECLARADO O ATRIBUTO, TEM QUE SER VÍRGULA;

    // E para ver alguma informação, você teria que fazer: variável + atributo que deseja.
    console.log(primeiraPessoa.nome);
    console.log(primeiraPessoa.sobrenome);
    console.log(primeiraPessoa.país);

// Mas aí você pensa "Bahh Thiagão! Para cada pessoa que eu for cadastrar eu tenho que fazer isso manualmente?". 
    // Necessariamente não, nós podemos criar uma function que transforma as informações em um objeto
        function cadastro(nome, sobrenome, idade, CPF, RG, endereco, cidade, pais){
            return{
                nome: nome,
                sobrenome: sobrenome,
                idade: idade,
                CPF: CPF,
                RG: RG,
                endereco: endereco,
                cidade: cidade,
                pais: pais
            }
        } // Essa função é chamada de "Função Factory" pois ela fabrica um objeto;
          // Poderiamos até deixar os elementos do return na mesma linha. Mas para facilitar a visão preferi deixar assim;
          // Podemos tirar os com valores iguais, poderiamos apenas deixar: nome, sobrenome, idade e não nome: nome, ... Pois a engine do JS identifica isso que é para colocar nome com nome e assim por diante, mas enfim, fica o aviso que também pode fazer isso

    // Beleza, função criada! Temos um cliente e vamos fazer o cadastro dele, como fazemos?
        let cadastro1 = cadastro("Pedro", "Da Silveira", 28, "999.999.999-99", "98989898", "R. Alfredo Chaves", "Caxias do Sul", "Brasil" ); // Sempre em ordem, como está na função

        // Feito o cadastro do nosso cliente. Vamos ver as informações dele:
        console.log(cadastro1);
        // De novo, não se esqueça: dois pontos(:) após a declaração do atributo e separar entre virgulas(,) os atributos;

    // Mas vamos fazer mais cadastros:
        let cadastro2 = cadastro("Raul", "Sergio", 50 , "999.999.999.99", "98989898", "R. das Macieiras", "São Paulo", "Brasil");
        let cadastro3 = cadastro("Felipe", "Hunter", 10 , "999.999.999.99", "98989898", "R. Pernambuco", "Recife", "Brasil");
        let cadastro4 = cadastro("Maria", "Camila", 34 , "999.999.999.99", "98989898", "Barra da Tijuca", "Rio de Janeiro", "Brasil");
        let cadastro5 = cadastro("Paulo", "Lamborghini", 38 , "999.999.999.99", "98989898", "R. Itália", "Roma", "Itália");

    // E vamos pegar o nome de cada cadastro que a gente fez agora:
        console.log(cadastro1.nome, cadastro2.nome, cadastro3.nome, cadastro4.nome, cadastro5.nome); // E retorna para gente: Pedri, Raul, Felipe, Maria e por fim o Paulo.