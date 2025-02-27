const prompt = require("prompt-sync")();
const n1 = +prompt("Me de um número: ");

const prox = n1 + 1
const ant = n1 - 1

if (n1 % 2 === 0) {
    console.log(`${n1} é um número par: ${ant} e ${prox}`);
}
else {
    console.log(`${n1} é um número ímpar: ${ant} e ${prox}`);
}