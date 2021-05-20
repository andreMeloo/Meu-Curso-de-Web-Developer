// Armazenando uma funcao em uma variavel
const imprimirSoma =  function(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implicito
const baskarDelta = (a, b, c) => Math.pow(b, 2) - (4*c*a)

console.log(baskarDelta(1, 3, -4).toFixed(2))


// teste a parte, meu mesmo
function calculaEquacao(a, b, c) {
    delta = (Math.pow(b, 2)) - (4 * a * c)
    if (delta < 0) {
        return 'Função não possui raizes reais!'
    } else { 
    x1 = ((- b + Math.sqrt(delta))/(2 * a)).toFixed(2)
    x2 = ((- b - Math.sqrt(delta))/(2 * a)).toFixed(2)
    }
    return 'x1 = ' + x1 + ' e x2 = ' + x2
}

console.log(calculaEquacao(-1, 3, -4))
