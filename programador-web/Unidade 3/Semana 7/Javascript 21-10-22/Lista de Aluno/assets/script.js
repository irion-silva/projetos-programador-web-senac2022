function addAluno() {
    const sectionName = document.getElementById('section-name');
    const titulo = document.createElement('h3');
    titulo.innerText = "Aluno:"

    const listaNaoOrdenada = document.createElement('ul');

    const linha = document.createElement('li')
    linha.innerHTML = ('<label for="inputNome">Nome: </label>');
    const inputNome = document.createElement('input');
    inputNome.type = 'text';
    
    linha.appendChild(inputNome);
    listaNaoOrdenada.appendChild(linha);
    listaNaoOrdenada.appendChild(document.createElement('br'));

    const linha2 = document.createElement('li');
    linha2.innerHTML = ('<label for="inputIdade">Idade: </label>');
    const inputIdade = document.createElement('input');
    inputIdade.type = 'number';

    linha2.appendChild(inputIdade);
    listaNaoOrdenada.appendChild(linha2);
    listaNaoOrdenada.appendChild(document.createElement('br'));

    sectionName.append(titulo, listaNaoOrdenada)
}

function removerAluno() {
    const sectionName = document.getElementById('section-name');
    const titulo = document.getElementsByTagName('h3');
    const alunos = document.getElementsByTagName('ul');

    sectionName.removeChild(titulo[titulo.length - 1]);
    sectionName.removeChild(alunos[alunos.length - 1]);
}