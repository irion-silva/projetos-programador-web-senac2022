/*6. Faça um script que calcule a tabuada de 1 a 10 (Observe o exemplo passado na aula
anterior).*/

let tabuada = 0
do {
    tabuada = parseInt(window.prompt("Informe um número para calcular sua tabuada:"));
} while (tabuada < 0) 

for(count = 1; count <= 10; count++) {
    console.log(tabuada + " x " + count + " = " + tabuada*count);
}