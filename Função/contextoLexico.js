const valor = 'Global'

const minhaFuncao = function () {
    console.log(valor)
}


function exec() {
    const valor = 'Local'
    minhaFuncao()
}


exec()