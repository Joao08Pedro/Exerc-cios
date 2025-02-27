const prompt = require("prompt-sync")();
const nota1 = +prompt("Quanto o Aluno tirou na A1? ");
const nota2 = +prompt("Quanto o Aluno tirou na A2? ");

const soma = nota1 + nota2;
const media = soma / 2;

if (media <= 5) {
    console.log(`O Aluno Reprovou com ${media}`);
}

else {
    console.log(`O Aluno foi Aprovado com ${media}`);
}