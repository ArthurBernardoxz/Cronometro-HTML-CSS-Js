//Declaracao de variaveis

let botaoIniciar = document.querySelector("#botaoiniciar");
let botaoParar = document.querySelector("#botaoparar");
let botaoZerar = document.querySelector("#botaozerar");
let horasEl = document.querySelector("#horas");
let minutosEl = document.querySelector("#minutos");
let segundosEl = document.querySelector("#segundos");
let segundos = "00";
let minutos = "00";
let horas = "00";
let parar = "00";

//atribuicao de eventos
botaoIniciar.addEventListener('click', cronometrar);
botaoZerar.addEventListener('click', Zerar);
botaoParar.addEventListener('click', Parar);

function cronometrar() {
    segundos++;
    if(segundos == 60){
        minutos++;
        minutosEl.innerHTML = minutos;
        segundos = "00";
    }
    segundosEl.innerHTML = segundos;
    if(minutos == 60) {
        horas++;
        horasEl.innerHTML = horas;
        minutosEl = "00";
    }
    minutosEl.innerHTML = minutos;
    timer(); 
}

function timer() {
    tt = setTimeout(cronometrar, 1000);
}

function Zerar() {
    horasEl.innerHTML = "00";
    minutosEl.innerHTML = "00";
    segundosEl.innerHTML = "00";
    segundos = "00";
    minutos = "00";
    horas = "00";
}

function Parar() {
    clearTimeout(tt)
}
