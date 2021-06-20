console.log("O nome do meu cliente é \"Ricardo\""); //Uma forma de utilizar aspas duplas dentro de uma string de aspas duplas é usar \"\"

console.log("Esse é o \\texto"); // Caso queira colocar uma barra invertida no texto, só colocar \\

// Tudo que ter () = função, tudo que não tiver é considerado um atributo do JavaScript;

// O índice 0 representa o primeiro indíce da string
    //           0123456789...
    console.log("O inter este ano tá foda."[4]); // Se eu colocar [], e o número da letra nesse console aparecerá apenas a letra escolhida

    // Mais um exemplo
    //                     0123456789...
    const timeDoCoração = "Internacional"; 
    console.log(timeDoCoração[12]); // Nesse caso escolhi o 12, o doze é represetado pela letra L (ultima letra da palavra)
    // Se a gente inventa de escolher um outro número que não tem no nosso exemplo, o console os mostrará "undefined";

//Porém nós podemos usar um outro tipo, irei usar o mesmo exemplo de cima
    console.log(timeDoCoração.charAt(12)); // Esse charAt terá a mesma função que a de cima, que é pegar um elemento de uma variável.

    console.log(timeDoCoração.charAt(13)); //Nesse caso, onde não tem o número, ele não dará nenhum aviso ou erro. Apenas mostrará um valor vazio

// Temos no JavaScript uma outra função que concatena que não é o sinal de +
console.log(timeDoCoração.concat(" é um time do Sul do Brasil."));
    // Porém é só para ser uma curiosidade, pois é muito mais prático usar o "+" ou usar template de string

// Também posso saber em qual indice começa tal palavra/ qual númerozinho que começa a palavra
let textoQualquer = "Acordei, me arrumei, almocei e depois fui estudar JavaScript a tarde toda";
//                   0123456789...
console.log(textoQualquer.indexOf("depois")); // Retorna para a gente o número 31

    // Mas não paramos por ai, temos o LastIndexOf() que é o inverso do indexOf(), ele começa contando pelo final ao início porém dará o mesmo resultado que o indexOf
    console.log(textoQualquer.lastIndexOf("meu"));

// Expressão regular
console.log(textoQualquer.match(/[a-z]/g)); // O que ele faz? Ele irá retornar no nosso console, todas as letras minúsculas da nossa variável, onde o que faz diferença aqui é o "g"

//Search 
console.log(textoQualquer.search(/[A-Z]/)); //Aqui ele retorna onde que começa o que a gente pediu, que é a letra maíscula;
console.log(textoQualquer.search(/[a-z]/)); //Aqui ele retorna onde que começa as letras minúsculas na nossa variável;
console.log(textoQualquer.search(/[J]/)); // To pedindo para ele me dizer onde que está a letra J na minha variável;

// Diferença entre search e o match: Ele são praticamente iguais pois retornam o índice porém no match acaba aceitando expressões regulares.

//Replace: Muda as palavras em uma variável do tipo string
console.log(textoQualquer.replace("JavaScript", "Python")); // No caso, ele está substituíndo a palavra JavaScript do nosso texto por Python. Se vc rodar aquele console.log ali em cima, vai estar ali a mudança.
    // OBS: Ele NÃO mudará a nossa variável para o resto do código, apenas mudará de palavra nessa linha. Se você der um console.log(textoQualquer) depois, verá que voltará a palavra JavaScript.


//Length: Nós iremos ver o descobrir o tamanho da nossa variável
console.log(textoQualquer.length); // Retornará 73, pois ele conta apartir do 1, diferente do índice que começa no 0;


//Slice: pegar um trecho da variável mas para isso você terá que indicar o número inicial do índice e o seu término.
console.log(textoQualquer.slice(50,60)); // Formará a palavra JavaScript
//                               I,F     : I de íncio, F de final
    // No slice também podemos usar números negativos
    console.log(textoQualquer.slice(-4)); // formará a palavra toda

//Substring: Uma outra função que faz praticamente a mesma coisa que o slice, é a função substring. Vamos ver um exemplo:
    console.log(textoQualquer.substring(textoQualquer.length -23)); // Aqui teremos: "JavaScript a tarde toda";
        //Caso você queira indicar um termino poderá ser feito da seguinte forma:
            console.log(textoQualquer.substring(textoQualquer.length -23, textoQualquer.length -13)); // Aí preenche a palavra "JavaScript"
                //Porém é muito mais indicado usar a função slice por ser mais prática e utilizar menos código

//Split: Caso eu queira dividir a minha variável, podemos usar a função split() onde ela tranformará a nossa variável em uma array.
console.log(textoQualquer.split(",")); // Aqui ele dividirá a nossa variável a cada vírgula;
console.log(textoQualquer.split(" ")); // Aqui dividirá cada palavra do nosso texto;
    //Se eu quiser que divida até um limite, só fazer:
        console.log(textoQualquer.split(" ", 3)); // Aqui só será repetido três vezes, ou seja: "Acordei", "me", "arrumei". Tudo isso dentro de um array

//toUppercase e toLowercase: Deixa o todo texto respectivamente maiúsculo e minúsculo;
    console.log(textoQualquer.toUpperCase());
    console.log(textoQualquer.toLowerCase());