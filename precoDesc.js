const prompt = require("prompt-sync")();
const preco = prompt ("Me de o Preço Original: ");

const desc = prompt ("Me de a Porcentagem de Desconto: ")

if (desc > 50) {
    console.log("Desconto muito alto!");   
}