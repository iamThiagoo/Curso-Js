const numero = 53;

if(numero >= 0 && numero <= 20){
    console.log(`Seu número está entre 0 e 20!`);
} else if (numero > 20 && numero <= 40) {
    console.log(`Seu número está entre 20 e 40!`)
} else if ( numero > 40 && numero <= 60){
    console.log(`Seu número está entre 40 e 60!`)
} else if (numero > 60 && numero <= 80){
    console.log(`Seu número está entre 60 e 80!`);
} else if( numero > 80 && numero <= 100){
    console.log(`Seu número está entre 80 a 100!`);
}
else{
    console.log(`Seu número é maior que 100!`);
}

// CUIDADO PARA NÃO DEIXAR DUAS CONDIÇÕES VERDADEIRAS, POIS QUANDO A PRIMEIRA APARECER A ENGINE DO JS VAI IGNORAR O RESTO DA SUA CONDIÇÃO, IRÁ SAIR DELA E CONTINUÁRA EXECUTANDO
// O RESTO DO SEU CÓDIGO.

// Descoberta sem querer enquanto programava: ctrl + ] -> abre uma nova janela no vs code.