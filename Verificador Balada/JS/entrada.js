let tnome = document.getElementById('tnome')
let tidade = document.getElementById('tidade')
let tsaldo = document.getElementById('tsaldo')
let resposta = document.getElementById('res')
let entrada = document.getElementById('entradabtn')
let tentativa = false

function entrar() {
    // Verificações :D
    if (tentativa) {
        window.location.href = "Paginas/bebidas.html"
        return
    }
    if (tnome.value === '') {
        alert('Por favor, preencha todos os campos!')
    } else if (tidade.value === '') { 
        alert('Por favor, preencha a idade corretamente!')
    } else if (Number(tidade.value) < 18) { 
        alert('Infelizmente você não possui idade suficiente para entrar na balada!')
    } else if (Number(tidade.value) > 100 ) {
        alert('Infelizmente você está morto!')
    } else if (tsaldo.value === '') { 
        alert('Por favor, preencha o saldo corretamente!')
    } else {
        let saldo = Number(tsaldo.value)
        if (isNaN(saldo)) {
            alert('Por favor, insira um valor numérico válido para o saldo!')
            return
        }
        if (saldo < 200) {
            alert('Você não possui saldo suficiente para entrar na balada!')
        // Ações :D
        } else {
            resposta.innerHTML = `Olá, <strong>${tnome.value}</strong>, seja bem-vindo(a) à balada!`
            saldo -= 200
            tsaldo.value = saldo
            resposta.innerHTML += `<br>Saldo atual: R$${saldo.toFixed(2)}`
        }
        if (saldo) {
            entrada.style.backgroundColor = 'red'
            entrada.innerText = 'Bebidas'
            localStorage.setItem('tsaldo', saldo)
            tentativa = true
        }
    }
}
