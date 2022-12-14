// Funcionalidades da Calculadora

// Funcionalidades de digitar na calculadora
const main = document.querySelector("main");
const root = document.querySelector(":root");
const input = document.getElementById("input");
const resultInput = document.getElementById("result");

input.focus();

// Array com as telcas que serão permitidas para o usuário digitar
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "];

// Esta sendo puxada a classe 'charkey'
// O forEach será exucutado para cada um dos botões (charKeyBtn)
document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener("click", function() {
        const value = charKeyBtn.dataset.value;
        input.value += value;
    });
});

document.getElementById("clear").addEventListener("click", function() {
    input.value = ""; // Esta pegando o valor do input e dizendo que ele vai ser uma string vazia, ou seja vai limpar o input
    input.focus();
});

input.addEventListener("keydown", function(ev) {
    ev.preventDefault();

    if(allowedKeys.includes(ev.key)) {
        input.value += ev.key;
        return
    }

    if(ev.key === "Backspace") {
        input.value = input.value.slice(0, -1);
    }

    if(ev.key === "Enter") {
        calculate();
    }
});

document.getElementById("equal").addEventListener("click", calculate);

function calculate() {
    resultInput.value = "ERROR";
    resultInput.classList.add("error");
    const result = eval(input.value);
    resultInput.value = result;
    resultInput.classList.remove("error");
}

document.getElementById("copyToClipboard").addEventListener("click", function(ev) {
    const button = ev.currentTarget;
    if(button.innerText === "Copy") {
        button.innerText = "Copied!";
        button.classList.add("success");
        navigator.clipboard.writeText(resultInput.value);
    } else {
        button.innerText = "Copy";
        button.classList.remove("success");
    }
    if(button.innerText === "Copied!") {
        setTimeout(function(){
            button.innerText = "Copy";
            button.classList.remove("success");
        }, 1150)
    }

});

document.getElementById("themeSwitcher").addEventListener("click", function() {
    input.value = "";
    resultInput.value = "";
    input.focus()
    if(main.dataset.theme === "light") {
        root.style.setProperty("--bg-color", "#212529");
        root.style.setProperty("--border-color", "#666");
        root.style.setProperty("--font-color", "#747980");
        root.style.setProperty("--primary-color", "#F7AD2F");
        main.dataset.theme = "dark";
    } else {
        root.style.setProperty("--bg-color", "#DEE4E7");
        root.style.setProperty("--border-color", "#1565C0");
        root.style.setProperty("--color-success:", "#000000")
        root.style.setProperty("--font-color", "#1E3F66");
        root.style.setProperty("--primary-color", "#F1F3F6");
        main.dataset.theme = "light";
    }
});