// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'prmoção'
})

console.log('Extensível', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar Branca'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = {nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selados', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)