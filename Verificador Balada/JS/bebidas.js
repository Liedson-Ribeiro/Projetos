let saldo = localStorage.getItem('tsaldo')
let resposta1 = document.getElementById('res1')

if (saldo) {
    resposta1.innerHTML = `Seu saldo: R$${parseFloat(saldo).toFixed(2)}`
} else {
    alert("Nenhum saldo encontrado.");
}
