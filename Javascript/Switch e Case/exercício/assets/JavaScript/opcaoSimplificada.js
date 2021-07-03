// No finalzinho da aula, o professor apresentou uma nova opção de fazer o mesmo código, sem usar o switch e com uma menor quantidade de linhas

const h1 = document.querySelector("#data");
const data = new Date();
h1.innerHTML = data.toLocaleString(`pt-BR`, {dateStyle: `full`, timeStyle: `short`}); // De 93 linhas de código, nessa estamos usando apenas 3

// A opção mais indicada para a solução do problema é usar os recursos nativos da linguagem como esse exemplo por usar uma menor quantdade de linhas