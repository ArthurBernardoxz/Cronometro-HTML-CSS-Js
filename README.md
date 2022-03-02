# Cronometro-HTML-CSS-Js
 Cronômetro utilizando HTML, CSS e JavaScript

## Como foi feita a estrutura? (HTML) ##

A estrutura do **HTML** ficou bem simples, um `<h1>` para mostrar o titúlo ao meio no topo, para o tempo no centro da página (segundos, minutos e horas) utilizei uma sequência de `<span>` (por não causar quebra de linha), um para os segundos, os minutos, as horas e os dois pontos que dividem os tempos.

Ao final criei três elementos `<button>` para vincular a eles as funções de iniciar, parar e zerar o cronômetro, para todos eles coloquei a `class` **.botoes** para estilizalos em conjunto e um `id` para cada um de acordo com sua funcionalidade.

## Como foi feita a estilização? (CSS) ##

Tentei deixar o site bem parecido com aqueles relógios digitais, então primeiro importei a fonte **DS-DIGITAL** atráves da tag `@import url('http://fonts.cdnfonts.com/css/ds-digital')`, então defini a `font-family` do **HTML** como `font-family: 'DS-Digital', sans-serif` e fiz o mesmo para os botões.

Centralizei todos os elementos da página no centro, coloquei um `background-color: black` e para os botões e para o tempo coloquei cada um de uma cor, na seguinte sequeÊncia `color: rgb(0, 255, 76)`, `color: red` e `color: rgb(4, 0, 255)`.

Em relação a tamanho e outras propriedades, defini da forma que mais me agradou visualmente, para saber mais acesse o CSS do projeto. (**index.css**).


## Como foi feito a lógica? (Js) ##

Para o crônometro iniciar primeiro peguei cada `<span>` dos tempos (segundos,minutos e horas) e atribui a uma variável dentro do JavaScript através do `document.querySelector()`, fiz o mesmo para cada botão, para depois ligar a um evento.

### Função para começar a crônometrar: ###

