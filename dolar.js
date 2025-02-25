const prompt = require("prompt-sync")();
const mede = +prompt ("mede reais: ")
const cotacao = +prompt ("Cotação do dolár: ")
const calculo = mede * cotacao

if (cotacao <= 0) {
    console.log()
}