/* 1 - Crie uma estrutura no HTML do mesmo jeito do exemplo passado em sala de aula,
apartir disso você irá utilizar os métodos para a criação de elementos que vimos
no exemplo, e inserir um input junto com um botão e eles
devem estar dentro de um elemento li. */

function addInput() {
    const ul = document.getElementById('inputs');

    const newLi2 = document.createElement('li');
    newLi2.className = 'list-item';
    newLi2.innerText = 'Novo Input2:';

    const botao = document.createElement("input");
    botao.type = 'submit';
    botao.value = 'BOTAO';

    const newInput2 = document.createElement('input');
    newInput2.type = 'text';
    newInput2.name = 'input';

    newLi2.appendChild(newInput2);
    newLi2.appendChild(botao);
    ul.appendChild(newLi2);
}