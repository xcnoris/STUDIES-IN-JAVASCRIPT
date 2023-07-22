var n = [];
var numeros = document.getElementById('txtnun');
var tab = document.getElementById('txtvalores');
var res = document.getElementById('res');

function adicionar() {
    if (numeros.value.length == 0 ) {
        alert('[ERRO] Valores incorretos');
    } else {
        var valor = numeros.value;
        
        if (n.includes(valor)) {
            alert('Valor já existente. Insira um valor diferente.');
            return; // Retorna sem adicionar o valor repetido
        }

        n.push(valor);

        tab.innerHTML += `Valor ${valor} adicionado`;

        var item = document.createElement('option');
        item.value = valor;
        item.textContent = valor;

        tab.appendChild(item);
       
    }
    res.innerHTML=''
    numeros.value=''
    numeros.focus()
}

function finalizar() {
    if (n.length == 0) {
        alert('[ERRO] Adiciones valores antes de finalizar!');
    } else {
        res.innerHTML = `Ao todo, temos ${n.length} numeros cadastrados.</br>`;
        res.innerHTML += `O maior valor informado foi  ${Math.max(...n)}</br>`;
        res.innerHTML += `O menor valor informado foi  ${Math.min(...n)}</br>`;

        var soma = n.reduce(function (acumulador, valorAtual) {
            return acumulador + Number(valorAtual);
        }, 0);
        
        res.innerHTML += `A soma de todos os valores é ${soma}</br>`;
    }
}
