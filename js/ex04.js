var carrinho = [
    {"nomeProduto": "Corretivo", "id": 1, "preco": 59.99, "quantidade": 1},
    {"nomeProduto": "Base", "id": 2, "preco": 75.99, "quantidade": 1},
    {"nomeProduto": "Blush", "id": 3, "preco": 45.80, "quantidade": 1},
    {"nomeProduto": "Bruma", "id": 4, "preco": 129.99, "quantidade": 1},
    {"nomeProduto": "Rímel", "id": 5, "preco": 98.99, "quantidade": 1}
];

console.log(carrinho);

function modificarCarrinho(){
    var c = document.carrinho;

    var carrinhoModificado = {
        nomeProduto: c.nomeProduto.value,
        id: c.id.value,
        preco: c.preco.value,
        quantidade: c.quantidade.value
    };

    carrinho.map(function(index){
        console.log(index.id == carrinhoModificado.id);

        if(index.id == carrinhoModificado.id){
            index.id = parseInt(carrinhoModificado.id);
            index.nomeProduto = carrinhoModificado.nomeProduto;
            index.preco = parseFloat(carrinhoModificado.preco);
            index.quantidade = parseInt(carrinhoModificado.quantidade);
           
            if(c.observacao.value.length > 0){
                index.observacao = c.observacao.value;
            }
        }
    });

    console.log(carrinho);
    return false;
}
