// O objeto Date é usado para datas

// const data = new Date(); // A função Date é uma função construtora que precisa da palavra new na frente dela, e também começa com letra maiúscula
// A função Date tem diversas coisas dentro dela, e com ela nós conseguimos definir segundos, horas, mês, etc.
// Se a gente roda a Date sem nenhum parâmetro nela, o console criará um objeto com hora, data,enfim.

// console.log(data.toString()); // Se a gente roda a nossa variável Date com a função .toString() retorna o fuso horário do sistema JS com o GMT 000

// Outra maneira de pegar a data e hora:
// const minhaData = new Date(2021, 6, 2, 0, 37);
// console.log(minhaData.toString());

// Mas por que 6 é Julho? Pois a contagem dos meses e até mesmo os dias da semana, começam em 0.
// JANEIRO = 0                      DOMINGO = 0
// FEVEREIRO = 1                    SEGUNDA = 1
// MARÇO = 2                        TERÇA = 2
// ABRIL = 3                        QUARTA = 3
// MAIO = 4                         QUINTA = 4
// JUNHO = 5                        SEXTA = 5
// JULHO = 6                        SABADO = 6
// AGOSTO = 7
// SETEMBRO = 8
// OUTUBRO = 9
// NOVEMBRO = 10
// DEZEMBRO = 11

// Outro formato bastante usado é usar dentro do parâmetro Date o uso da dataString;
//Exemplo:
// const dataDoMeuNascimento = new Date(`2003-12-06 12:00:00`);
// console.log(dataDoMeuNascimento);

// // Pegando os valores:
// console.log(`Dia:`, data.getDate());
// console.log(`Mes:`, data.getMonth() + 1);
// console.log(`Ano:`, data.getFullYear());
// console.log(`Hora:`, data.getHours());
// console.log(`Minutos:`, data.getMinutes());
// console.log(`Segundos:`, data.getSeconds());
// console.log(`Milisegundos:`, data.getMilliseconds());
// console.log(`Dia da semana:`, data.getDay());

// Se você fizer date.now() no console, voltará para ti o número de miléssimos rodados desde o marco zero.
// console.log(Date.now());
    // e se jogarmos dentro do new Date(1625267621214); teremos a data atual, algumas vezes será visto em códigos esse tipo de número, que pode representar milessegundos ou até mesmo segundos.
    // Mas no caso do JavaScript, é usado milessegundos.

// Função que retorna a data:
function zeroNaEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = zeroNaEsquerda(data.getDate());
    const mes = zeroNaEsquerda(data.getMonth() + 1);
    const ano = zeroNaEsquerda(data.getFullYear());
    const hora = zeroNaEsquerda(data.getHours());
    const minutos = zeroNaEsquerda(data.getMinutes());
    const segundos = zeroNaEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} as ${hora}:${minutos}:${segundos}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);

// // curiosidade sobre o MARCO 0:
// // Essas datas giram em torno da TimeStamp Unix ou Era unix, que é considerada a data 0;
// // Se eu colocar um 0 dentro do parâmetro new Date() aparecerá a data 01/01/1970 que é considerada a data 0.
// const data1 = new Date(0);
// console.log(data1.toString()); // Apareceu 31/12/1969 pois estamos 3 horas negativas ao GMT (GreenWich Mean Time)

// // Caso a gente queira deixar certinho na data 01/01/1970 devemos fazer o seguinte:
// const tresHoras = 60 * 3 * 60 * 1000; // Um segundo tem 1000 milésimos
// const data2 = new Date (0 + tresHoras);
// console.log(data2.toString()); // Nós teremos 1/1/1970 á meia-noite

// const umDia = 60 * 24 * 60 * 1000; // Adicionando mais um dia para ficar 02/01/1970;
// const data3 = new Date(0 + tresHoras + umDia);
// console.log(data3.toString());

// // Fazendo a minha data e hor a partir do marco 0
// const cinquentaEUmAno = 51 * 365 * 24 * 60 * 60 * 1000;
// const seteMeses = 194 * 24 * 60 * 60 * 1000;
// const umDiazin = 24 * 60 * 60 * 1000;
// const tresH = 60 * 3 * 60 * 1000;
// const maisUnsMinutos = 23 * 60 * 1000;
// const data4 = new Date(0 + cinquentaEUmAno + seteMeses + umDiazin + tresH + maisUnsMinutos);
// console.log(data4.toString()); //  02/07/2021 as 00:23
