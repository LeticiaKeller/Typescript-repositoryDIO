let botaoAtualizar = document.getElementById('atualizar-saldo')!;
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

if (campoSaldo !== null){
    campoSaldo.innerHTML = '0'
}

function somarAoSaldo(soma:number) {
    if (campoSaldo !== null){
        campoSaldo.innerHTML += soma
    }
}

function limparSaldo() {
    if (campoSaldo !== null){
        campoSaldo.innerHTML = ''
    }
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});