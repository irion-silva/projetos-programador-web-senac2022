let pessoa = {
    primeiroNome: 'Irion',
    idade: 25,
    altura: 1.62
}

pessoa.altura = 1.65;
console.log(pessoa);

pessoa.corDosOlhos = 'Castanho';
console.log(pessoa);

delete pessoa.idade;
console.log(pessoa);

console.log('altura' in pessoa);
console.log('idade' in pessoa);