/*1- Escreva um programa em Javascript que funcione como um cadastro de livros e atenda aos seguintes
requisitos:

- Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
- O menu interativo deve mostrar no topo a quantidade de livros cadastrados.
- O menu deve ter a opção de salvar um livro.
- Para salvar um novo livro o programa deve pedir as seguintes informações:
    - Nome do escritor.
    - Quantidade de páginas.
    - Ano em que foi escrito.
    - Genero Textual.
- O menu também deve ter opção de mostrar todos os livros salvos.
*/

const livros = []; // Cria um array de livros
let opcao = ""; // Inicializa a variável para capturar uma opcao do menu

do { 
    // Mostra a quantidade de livros no array, mostra e captura as opções do menu que o usuário deseja
    opcao = prompt("Bem vindo ao cadastro de livros!\n" + "Quantidade de livros: " + livros.length + 
    "\n\nEscolha uma opção:\n" + 
    "1 - Cadastrar um novo livro\n" + 
    "2 - Mostrar os livros cadastrados\n" + 
    "3 - Sair"
    ); 

    switch(opcao) { // Switch case para criar o menu
        case "1": // Captura e salva as informações de um objeto livro
            const livro = {}; // Cria um objeto livro
            livro.autor = prompt("Qual o nome do autor:");
            livro.quantidadeDePaginas = parseInt(prompt("Qual a quantidade de páginas:"));
            livro.dataDePublicacao = parseInt(prompt("Data de publicação:"));
            livro.generoTextual = prompt("Qual o gênero textual:");

            const confirma = confirm("Deseja salvar este livro?\n" + // Cria uma janela para confirma o salvamento do livro
            "Autor: " + livro.autor + 
            "\nQuantidade de Páginas: " + livro.quantidadeDePaginas + 
            "\nData de publicação: " + livro.dataDePublicacao +
            "\nGênero textual: " + livro.generoTextual)

            if(confirma) {
                livros.push(livro) // Empurra o livro para o array de livros
            }
            break;
        case "2": // Mostra os livros salvos
            for(let i = 0; i < livros.length; i++) {
            alert(
                "Livro " + (i + 1) + 
                "\nAutor: " + livros[i].autor +
                "\nQuantidade de páginas: " + livros[i].quantidadeDePaginas +
                "\nData de publicação: " + livros[i].dataDePublicacao +
                "\nGênero textual: " + livros[i].generoTextual
                )
            }
            break;
        case "3": // Opçao para sair do programa
            alert("Saindo...");
            break;
        default: // Caso o usuário digitar uma letra que não está no switch, retorna a mensagem Opção inválida
            alert("Opção inválida");
            break;
    }
} while(opcao !== "3") // Executa o laço de repetição enquanto a opção é diferente da opção 3