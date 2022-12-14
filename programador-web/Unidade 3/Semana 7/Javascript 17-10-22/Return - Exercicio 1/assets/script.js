/* 4 Crie uma função com o objetivo de calcular a media de um aluno.
- Peça o nome do aluno
- Calcule a média dessas cinco notas
- Após feito isso faça uma condição com if else falando que 
se ele tirou uma nota menor ou igual a 4 ele reprovou, se for 
igual ou maior que cinco que ele esta dentro da média */

function media() {
    let nome = prompt("Qual o seu nome?");

    let nota1 = parseFloat(prompt("Qual a primeira nota?"));
    let nota2 = parseFloat(prompt("Qual a segunda nota?"));
    let nota3 = parseFloat(prompt("Qual a terceira nota?"));
    let nota4 = parseFloat(prompt("Qual a quarta nota?"));
    let nota5 = parseFloat(prompt("Qual a quinta nota?"));

    let resultado = (nota1 + nota2 + nota3 + nota4 + nota5)/5;

    if(resultado <= 4) {
        return alert("Reprovado\n" +nome + " sua média é: " + resultado);
    } else if (resultado >= 5 ){
        return alert("Aprovado\n" + nome + " sua média é: " + resultado);
    }
}

media();