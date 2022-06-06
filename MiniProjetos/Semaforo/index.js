const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalID = null;

const semaforoOff = ( event ) => {
    semaforoStop();
    semaforoOn[event.target.id]();        
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;


const semaforoAut = () => {
    const colors = ['red', 'yellow', 'green'];
    semaforoOn[colors[colorIndex]]();
    nextIndex();
}

const semaforoStop = () => {
    clearInterval (intervalID);
}

const semaforoOn = {
    'red':    () => img.src = './assets/vermelho.png',
    'yellow': () => img.src = './assets/amarelo.png',
    'green':  () => img.src = './assets/verde.png',
    'automatico': () => intervalID = setInterval(semaforoAut, 1000)
}

buttons.addEventListener('click', semaforoOff); 