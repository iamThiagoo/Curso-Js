// try {
//     // É executado quando não há erros.
// } catch (e) {
//     // É executado quando há erros.
// } finally {
//     // Executado sempre.
// }

// Geralmente se usasse apenas try e catch porém em alguns momentos a gente precisará do finally.
// O finally sempre será executado, DANDO ou NÃO erro.


// Function feita durante a aula:
const suaHora = (data) => {
    if (data && !(data instanceof Date)) {
        throw new TypeError(`Esperando uma instância de date...`);
    }

    if (!data){
        data = new Date();
    }

    return data.toLocaleTimeString(`pt-BR`, {
        hour: `2-digit`,
        minute: `2-digit`,
        second: `2-digit`,
        hour12: false
    });
}

try{ // Nunca esqueça de colocar após um try, um catch ou um finally.
    const data = new Date(`06/12/2003 16:00:00`);
    const hora = suaHora(data);
    console.log(hora);
} catch (e){
    // Tratar erro
} finally {
    console.log(`Tenha um ótimo dia!`);
}