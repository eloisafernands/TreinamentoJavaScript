function imc(){
    var form = document.formCalc;

    var nome = form.nome.value;
    var altura = form.altura.value;
    var peso = form.peso.value;
    var resultado = document.getElementById('resultCalc');

    if(nome !== "" & altura !== '' & peso !== ''){
        const calcIMC = (peso /(altura*altura));

        let classificacao = '';

        if(calcIMC < 18.5){
            classificacao = 'Você está abaixo do peso.';
        } else
        if(calcIMC < 25){
            classificacao = 'Você está no peso ideal.';
        } else
        if(calcIMC < 30){
            classificacao = 'Você está acima do peso.';
        } else
        if(calcIMC < 35){
            classificacao = 'Você está com obesidade grau I.';
        } else
        if(calcIMC < 40){
            classificacao = 'Você está com obesidade grau II.';
        } else {
            classificacao = 'Você está com obesidade grau III.';
        }
        
        resultado.textContent = `${nome}, O seu IMC é ${calcIMC.toFixed(2)}. ${classificacao}`;

    } else {
        resultado.textContent = 'Preencha todos os campos';
    } 
}

const calcular = document.getElementById('btnCalcular');
calcular.addEventListener('click', imc);