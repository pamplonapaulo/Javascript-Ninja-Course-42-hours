/*
O desafio de hoje será um pequeno projeto: um cronômetro!
As regras para criação do cronômetro são as seguintes:
1. Crie um arquivo index.html e adicione esse script a ele;
2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
Ele será o nosso cronômetro;
3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
cada segundo;
5. Ao clicar em Stop, o cronômetro deve parar de contar;
6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

Utilize o atributo data-js para nomear o campo e os botões. Você pode
usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
(function (win, doc){
    'use strict';
    
    var counter = doc.querySelector('input[type="text"]');
    var $btnStart = doc.querySelector('[data-js="start"]');
    var $btnStop = doc.querySelector('[data-js="stop"]');
    var $btnReset = doc.querySelector('[data-js="reset"]');
    var temporizador;
    
    function timer(){
        counter.value++;
    }
    
    $btnStart.addEventListener('click', function(){
        temporizador = setInterval(timer, 1000);   
    }, false)
    
    $btnStop.addEventListener('click', function(){
        clearInterval(temporizador);
    }, false)
    
    $btnReset.addEventListener('click', function(){
        clearInterval(temporizador);
        counter.value = 0;
        
    }, false)
})(window, document);
*/


/*
PROFESSOR *****************************************
*/
(function (win, doc){
    'use strict';
    var $timer = doc.querySelector('[data-js="timer"]');
    var $start = doc.querySelector('[data-js="start"]');
    var $stop = doc.querySelector('[data-js="stop"]');
    var $reset = doc.querySelector('[data-js="reset"]');
    var interval;
    
    $start.addEventListener('click', startTimer, false);
    $stop.addEventListener('click', stopTimer, false);
    $reset.addEventListener('click', resetTimer, false);
    // Sem os parênteses, as funções startTimer, stopTimer, resetTimer acima não estão sendo invocadas dentro do eventListener. Elas são invocadas quando há o click.

    function startTimer(){
        $timer.value = +$timer.value + 1;
        /* Conversão de string para number:
        O operador "+" usado antes de uma string, ou seja, como "operador unário", converte a string em um number.
        */
        interval = setTimeout(startTimer, 1000);
    }
    function stopTimer(){
        clearTimeout(interval);
    }
    function resetTimer(){
        $timer.value = 0;
        stopTimer();
    }
    
})(window, document);








