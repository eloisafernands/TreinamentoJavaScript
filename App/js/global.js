
/*
class Global{

    constructor(){
        

        

        console.log("Minha classe foi instanciada!");
    }

}

let global = new Global();*/

/*
class Pessoa{   
    
    constructor(nome, idade, orientacao_sexual){

        this.nome = nome;
        this.idade = idade;
        this.orientacao_sexual = orientacao_sexual;


        console.log(this.nome);
        console.log("Minha classe foi instanciada!");
    }

}

let pessoa = new Pessoa('Lucas', 28, 'Heterossexual');*/


class Calculadora{
    constructor(num1, num2){
        // abaixo tem os objetos, onde recebem o valor de numX e se o mesmo for undefined eles recebem 0
        this.num1 = num1 || 0;
        this.num2 = num2 || 0;
    }

    somar(){
        return this.num1 + this.num2;
    }

    substrair(){
        return this.num1 - this.num2;
    }

    multiplicar(){
        return this.num1 * this.num2;
    }

    dividir(){
        return this.num1 / this.num2;
    }
}

let calculadora = new Calculadora(); // instancia da classe Calculadora 

function calcular(){
    
    var c = document.calculadora; // capturando o caminho do formulario 
    
    calculadora.num1 = parseFloat(c.num1.value); // valor do input do formulario 
    calculadora.num2 = parseFloat(c.num2.value); // valor do input do formulario 

    let resultado = '';

    switch(c.operacao.value){
        case '+':
            resultado = 'Resultado da soma: '+calculadora.somar();
            break;
        case '-':
            resultado = 'Resultado da subtração: '+calculadora.substrair();
            break;
        case '*':
            resultado = 'Resultado da multiplicação: '+calculadora.multiplicar();
            break;
        case '/':
            resultado = 'Resultado da divisão: '+calculadora.dividir();
            break;
        default:
            resultado = "Por favor, selecione uma operação!";
            break;
    }
        
    document.querySelector('.col-result').innerHTML = `        
            ${resultado}
    `;

    return false;
}


/*
    EXERCICIO 1

    CRIAR DUAS CLASSES
    CLASSE 1: Carrinho.
    Carrinho terá os seguintes objeto:
        produtos;
    Métodos e inserir os comentários: 
        atualizarCarrinho; // atualizar carrinho html
        removerProduto;  // remover produto db
        adicionarProduto; // adicionar produto db
    
    CLASSE 2: Global
        construtor() // vazio 

    HTML - Criar uma página de cadastrar produtos.
    Campos: nome, preço, imagem, quantidade, descricao.

*/
