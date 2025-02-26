const prompt = require("prompt-sync")();
const jantar = +prompt ("Qual o valor do Jantar? ")

const nota = prompt ("O atendimento foi bom (S/N)?")
const gorj = jantar * 0.10


if (nota === "S" || nota === "s") {
    console.log(`Que bom que gostou do nosso atendimento! O valor do jantar ficará ficará por ${gorj}R$`);
}
else {
    console.log(`Sentimos muito que você não tenha gostado do nosso atendimento :/... O valor do jantar ficará por ${nota}`)
}