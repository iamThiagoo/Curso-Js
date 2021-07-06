const elementos = [
    {tag: "p", texto:"Olá, eu sou o paragrafo."},
    {tag: "div", texto:"Olá, eu sou a div."},
    {tag: "section", texto:"Olá, eu sou a section."},
    {tag: "footer", texto:"Olá, eu sou o footer."}
];

// Se eu quiser adicionar um elemento no HTML, teremos que usar o appendChild(), outra coisa importante é que ele sempre irá adicionar no final do elemento
// Se a gente adicionar o appendChild() no body ele vai adicionar lá embaixo, após o src do JS, então o mais indicado para se fazer é colocar ele dentro do container

const container = document.querySelector("#container");

// Agora a gente precisa de um elemento que vai abranger todos os elementos lá de cima da nossa variável "elementos";

const div = document.createElement("div");

// Agora a gente precisa iterar o nosso array, para que depois no fim, a gente adicione ele no nosso HTML. Para iterar ele iremos usar o for

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto); // Outra forma de adicionar texto, além do .innerHTML e .innerText.

    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

container.appendChild(div);