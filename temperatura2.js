const prompt = require("prompt-sync")();
const cel = +prompt("Quantos Celsius? ")
const calc = (cel * 9 / 5) + 32;

if (calc <= 0) {
    console.log("Temperatura abaixo de zero!");
}

else {
    console.log(`Você tem ${calc} Fahrenheit`);
}