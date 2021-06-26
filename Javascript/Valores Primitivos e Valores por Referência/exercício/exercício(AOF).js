function resultadoFormulario(){
    const form = document.querySelector("form");
    const resultado = document.querySelector("#resultado");
    const cadastros = [];

    function formulario(evento){
        evento.preventDefault();

        const nome = form.querySelector("#nome").value;
        const sobrenome = form.querySelector("#sobrenome").value;
        const peso = form.querySelector("#peso").value;
        const altura = form.querySelector("#altura").value;

        let pessoas = {
            nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            altura: altura
        }
        
        cadastros.push({
            nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            altura: altura,
        });
        
        console.log(cadastros);
        resultado.innerHTML += `Olá ${nome} ${sobrenome} que possui ${peso}kg e ${altura}. Tudo bem? <br>`;
    }
    form.addEventListener("submit", formulario);
}

resultadoFormulario();