// Essas duas funções estão disponíveis tanto no Node quanto no Navegador

const suaHora = () => {
    let data = new Date();

    return data.toLocaleTimeString(`pt-BR`, {
        hour12: false
    }); 
}

// // console.log(suaHora()); // Mostra a hora para gente porém não atualiza ela

// // Para fazer ela atualizar sozinha existe a função setInterval()
// // Que vai configurar um intervalo de tempo que determina uma função que será executada em algum momento.

// // setInterval(suaHora); // Não dá certo pois nós determinamos que aquela função apenas retornasse a hora, então para funcionar temos que criar uma outra função

// const intervaloDeTempo = () => {
//     console.log(suaHora());
// }

// setInterval(intervaloDeTempo, 1000); // Apenas passando uma referência sem ativar a minha ação e depois determinando com milissegundos o intervalo de tempo
// Lembrando que 1 segundo = 1000 milissegundos 


// Isso é o bem básico de se fazer, mas o mais comum para que você não precise criar 2 funções e depois chamar o setInterval, seria fazer uma função dentro do setInterval:
const timer = setInterval(function() { // Usando função anônima
    console.log(suaHora());
}, 1000); // Para fazer para o Code Run é CTRL + ALT + M ou se não CTRL + SHIFT + P e "Stop Code Run";
    // e nós podemos muito bem jogar essa função dentro de uma variável se a gente quiser.


// Nós temos uma outra função chamada setTimeout() que faz parar a execução do nosso setInterval();
setTimeout(function (){
    clearInterval(timer);
    console.log(`Parei o seu relógio!`);
}, 5000); // Mandamos ela parar de ser executada após 5 segundos e mandamos uma mensagem para o console;


// RESUMO DO CONTEÚDO:

// setInterval = atualiza o nosso relógio automáticamente com o tempo que determinamos;
// setTimeout = para o relógio em determinado tempo que configuramos;