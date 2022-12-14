const formulario = document.getElementById('formulario');
const botao = document.getElementById('botao')

const arrowFunction = (num1, num2) => {return num1 + num2; }

botao.addEventListener('click', function (ev) {
    const numero1 = parseFloat(document.getElementById('num1').value);
    const numero2 = parseFloat(document.getElementById('num2').value);
    ev.preventDefault();
    alert(`${numero1} + ${numero2} = ${arrowFunction(numero1, numero2)}`);
});