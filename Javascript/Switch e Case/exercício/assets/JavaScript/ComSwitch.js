const data = new Date();
let diaNaSemana = data.getDay();

function nomeDoDia (diaNaSemana){
    let nomeDia;

    switch(diaNaSemana){
        case 0: nomeDia = `Domingo`;
        return nomeDia;

        case 1: nomeDia = `Segunda-Feira`;
        return nomeDia;

        case 2: nomeDia = `Terça-Feira`;
        return nomeDia;

        case 3: nomeDia = `Quarta-Feira`;
        return nomeDia;

        case 4: nomeDia = `Quinta-Feira`;
        return nomeDia;

        case 5: nomeDia = `Sexta-Feira`;
        return nomeDia;

        case 6: nomeDia = `Sábado`;
        return nomeDia;

        default: nomeDia = `[ERRO] Configure a sua data em seu dispositivo`;
        return nomeDia;
    }
}

const diaTexto = nomeDoDia(diaNaSemana);
const diaNoMes = zeroNoHorario(data.getDate());

const mes = data.getMonth();
    function nomeDoMes(mes){
        let nomeDoMes;
        
        switch(mes){
            case 0: nomeDoMes = `Janeiro`;
            return nomeDoMes;

            case 1: nomeDoMes = `Fevereiro`;
            return nomeDoMes;

            case 2: nomeDoMes = `Março`;
            return nomeDoMes;

            case 3: nomeDoMes = `Abril`;
            return nomeDoMes;

            case 4: nomeDoMes = `Maio`;
            return nomeDoMes;

            case 5: nomeDoMes = `Junho`;
            return nomeDoMes;

            case 6: nomeDoMes = `Julho`;
            return nomeDoMes;

            case 7: nomeDoMes = `Agosto`;
            return nomeDoMes;

            case 8: nomeDoMes = `Setembro`;
            return nomeDoMes;

            case 9: nomeDoMes = `Outubro`;
            return nomeDoMes;

            case 10: nomeDoMes = `Novembro`;
            return nomeDoMes;

            case 11: nomeDoMes = `Dezembro`;
            return nomeDoMes;

            default: nomeDoMes = `[ERRO] Configure a data no seu dispositivos`;
            return nomeDoMes;
        }
    }

const mesTexto = nomeDoMes(mes);
const ano = data.getFullYear();

const hora = zeroNoHorario(data.getHours());
const minutos = zeroNoHorario(data.getMinutes());
    function zeroNoHorario(numero){
        return numero < 10 ? `0${numero}` : `${numero}`;
    }

const h1 = document.querySelector("#suaData");
      h1.innerHTML = `Agora é ${hora}:${minutos} de ${diaTexto}, ${diaNoMes} de ${mesTexto} de ${ano} 😉`;