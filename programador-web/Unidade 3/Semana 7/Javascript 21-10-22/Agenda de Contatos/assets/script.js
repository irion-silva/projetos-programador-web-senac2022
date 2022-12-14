function addContato() {
    const listaDeContato = document.getElementById('lista-de-contatos'); // Criando a váriavel para utilizar o elemento HTML no javascript.

    const titulo = document.createElement('h3'); // Criando um elemento h3, e armazenando ela na váriavel titulo
    titulo.innerText = "Contato"; // Dando um valor para minha tag h3

    const listaNaoOrdenada = document.createElement('ul'); // Criando um elemento ul, e armazenando na variável ListaNaoOrdenada

    const linhaNome = document.createElement('li');  // Criando um elemento li, e armazenando na variável linhaNome.
    linhaNome.innerText = "Nome: "; // Dando um valor para minha tag li
    const inputNome = document.createElement('input'); // Criando um elemento input, e armazenando na variável inputNome
    inputNome.type = 'text';  // Especificando o tipo do input como texto.
    inputNome.name = 'nome-completo'; // Dando um name para o elemento.
    linhaNome.appendChild(inputNome); // Acrescentando um elemnto filho a variável linhaNome.
    listaNaoOrdenada.appendChild(linhaNome); // Acrescentando um elemento filho a variável ListaNaoOrdenada
    listaNaoOrdenada.appendChild(document.createElement('br')); // Acrescento um elemento de quebra de linha como filho na variável listaNaoOrdenada.
    
    const linhaTelefone = document.createElement('li'); // Criando um elemento li, e armazenando na variável linhaTelefone
    linhaTelefone.innerText = "Telefone: "; // Dando um valor ao meu elemento
    const inputTelefone = document.createElement('input'); // Criando um elemento input, e armazenando na variável inputTelefone
    inputTelefone.type = 'text'; // Especificando o tipo do meu input como texto.
    inputTelefone.name = 'telefone'; // Dando um name ao meu elemento.
    linhaTelefone.appendChild(inputTelefone); // Acrescentando um elemento filho a variável InputTelefone
    listaNaoOrdenada.appendChild(linhaTelefone); // Acrescentando um elemento filho a variável ListaNaoOrdenada
    listaNaoOrdenada.appendChild(document.createElement('br')); // Acrescento um elemento de quebra de linha como filho na variável listaNaoOrdenada.

    const linhaEndereco = document.createElement('li'); // Criando um elemento li, e armazenando na variável linhaEndereco
    linhaEndereco.innerHTML = '<label for="address">Endereço: </label>'; // dando um valor ao meu elemento, com o innerHTML é possível adicionar tags como conteúdo.
    const inputEndereco = document.createElement('input'); // Criando um elemento input, e armazenando a váriável inputEndereco
    inputEndereco.type = 'text'; // Especificando o tipo do meu input como texto.
    inputEndereco.name = 'address'; // Dando um name ao meu elemento.
    inputEndereco.id = 'address'; // Dando um id para meu elemento
    linhaEndereco.appendChild(inputEndereco); // Acrescentando um elemnto filho a variável linhaEndereco
    listaNaoOrdenada.appendChild(linhaEndereco); // Acrescentando um elemento filho a variável listaNaoOrdenada
    listaNaoOrdenada.appendChild(document.createElement('br')); // Acrescento um elemento de quebra de linha como filho na variável listaNaoOrdenada.

    listaDeContato.append(titulo, listaNaoOrdenada); // Acrescentando dois elementos filho a variável listaDeContato 
} 

function removerContato() {
    const sessaoContatos = document.getElementById('lista-de-contatos'); // Criando a váriavel para utilizar o elemento HTML no javascript.
    const titulos = document.getElementsByTagName('h3'); // Criando a váriavel para utilizar o elemento HTML no javascript.
    const contatos = document.getElementsByTagName('ul'); // Criando a váriavel para utilizar o elemento HTML no javascript.

    sessaoContatos.removeChild(titulos[titulos.length - 1]); // Removendo elemento filho da variável sessaoContatos
    sessaoContatos.removeChild(contatos[contatos.length -1]); // Removendo elemento filho da variável sessaoContatos
}