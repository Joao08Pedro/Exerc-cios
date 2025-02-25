const prompt = require("prompt-sync")();
const n1 = +prompt ("Digite o primeiro número: ")
const n2 = +prompt ("Digite o segundo número: ")
const calc = prompt ("Escolha entre +, /, -, *: ")

const soma = n1 + n2;
const multi = n1 * n2;
const sub = n1 - n2;
const div = n1 / n2;


if (calc === "+") {
    console.log(`Sua soma é ${soma}`);    
}

if (calc === "*") {
    console.log(`Sua multiplicação é ${multi}`);
}

if (calc === "-") {
    console.log(`Sua subtração é ${sub}`);
}

if (calc === "/") {
    if (n2 === 0) {
        console.log("BARRIL!");
    } else {
    console.log(`Sua divisão é ${div}`);
    }
}