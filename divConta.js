const prompt = require("prompt-sync")();
const total = prompt("Qual o valor total da conta? ")
const pessoas = prompt("Qual o número de pessoas? ")
const calc = total / pessoas;

if (pessoas < 2) {
    console.log("Número de Pessoas Inválidos");
}
else {
    console.log(`O valor por pessoa é R$${calc}`);
}