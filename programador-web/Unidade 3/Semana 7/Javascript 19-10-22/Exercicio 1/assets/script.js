/* 1 - Crie um documento HTML e um script.js, após feito isso
crie uma estrutura no html onde contenha:
- Um label para especificar o input (A label deve haver um for com o
    valor 'label-form')
- E um input do tipo text (O input deve haver um name, uma classe,
    e um id com o valor 'input'-form' em ambos os atributos)
- Esses dois elementos devem estar dentro de uma div, e nessa div deve haver um id com o valor 'form' 

Após feito isso, utilize todos os elementos mostrados em aula para obter
os elementos do HTML, e expique o que você entendeu de cada um.*/

function showMe() { // Criando a função para ser chamada quando o botão for clicado
    const formulario = document.getElementById('form'); // getElementById está selecionando a div pelo seu id #form, e guardando na variável formulario
    // console.log(formulario);

    const etiqueta = document.getElementsByTagName('label'); // getElementsByTagName está selecionando a label pelo seu nome de tag "label", e guardando na variável etiqueta
    // console.log(etiqueta);

    const entrada = document.getElementsByClassName('.input-form');  // getElementsByClassName está selecionando o input pelo seu nome de classe, e guardando na varíavel entrada
    // console.log(entrada);

    const entrada2 = document.querySelectorAll('.input-form'); // querSelectorAll está selecionando o input pela sua classe, e guardando na varíavel entrada2.
    // console.log(entrada2);

    const entrada3 = document.getElementsByName('input-name') // getElementsByName está selecionando o input pelo atributo name, e guardando na varíavel entrada3.
    // console.log(entrada3);

    const input = document.querySelector('#form > input'); // querSelector está especificando para pegar o elemento filho(input) do elemento com o id form.
    console.log(input);
}