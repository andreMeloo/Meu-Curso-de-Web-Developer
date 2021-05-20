// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contesto Léxico 2
    return saudacao
}

// Objetos são grupos animados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idede: 32,
    peso: 90,
    endereco:{
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)