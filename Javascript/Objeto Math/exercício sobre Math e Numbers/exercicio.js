const numeroEscolhido = Number(prompt("Escolha qualquer número, que retornarei informações sobre ele"));
    titulo = document.querySelector("#titulo");
        titulo.innerHTML = `Seu número é ${numeroEscolhido}`;

let texto = document.querySelector("#texto");
    let inteiro = Number.isInteger(numeroEscolhido);
        texto.innerHTML = `Seu número é inteiro? ${inteiro}; <br>`;

    let raizQuadrada = Math.sqrt(numeroEscolhido);
        if(Number.isInteger(raizQuadrada) == false){
                texto.innerHTML += `A raiz quadrada do seu número é ${raizQuadrada.toFixed(2)} <br>`;
        }
        else{
                texto.innerHTML += `A raiz quadrada do seu número é ${raizQuadrada} <br>`;
        }

    let seriaNaN = Number.isNaN(numeroEscolhido);
        texto.innerHTML += `É NaN = ${seriaNaN}; <br>`;

    let paraBaixo = Math.floor(numeroEscolhido);
        texto.innerHTML += `Seu número apontado para baixo é ${paraBaixo} <br>`;

    let paraCima = Math.ceil(numeroEscolhido);
        texto.innerHTML += `Seu número apontado para cima é ${paraCima} <br>`;

    let numeroDuasCasas = numeroEscolhido.toFixed(2);
        texto.innerHTML +=  `Seu número com duas casas decimais é ${numeroDuasCasas} <br>`;

// Agradecimento
texto.innerHTML += `Muito obrigado por jogar!`;

// Estilozin maroto
titulo.style.color = "darkred";
texto.style.fontSize = 22 + "px";
texto.style.color = "darkBlue";

