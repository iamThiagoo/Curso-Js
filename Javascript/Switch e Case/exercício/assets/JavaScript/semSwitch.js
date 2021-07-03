// Mesmo código porém sem o Switch
const data = new Date();
let diaNaSemana = data.getDay();

function nomeDoDia (diaNaSemana){
    let nomeDia = [`Domingo`,`Segunda-Feira`, `Terça-Feira`, `Quarta-Feira`, `Quinta-Feira`, `Sexta-Feira`, `Sábado`];
    return nomeDia[diaNaSemana];
}

const diaTexto = nomeDoDia(diaNaSemana);
const diaNoMes = zeroNoHorario(data.getDate());

const numeroDoMes = data.getMonth();
    function nomeDoMes(numeroDoMes){
        const nomeDoMes = [`Janeiro`, `Fevereiro`, `Março`, `Abril`, `Maio`, `Junho`, `Julho`, `Agosto`, `Setembro`, `Outubro`, `Novembro`, `Dezembro`];
        return nomeDoMes[numeroDoMes];
    }

const mesTexto = nomeDoMes(numeroDoMes);
const ano = data.getFullYear();

const hora = zeroNoHorario(data.getHours());
const minutos = zeroNoHorario(data.getMinutes());
    function zeroNoHorario(numero){
        return numero < 10 ? `0${numero}` : `${numero}`;
    }

const h1 = document.querySelector("#suaData");
      h1.innerHTML = `Agora é ${hora}:${minutos} de ${diaTexto}, ${diaNoMes} de ${mesTexto} de ${ano} 😉`;