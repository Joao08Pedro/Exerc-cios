const prompt = require("prompt-sync")();
const valor = +prompt ("Me de o Valor do Produto: ")
const escolha = prompt ("Digite (P) para Parcelar ou (PV) para Pagar a Vista: ")

const parc = valor * 1.10;

if (escolha === "P") {
    console.log(`Parcelado (3x): R$${parc}`);
}

else if (escolha ==="PV") {
    console.log(`À Vista: R$${valor}`);
}
    