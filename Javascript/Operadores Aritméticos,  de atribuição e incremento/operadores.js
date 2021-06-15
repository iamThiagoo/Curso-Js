// Operadores Aritméticos
//  + Adição/Concatenação
//      EXEMPLO: 
            const num = 5;
            const num2 = 10;
            console.log(num + num2); // Aqui ele está somando por as as variáveis foram reconhecidas como numbers

//      EXEMPLO 2:
            let numero = "10";
            let numero2 = "15";
            console.log(numero + numero2); //Aqui ele está concatenando, retornando o número 1015, pois a engine do JavaScript reconheceu essas duas variáveis como strings e então as concatenou transformando "10" + "15" em "1015".

//  - (Subtração), / (Divisão) e * (Multiplicação): É sem muito segredo, irão fazer suas derivadas funções de calculo. Não terá nenhuma diferença se tiver aspas entre os números nesse caso, ele fará o cálculo mesmo assim sem problema nenhum.

// Também temos **(Potenciação)
        let n1 = 10;
        let n2 = 2;
        console.log(n1 ** n2); // Resultará em 100 pois ele fará 10 * 10 = 100;

// % (Resto da Divisão): Ele divide o número e retorna o resto da divisão. 
// Por exemplo: Vamos fazer 10 % 3
//              1° Ele fará a divisão, lógicamente ele fará 10/3, porém 3*3 = 9 e 3*4 = 12
//              2° O número mais baixo perto do resultado é 9 sobrará 1 
//              3° Se chamar no console, ele retornará esse número que sobrou, no caso 1;
        let sobra = 10;
        let sobra2 = 3;
        console.log(sobra % sobra2);
                // Se o número for divisível pelo dividendo, retornará 0.

// OBSERVAÇÃO: Podemos fazer mais conta com mais de dois números e variáveis. Por exemplo:
        const primeiroNumero = 1;
        const segundoNumero = 2;
        const terceiroNumero = 3;
        console.log(primeiroNumero + segundoNumero * terceiroNumero); //Retorna 7 pois ele faz 2*3=6+1 = 7;

        // Caso eu queira que a soma seja feita primeiro, colocarei o parênteses entre eles. Por exemplo:
        console.log((primeiroNumero + segundoNumero) * terceiroNumero); // Retornará 9, pois 1+2=3*3=9;

                /*Ordem de procedência 
                        1°  ()
                        2°  **
                        3°  * / % (Se tivermos alguns deles na mesma conta, será a ordem será normal: Esquerda para a Direita)
                        4°  + -
                */


/*Incremento: Ás vezes teremos por exemplo um contador no nosso código (algo bem comum), para mudarmos o números teremos que usar a 
operação de incremento ++ (+1) ou --(-1). Por falar nisso, muitas vezes para o contador é usado a variável chamada i no código. Vamos ao
exemplo: */
    let i = 1; //Para fazer o incremento, NÃO DEVEMOS USAR A CONSTANTE DEVE SER SEMPRE LET
    i++; //2
    ++i; // também pode ser definido assim, aliás o resultado aqui é 3.
    i++; //4
    console.log(i);

    // Diferença entre os dois tipos de incremento:
        // Se você incrementar depois ele fará primeiro a chamada do console trazendo no exemplo abaixo 2, e depois incrementará mas deixará o resultado oculto. Para fazer aparecer o resultado que nós queremos que é três, teremos que chamar de novo. Exemplo:
            i = 2;
            console.log(i++); //Se fosse só isso, dará apenas 2 no console, teremos que chamar ele de novo para dar 3.
            console.log(i);

        // Se você incrementar antes já vai aparecer para a gente o resultado, pois primeiro ele incrementa e depois faz a sua função de mostrar o resultado:
            i = 2;
            console.log(++i); //Dará 3 logo de cara.

// Decremento (--) funciona igual ao incremento;

// Operadores de atribuição: +=, -=, *=, /=, etc
// EXEMPLO:
        let passo = 5;
        let contador = 0;
        contador += passo; // Nesse exemplo temos um contador que faz 3 chamadas de 5, começando pelo 0;
        contador += passo;
        contador += passo;
        console.log(contador); // E resultará em 15

// Digamos que queremos transformar um "número" que está em string para um número number para que possamos calculá-los sem concatená-los com já vimos. Como podemos fazer? Segue a dica 
        let numeroQualquer = 10;
        let numeroQualquer2 = parseInt("20"); // Usamos parseInt() para transformar um número que está dentro de uma string em inteiro.
        console.log(numeroQualquer + numeroQualquer2); // Retornará 30
        
        numeroQualquer = 20;
        numeroQualquer2 = parseFloat("7.5"); // Caso a gente NÃO queira deixar o número inteiro e sim deixá-lo do jeito que foi declarado, usamos parseFloat().
        console.log(numeroQualquer + numeroQualquer2); // Retornará 27.5

        numeroQualquer = 15;
        numeroQualquer2 = Number("8.9"); //Ou usamos simplesmente Number() que aí a engine do JavaScript irá se virar, não importando se é inteiro ou número decimal;
        console.log(numeroQualquer + numeroQualquer2);