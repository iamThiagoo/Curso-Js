// 1° DIFERENÇA

/* Pois bem, se lembra que com o LET não podemos redeclarar uma variável, exemplo: let nome = "Thiago"; se quisermos mudar essa variável teremos que fazer o seguinte: let nome = "Thiago";
                                                                                   let nome = "Paulo";                                                                 nome = "Paulo";

 Já com VAR nós podemos redeclarar ela, deixando ela assim: var nome = "Thiago";
                                                            var nome = "Paulo";

 Esse problema com o var foi arrumado no ECMAScript 2015 (ES6);

 Caso você faça: nome = "Thiago"; sem especificar se é let, var ou const pode dar erro em outras variáveis no seu sistema, então não faça.
 
 UTILIZAR SEMPRE: let e const
*/