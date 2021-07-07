const divParagrafo = document.querySelector(".paragrafos"); // O querySelector pega o primeiro elemento com essa classe que encontrar, no nosso caso vai ser apenas
// o primeiro "p" do nosso HMTL. Então a gente precisa encontrar uma forma de englobar todos os "p"s da nossa div.

// Podemos fazer:
const paragrafos = divParagrafo.querySelectorAll("p"); // Usaremos o querySelectorAll para pegar todos os elementos "p" da nossa div
// Aparecerá na nossa tela o nodeList em formato de um array mas NÃO é um, apenas se comporta como um.

// O exercício é pegar a cor do body e jogar em cima dos paragrafos

const estilosBody = getComputedStyle(document.body);
const backgroundBody = estilosBody.background;

console.log(backgroundBody);

for (let i of paragrafos){
    i.style.background = backgroundBody;
    i.style.color = "white";
    i.style.padding = 5 + "px";
    i.style.borderRadius = 8 + "px";
    i.style.marginBottom = 5 + "px";
}