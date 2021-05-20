const produtos = [
    { nome: 'notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false },   
]

console.log(produtos.filter(function(p){
    return p.preco > 500 && p.fragil == true
}))