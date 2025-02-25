const prompt = require ("prompt-sync")();
const temp = +prompt ("Me de uma temperatura em Fahrenheit: ")
const calc = (temp -32) * 5 / 9;

if (calc > 1000 || calc < -1000) {
    console.log("Valor Irreal");
}
else {
    console.log(`Fahrenheit convertido para Celsius é ${calc}`);
    
}
