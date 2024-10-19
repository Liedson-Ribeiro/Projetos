let saldo1 = localStorage.getItem('tsaldo') ? parseFloat(localStorage.getItem('tsaldo')) : 0
let resposta2 = document.getElementById('res2')
let resposta3 = document.getElementById('res1')

let products = {
    Água: 8.99,
    GarrafaCoca: 12.99,
    CocaKs: 7.50,
    CocaLata: 5.99,
    PepsiLata: 4.99,
    SucoLaranja: 6.80,
    GarrafaUisque: 65.90,
    GarrafaRedLabel: 150.00,
    GarrafaVinho: 25.50,
    CopoCerveja: 5.50
}

function atualizarSaldoTextos() {
    resposta3.innerText = `Seu saldo: R$${saldo1.toFixed(2)}`
}

function comprarProduto(produto) {
    if (saldo1 >= products[produto]) {
        saldo1 -= products[produto]
        localStorage.setItem('tsaldo', saldo1)
        resposta2.innerText = `Você comprou uma ${produto.replace(/([A-Z])/g, ' $1')}!`
        atualizarSaldoTextos()
    } else {
        resposta2.innerText = `Saldo insuficiente! Seu saldo atual é: R$${saldo1.toFixed(2)}`
    }
}

function comprarAgua() {
    comprarProduto('Água')
}

function comprarCoca() {
    comprarProduto('GarrafaCoca')
}

function comprarCocaKs() {
    comprarProduto('CocaKs')
}

function comprarCocaLata() {
    comprarProduto('CocaLata')
}

function comprarPepsiLata() {
    comprarProduto('PepsiLata')
}

function comprarSucoLaranja() {
    comprarProduto('SucoLaranja')
}

function comprarUisque() {
    comprarProduto('GarrafaUisque')
}

function comprarRedLabel() {
    comprarProduto('GarrafaRedLabel')
}

function comprarVinho() {
    comprarProduto('GarrafaVinho')
}

function comprarCerveja() {
    comprarProduto('CopoCerveja')
}

atualizarSaldoTextos()
