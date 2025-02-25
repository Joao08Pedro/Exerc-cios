const prompt = require ("prompt-sync")();
const horario = +prompt ("Digite o número de horas: ");
const porSegundo = horario * 3600;

if (porSegundo > 0){
    console.log(`Os segundos são ${porSegundo} segundos`);
}
else {
    console.log("ERRO");
}
