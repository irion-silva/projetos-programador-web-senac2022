/*Atividade:
2 - Crie um array que componha 3 arrays, e nesses 3 array que haja 3 dados. Após feito isso, insira um dado no array que esteja no final da
da posição 0 e no inicio da posição 2. Feito isso, referencie o array da posição zero e os dados que você inseriu.*/


let animais = [["Abelha", "Babuíno", "Cachorro"],["Elefante", "Foca", "Iguana"],["Macaco", "Tartaruga", "Vaca"]];

animais[0].push("Raposa");
console.log(animais[0][3]);

animais[2].unshift("Rato");
console.log(animais[2][0]);

console.table(animais);