// Erros são bem imprtantes para o aprendizado sim, mas quando você está prestes a lançar o produto ao usuário final o seu programa tem que estar
// em perfeito estado e sem nenhum erro. Afinal esse simples erro pode virar uma bola de neve e virar algo potêncialmente inseguro para o usuário.
// Por isso criaram o try e catch para ajudar a identificar possíveis erros no seu código

// console.log(helloWorld); // Variável não declarada: ERRO NO CONSOLE

// Porém em um código grande para que não ocorra erros bobos, você usará o try e catch para fazer uma revisão no código que você colocará dentro do bloco try

// try{
//     console.log(helloWorld);
// } catch (error) { // Geralmente usasse: e, error, err
//     console.log(`Tem erro aí amigo!`);
//     console.log(error);
// }

// Ele irá revisar: Se não tiver erro, ele retornará o que tiver dentro da variável
//                  Se tiver erro, ele mostrará a msg que você deixou escrito no console.log();

// E SE DER ERRO, TRATE ELE! NÃO DEIXE SEU USUÁRIO VER QUE TEM UM ERRO. NESSE CASO DARIA PRA TRATAR ESSE ERRO APENAS CRIANDO UMA VARIÁVEL, MAS SEMPRE SOLUCIONE 
// OS SEUS ERROS.

// Além disso a gente pode lançar um erro, pois pode ser muito útil se tiver um outro desenvolvedor trabalhando com a gente capturar esse erro depois
// Para isso a gente utiliza o throw para informar um erro
const soma = (x, y) => {
    if (typeof x !== "number" || typeof y !== "number"){
        throw new ReferenceError(`X ou Y não são números`); // Com a adição do new ReferenceError: ele deixa de indicar apenas o erro e adiciona onde está localizado o erro
    }

    return x + y;
};

try{
    console.log(soma(10, 50)); // correto, não aparecerá o erro
    console.log(soma(10, `10`)); // Incorreto, aparecerá o erro pois o y é uma string
} catch (error) {
    console.log(error);
    console.log(`Ops...parece que deu algum probleminha em alguma coisa. Relaxa não foi culpa sua!`); // Não deixe seu usuário saber do erro.
}

// Se ocorrer algum erro no bloco try, o catch será executado.
// Se não acontecer nenhum erro, o bloco try será executado.