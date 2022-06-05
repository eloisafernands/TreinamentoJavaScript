const lampada = document.getElementById('lampada');
const turnOnOff = document.getElementById('turnOnOff');
const txtEstado = document.getElementById('txtEstado'); 

const nome = window.prompt('Informe seu nome:');

function isLampBroken(){
    return lampada.src.indexOf('quebrada') > -1;
}

function lampBroken(){
    lampada.src = './assets/quebrada.png';
    txtEstado.textContent = `Parabéns ${nome}, conseguiu!`;
}

function lampOn(){
    if(!isLampBroken()){
        lampada.src = './assets/ligada.png';
        txtEstado.textContent = `Descubra como quebrar a lampada, ${nome}!`;        
    }
}

function lampOff(){
    if(!isLampBroken()){
        lampada.src = './assets/desligada.png';
    }
}

function lampOnOff(){
    if(turnOnOff.textContent == 'Ligar'){
        if(!isLampBroken()){
            lampOn();
            turnOnOff.textContent = 'Desligar';
        }
    } else{
        if(!isLampBroken()){
            lampOff();
            turnOnOff.textContent = 'Ligar';
        }
    }
}

turnOnOff.addEventListener('click', lampOnOff);

lampada.addEventListener('mouseover', lampOn);
lampada.addEventListener('mouseleave', lampOff);
lampada.addEventListener('dblclick', lampBroken);