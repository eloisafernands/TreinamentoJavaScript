var nome = window.prompt('Escreva seu nome: ');
var sobrenome = window.prompt('Escreva seu sobrenome: ');
var idade = window.prompt('Escreva sua idade: ');
var endereco = window.prompt('Escreva seu endereço completo (Rua, número, bairro, cidade e CEP): ');
var salario = window.prompt('Qual a sua pretenção salarial?');

console.log(`Nome: ${nome + " " + sobrenome}`);
console.log(`Idade: ${idade}`);
console.log(`Endereço: ${endereco}`);

function exibirValores(){
    window.alert(`O seu salário é R$${parseFloat(salario)}`);
    window.alert(`Seu vale transporte é de R$${valeTransporte}`);
    window.alert(`O seu salário com desconto do vale transporte é R$${parseFloat(salario) - parseFloat(salario)*0.05}`);
    window.alert(`O vale transporte desconta R$${salario*0.05} do seu salário`);
    window.alert(`O seu recebimento total vai ser de R$${parseFloat(salario) - parseFloat(salario)*0.05 + valeTransporte}`);
}

var transporte = window.prompt('Você irá utilizar vale transporte? Digite 1 para sim e 2 para não');
if(transporte == 1){
    var onibus = 4.50;
    var trem = 5.00;
    var baseDeDias = 23;
    var resultado = window.prompt('Selecione os meios de transporte:\n1 - Trem \n2 - Ônibus \n3 - Trem e Ônibus');
    switch (resultado){
        case '1':
            var valeTransporte = trem * baseDeDias * 2; 
            console.log(valeTransporte);
            exibirValores()
        break;
        case '2':
            var valeTransporte = onibus * baseDeDias * 2; 
            console.log(valeTransporte);
            exibirValores()
        break;
        case '3':
            var valeTransporte = (trem + onibus) * 2 * baseDeDias;
            exibirValores()
        break;
        default:
            window.alert('Opção invalida');
        break;
    }
}else if(transporte == 2){
    window.alert('Você não vai receber vale transporte');
    exibirValores()
} else{
    window.alert('Opção invalida');
}

