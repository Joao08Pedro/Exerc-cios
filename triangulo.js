const prompt = require("prompt-sync")();
const base = +prompt("Me de a base do triângulo: ")
const alt = +prompt("Me de a altura do triângulo: ")

const calc = base * alt / 2;

if (base <= 0 || alt <= 0) {
    console.log("Valores Inválidos!");
}

else {
    console.log(`A área do triângulo é ${calc}`);
    
}