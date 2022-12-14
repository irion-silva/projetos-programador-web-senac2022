/*Atividade:
Calculo do IMC utilizando o IF... ELSE IF... ELSE
Peça ao usuário o nome, peso e altura
Declare uma variável onde será feito o calculo(a formula está citada abaixo)
Após ter feito isso, declare uma condição if... else if... else de que:
IMC                |  Classificação
Menor do que 18,5  |  Abaixo do peso
Entre 18,5 e 24,9  |  Peso normal
Entre 25 e 29,9    |  Acima do peso(sobrepeso)
Entre 30 e 34,9    |  Obesidade I
Entre 35 e 39,9    |  Obesidade II
Maior do que 40    |  Obesidade III*/

let nome = window.prompt("Informe o seu nome.")
let peso = parseFloat(window.prompt("Informe o seu peso."))
let altura = parseFloat(window.prompt("Informe a sua altura"))

let imc = peso/(altura*altura)

if (imc <= 18.5) {
    window.alert(nome + ", seu IMC é: " + imc + ", e você está ABAIXO DO PESO.")
} else if (imc < 24.9) {
    window.alert(nome + ", seu IMC é: " + imc + ", e você está com PESO NORMAL.")
} else if (imc < 29.9) {
    window.alert(nome + ", seu IMC é: " + imc + ", e você está acima do PESO(sobrepeso)")
} else if (imc < 34.9) {
    window.alert(nome + ", seu IMC é: " + imc + ", e você está com Obesidade I")
} else if (imc < 39.9) {
    window.alert(nome + ", seu IMC é: " + imc + ", e você está com Obesidade II")
} else if (imc > 40) {
    window.alert(nome + ", seu IMC é: " + imc + ", e você está com Obesidade III")
}