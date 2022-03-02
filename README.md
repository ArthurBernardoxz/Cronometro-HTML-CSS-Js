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

### Função para começar a contar: ###

Atribui um evento ao quando o `<button>` de iniciar fosse clicado, como os `<span>` nãoo possibilitavam realizar operações com o `innerHTML` então cirei ariáveis para os segundos, os minutos e as horas todas iniciadas com 0.

A função inicia adicionando 1 no segundos, em seguida verifica se ele é igual a 60, caso verdadeiro nos minutos são adicionados 1, em seguida o **innerHTML** do `<span>` de minutos é igual a váriavel minutos e os segundos são zerados novamente. Depois igualo o **innerHTML** do `<span>` de segundos a varíavel de segundos e depois faço a mesma verificação para os miinutos, caso seja igual a 60, as horas mudam e os minutos zeram.

Utilizei recursividade indireta para o crônometro continuar contando, criando outra função e utilizando a função do Js `setTimeout(função_cronometrar, 1000)`.

### Função para zerar o cronômetro: ###

Quando o usuário clicar no botão zerar o `innerHTML` do `<span>` dos segundos, minutos e horas é **00** e as variáveis utilizadas na função cronometrar também zeram.

### Função para parar o cronômetro: ###

Ele faz a recursividade para a função cronometrar parar. Dessa forma:

```
function Parar() {
    clearTimeout(x) // onde x é a váriavel que realiza a recursividade.
}
```