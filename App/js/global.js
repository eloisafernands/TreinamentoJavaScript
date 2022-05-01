class Calculadora{  
    constructor(num1, num2){
        this.num1 = num1 || 0;
        this.num2 = num2 || 0;
    }

    somar(){
        return this.num1 + this.num2;
    }

    subtrair(){
        return this.num1 - this.num2;
    }

    multiplicar(){
        return this.num1 * this.num2;
    }

    dividir(){
        return this.num1 * this.num2;
    }
}

let calculadora = new Calculadora();

function calcular(){
    var c = document.calculadora;

    calculadora.num1 = parseFloat(c.num1.value);    
    calculadora.num2 = parseFloat(c.num2.value);    

    let resultado = '';

    switch(c.operacao.value){
        case '+':
            resultado = 'Resultado da soma: ' +calculadora.somar();
            break;
        case '-':
            resultado = 'Resultado da subtração: ' +calculadora.subtrair();
            break;
        case '*':
            resultado = 'Resultado da multiplicação: ' +calculadora.multiplicar();
            break;
        case '/':
            resultado = 'Resultado da divisão: ' +calculadora.dividir();
            break;
    }

    document.querySelector('.col-result').innerHTML = `
        ${resultado}; 
    `;

    return false;
}