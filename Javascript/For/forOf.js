// For of é indicado para objetos iteravéis como: strings e arrays que possume índices

const nome = "Thiago Ferreira";

console.log(`\n Exemplo usando FOR CLASSICÃO \n`); 

for (let i = 0; i < nome.length; i++) {
    console.log(i,":",nome[i]); // Se a gente colocasse só o i, apenas nos retornaria o valor, como: 1 2 3 4
} // Mostrando os índices da nossa variável com o FOR CLASSICÃO

console.log(`\n Exemplo usando FOR IN \n`);

for (i in nome) {
    console.log(i, ":", nome[i]); // Se a gente colocasse só o i, apenas nos retornaria o valor, como: 1 2 3 4
} // Mostrando os índices com o FOR IN, apenas simplificando a condição

console.log(`\n Exemplo usando FOR OF \n`);

for ( let valor of nome){
    console.log(valor); // Já nesse ele apenas retorna o valor, então podemos deixar ele sozinho
} // NÃO IRÁ RETORNAR O ÍNDICE APENAS O VALOR. Isso funciona tanto para strings quanto para arrays

console.log(`\n Exemplo usando FOR OF com ARRAY \n`);
const animais = ["Cachorro", "Gato", "Lagarto", "Jacaré", "Vaca", "Boi"];
for (valor of animais) {
    console.log(valor);
} // Ele irá nos retornar o valor de cada índice

// Com o objeto já não podemos usar o FOR OF afinal ele não é iteravél
const cidades = {
        cidade: "Caxias do Sul",
        cidade2: "Roma",
        cidade3: "Bayern",
        cidade4: "Barcelona"
    }
    
for (let valor of cidades){
        console.log(valor);
    } // Tanto que se você tentar, aparecerá um erro falando que ele é iteravél

// Resumindo é quase a mesma coisa que os outros PORÉM com os outros para que nós tenhamos o mesmo resultado, temos que colocar o
// nome da variável junto com seu índex, nesse caso não é necessário, é só colocar o índex que já nos retornará o seu valor. 