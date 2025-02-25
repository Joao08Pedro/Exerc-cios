const prompt = require ("prompt-sync")();
const nome = prompt ("Digite seu nome para seu bom dia: ")

if (nome) {
    console.log(`Bom dia ${nome} :D`)
}
else {
    console.log("Quem é tu (Nome Inválido)");
    
}