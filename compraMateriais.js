const prompt = require("prompt-sync")();
const nome = prompt("Nome do Cliente? ")
const parafusos = prompt("Quantos Parafusos você quer? ")
const porcas = prompt("Quantas Porcas você quer? ")
const arruelas = prompt("Quantas Arruelas você quer? ")

const calc = porcas + arruelas

if (parafusos < 1 || porcas < 1 || arruelas < 1) {
    console.log("Quantidade Inválida!");
    
}
else if (parafusos < calc) {
     console.log("Verifique se há parafusos suficientes!");
}
