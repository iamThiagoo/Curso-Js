const relogio = document.querySelector("#timer");

function criandoSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
        hour12: false,
        timeZone: "GMT"
    })
}

let timer;
let segundos = 0;

function iniciaRelogio(){
    timer = setInterval(() => {
        segundos++;
        relogio.innerHTML = criandoSegundos(segundos);
    }, 1000);
    return timer;
}

document.addEventListener("click", (e) => {
    const element = e.target;

    if(element.classList.contains("iniciar")){
        relogio.classList.remove("pausado");
        relogio.classList.add("iniciado");
        clearInterval(timer);
        iniciaRelogio();
    }

    if(element.classList.contains("pausar")){
        relogio.classList.add("pausado");
        clearInterval(timer);
    }

    if(element.classList.contains("zerar")){
        relogio.classList.remove("iniciado");
        relogio.classList.remove("pausado");
        clearInterval(timer);
        relogio.innerHTML = `00:00:00`;
        segundos = 0;
    }
});