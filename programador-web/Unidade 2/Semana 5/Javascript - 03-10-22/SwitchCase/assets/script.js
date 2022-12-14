let fruta = window.prompt("Qual fruta você deseja?:")

switch (fruta) {
    case 'Uva':
        let quantidade = window.prompt("Quantidade desejada(por quilo):")
        var w = window.open('','','width=100,height=100')
        w.document.write('Processando sua compra...')
        w.focus()
        setTimeout(function() {w.close();}, 2000)
        window.alert("Aqui está, " + quantidade + " quilos de " + fruta + ".")
        break;

    case 'Maça':
        window.alert("No momento não temos " + fruta + "s em nosso estoque.").
        break;

    case 'Laranja':
        window.alert("Estamos com escassez de " + fruta + "s em nossa loja")
        break;

    case 'Melancia':
        window.alert(fruta + " está em falta em nosso estoque, e chegará o próximo lote na próxima semana.")
        break;

    case 'Pera':
        window.alert("Não temos ", fruta + " em nosso estoque.")
        break;
        
    default:
        window.alert("Não temos registros de " + fruta + "s em nosso mercado.")
        break;
}