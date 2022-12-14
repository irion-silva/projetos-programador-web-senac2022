/*Escreva um programa javascript para simular um baralho de cartas.
O programa deve iniciar mostrando na tela um menu interativo
contendo a quantidade de cartas que estão atualmente no baralho e as opções
de "Adicionar uma carta", "Puxar uma carta" e "Sair.
Ao escolher "Adicionar uma carta", o programa deve perguntar o nome da carta e adicioná-la no topo do baralho.
Ao escolher "Puxar uma carta", o programa deve retirar a carta do topo
do baralho e mostrar na tela o nome da carta puxada.
O Programa só deve ser encerrado ao escolher a opção de "Sair", caso contrário deve voltar ao menu.*/

let fila = [];
let opcao = "";

do {
    let msgCartas = "";
    for (let i = 0; i < fila.length; i++) {
        msgCartas += (i + 1) + "ª - " + fila[i] + "\n"; 
    }

    opcao = prompt("Cartas no baralho: " + fila.length + "\n" + msgCartas + "\nInforme uma opção \n" + "1 - Adicionar uma carta \n" + "2 - Puxar uma carta \n" + "3 - Sair");
    
    switch(opcao) {
        case "1":
            const cartaAdicionada = prompt("Informe o nome da carta: ");
            fila.push(cartaAdicionada);
            break;
        case "2":
            const cartaConsultada = fila.pop()
            if (!cartaConsultada) {
                alert("Não há cartas no baralho");
            } else {
                alert(cartaConsultada + " foi removida da fila");
            }
            break;
        case "3":
            alert("Encerrando...");
            break;
        default:
            alert("Opção inválida.");
            break;
    }
} while(opcao !== "3")