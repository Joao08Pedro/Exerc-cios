const prompt = require("prompt-sync")();
const nota1 = +prompt("Qual a primeira nota do aluno? ");
const nota2 = +prompt("Qual a segunda nota do aluno? ");
const nota3 = +prompt("Qual a terceira nota do aluno? ");
const notas = (nota1, nota2, nota3)

const media = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / (2 + 3 + 5);

if (media > 8 && notas > 6) {
    console.log("Excelente!");
}

else {
    console.log(`O média é ${media}`);
    
}