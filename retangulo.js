const prompt = require ("prompt-sync")();
const altura = +prompt ("Digite a altura: ")
const largura = +prompt ("Digite a largura: ")

const calc = altura * largura

if (altura, largura > 0) {
    console.log(`Sua AREA do retangulo é ${calc}`);
}
else {
    console.log("Os valores tem que ser positivo");
}