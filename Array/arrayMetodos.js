const pilotos = ['Vetel', 'Alonso', 'Raikonen', 'Massa']
pilotos.pop() // Massa quebrou o carro! - Remove o ultimo elemento
console.log(pilotos)

pilotos.push('Vestappen') // Adiciona um elemento no final do array
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode adiiconar  remover elemntos de um array

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) // massa quebrou 
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)