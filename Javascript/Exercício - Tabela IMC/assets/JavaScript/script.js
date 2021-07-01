const form = document.querySelector("#formulario");
form.addEventListener("submit", function (event){
    event.preventDefault();
    const inputPeso = event.target.querySelector("#peso");
    const inputAltura = event.target.querySelector("#altura");

    const peso = Number(inputPeso.value);
        if(!peso){
            setResultado(`Peso inválido!`, false);
            return;
        }

    const altura = Number(inputAltura.value);
        if(!altura || altura <= 100){
            setResultado(`Altura inválida!`, false);
            return;
        }
    
    let conta = peso / (altura ** 2);
    const imc = (conta * 10000).toFixed(2);
    const nivelIMC = nivel(imc);

    const msg = `Seu IMC é ${imc} (${nivelIMC}).`;
    setResultado(msg, true);
});

function nivel(imc){
    const niveis = [`Abaixo do peso`, `Peso normal`, `Sobrepeso`, `Obesidade grau 1`, `Obesidade grau 2`, `Obesidade grau 3`];
    if ( imc >= 39.9) return niveis[5];
    if (imc >= 34.9) return niveis[4];
    if (imc >= 29.9) return niveis[3];
    if (imc >= 24.9) return niveis[2];
    if (imc >= 18.5) return niveis[1];
    if (imc < 18.5) return  niveis[0];
}

function criaParagrafo (){
    const p = document.createElement("p");
    return p;
}

function setResultado(message, isValid){
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = ` `;

    const p = criaParagrafo();

    if(isValid){ 
        p.classList.add(`paragrafo-resultado`);
    }
    else{
        p.classList.add(`paragrafo-error`);
    }

    p.innerHTML = message;
    resultado.appendChild(p);
};