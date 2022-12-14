/*1 - Crie um array com 10 posições
a. Coloque os elementos em ordem alfabética
b. Chame o elemento que esteja na posição 8 e na posição 3
c. Adicione um elemento no final do Array
d. Remova o último elemento do Array*/

let listaDeNomes = ['Claudio', 'Carlos', 'Pedro', 'Paula', 'Fernanda', 'Jose', 'Marcos', 'Henrique', 'Manoel', 'Luiza', 'Ana'];

listaDeNomes.sort();
console.log(listaDeNomes)
console.log(listaDeNomes[8]);
console.log(listaDeNomes[3]);
listaDeNomes.push('Leticia');
console.log(listaDeNomes);
listaDeNomes.pop();
console.log(listaDeNomes);