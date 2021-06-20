const nome = prompt("Qual é o seu nome?");
document.body.innerHTML = `Seu nome completo é <strong>${nome}</strong>`;

let tamanhoDoNome = nome.length;
    document.body.innerHTML += `<br>Seu nome tem <strong>${tamanhoDoNome}</strong> letras`;

let segundaLetra =  nome[1];
    document.body.innerHTML += `<br>A segunda letra do seu nome é <strong>${segundaLetra}</strong>`;

let primeiroIndiceComALetraO = nome.indexOf("o");
    document.body.innerHTML += `<br>O primeiro índice da letra O no seu nome está localizado no índice <strong>${primeiroIndiceComALetraO}</strong>`;

let ultimaLetraDoMeuNome = nome.lastIndexOf("a");
    document.body.innerHTML += `<br>O último índice da letra A no seu nome está localizado no índice <strong>${ultimaLetraDoMeuNome}</strong>`;

let tresUltimasLetras = nome.slice(-3);
    document.body.innerHTML += `<br>As últimas três letra do seu nome é <strong>${tresUltimasLetras}</strong>`;

let palavrasDoMeuNome = nome.split(' ');
    document.body.innerHTML += `<br>As palavras do seu nome são <strong>${palavrasDoMeuNome}</strong>`;

let meuNomeComLetrasMaiúsculas = nome.toUpperCase();
    document.body.innerHTML += `<br>Seu nome com letras maiúsculas fica assim <strong>${meuNomeComLetrasMaiúsculas}</strong>`;

let meuNomeComLetrasMinúsculas = nome.toLowerCase();
    document.body.innerHTML += `<br>Seu nome com letras minúsculas fica assim <strong>${meuNomeComLetrasMinúsculas}</strong>`;

/* NOTA: A resposta do professor foi muito mais curta pois ele nao criou variáveis para dizer as respostas das perguntas, ele apenas foi
direto nas perguntas, abriu os conchetes e lá colocou a const nome e a função/atributo que iria ser usada. Preferi deixar assim 
pois se for olhar o lado positivo, tá certo e outra que tenho que valorizar o meu esforço;

/* Uma outra forma de escrever o innerHTML é colocando o sinal += que ai toda vez que você for usar, ele irá incrementar
com a outra frase que você havia escrito
Por exemplo:
    document.body.innerHTML = `Olá`;
    document.body.innerHTML = `, meu nome é Thiago`;
    document.body.innerHTML = `. Prazer em te conhecer!`;

    Se você fizer isso no console, ficaria assim: Olá, meu nome é Thiago. Prazer em te conhecer!

    * Caso queira quebrar a linha pode se usar o <br> pois o .innerHTML permite isso pois altera o container inteiro, 
    diferente do .innerText que altera o texto.
*/