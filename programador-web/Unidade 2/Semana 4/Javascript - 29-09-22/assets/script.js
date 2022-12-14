// let nota1 = 10
// let nota2 = 10
// let nota3 = 10

// let resultado = (nota1 + nota2 + nota3)/3

// if (resultado <= 8.9) {
//     console.log(resultado)
//     console.log("Parabéns, você foi aprovado.")
// } else if (resultado >= 9) {
//     console.log(resultado)
//     console.log("Você foi aprovado com excelência.")
// } else {
//     console.log(resultado)
//     console.log("Você foi reprovado.")
// }

let nome = window.prompt("Informe o seu nome:")
let sobrenome = window.prompt("Informe seu sobrenome:")
let id = window.prompt("Qual a sua idade?")
let escola = window.prompt("Qual a sua instituição de ensino?")

idade = parseInt(id)

if (idade == 16) {
    window.alert(escola + "\n" + nome + " " + sobrenome + ", você poderá participar do evento.")
} else if (idade >= 18) {
    window.alert(escola + "\n" + nome + " " + sobrenome + ", você é velho demais para particiar do evento.")
} else { 
    window.alert(escola + "\n" + nome + " " + sobrenome + ", infelizmente você não poderá participar.")
}