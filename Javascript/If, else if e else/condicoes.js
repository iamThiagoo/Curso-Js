// Entre 0-11: Bom dia!
// Entre 12-17: Boa tarde!
// Entre 18-23: Boa noite!

const hora = 13; // Nesse exemplo não vamos usar o new Date(); ainda
    if(hora >= 0 && hora <= 11){
        console.log("Bom dia!");
    } else if ( hora >= 12 && hora <= 17){
        console.log("Boa tarde!");
    } else if ( hora >= 18 && hora <=23){
        console.log("Boa noite!");
    }
    else{
        console.log("Olá!");
    }

// Consigo usar um if sozinho;
// Com a palavra else, eu preciso de um if antes;
// Eu posso ter vários else ifs na checagem no meu código;
// Só posso ter um else na minha condição;
// Podemos verificar dessa forma:
    const tenhoGrana = 0;
        if(tenhoGrana){
            console.log("Vou sair de casa hoje!");
        } else{
            console.log("Não vou sair de casa hoje pois estou sem grana!");
        }