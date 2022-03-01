//Declaracao de variaveis

let botaoIniciar = document.querySelector("#botaoiniciar");
let botaoParar = document.querySelector("#botaoparar");
let botaoZerar = document.querySelector("#botaozerar");
let horasEl = document.querySelector("#horas");
let minutosEl = document.querySelector("#minutos");
let segundosEl = document.querySelector("#segundos");
let segundos = 0;
let minutos = 0;
let horas = 0;
let parar = 0;

//atribuicao de eventos
botaoIniciar.addEventListener('click', cronometrar);
botaoZerar.addEventListener('click', Zerar);
botaoParar.addEventListener('click', Parar);

function cronometrar() {
    segundos++;
    if(segundos == 60){
        minutos++;
        minutosEl.innerHTML = minutos;
        segundos = 0;
    }
    segundosEl.innerHTML = segundos;
    if(minutos == 60) {
        horas++;
        horasEl.innerHTML = horas;
        minutos = 0;
    }
    minutosEl.innerHTML = minutos;
    timer(); 
}

function timer() {
    tt = setTimeout(cronometrar, 1000);
}

function Zerar() {
    horasEl.innerHTML = "0";
    minutosEl.innerHTML = "0";
    segundosEl.innerHTML = "0";
    segundos = 0;
    minutos = 0;
    horas = 0;
}

function Parar() {
    clearTimeout(tt)
}
