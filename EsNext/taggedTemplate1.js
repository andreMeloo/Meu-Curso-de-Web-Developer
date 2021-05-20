// tagged template - processa o template string dentro de uma função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Gui'
const situcao = 'Aprovado'
console.log(tag `${aluno} está ${situcao}`)