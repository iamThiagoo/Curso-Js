/* Em JavaScript nós temos os seguintes operadores de comparação:
    > (maior que)
    < (menor que)
    >= (maior ou igual)
    <= (menor ou igual)
    == (igualdade) (checa apenas o valor) ** Não é recomendado usar esse tipo de operador**
    === (igualdade estrita) (checa o valor e o tipo)
    != (diferente) ** Também não é recomendado**
    !== (diferente estrito) (checar o valor é o tipo)

    Vamos a alguns exemplos: (True ou False)

    console.log( 10 > 5); // True;
    console.log(10 < 5 ); // False;
    console.log( 10 >= 5); // True;
    console.log( 10 <= 5); // False;
    console.log( 10 == 10); // True;
    console.log( 10 == "10"); // True;
    console.log( 10 === 10); // True;
    console.log( 10 === "10"); // False; 
    console.log( 10 != 10) // False;
    console.log( 10 != 5); // True;
    console.log( 10 !== 10); // False; 
    console.log( 10 !== "10"); True;

    Bem, mas então por que não é recomendado usar == e != ? Bem vamos ao exemplo:

    let num = 10;
    let num2 = "10";
    console.log( num == num2); // Ele irá nos retornar true, pois o JS irá converter o "num2" de string para number e isso não é legal pois
    pode ter causar um problema lá pra frente. A melhor coisa que você faz é transformar tudo que é string para number e não se esqueça de usar "===" para
    comparar.

*/
