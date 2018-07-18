// AULA - 21

/*

1.  Sync X Async

    Asynchronous:

        .addEventListener
        .setTimeout

2.  setTimeout



3.  setInterval X setTimeout

        .setTimeout Recursivo
        .clerTimeout(id)
        .clearInterval(id)




*/



// Sync X Async ************************************++++++
/*
SYNC
É quando se tem uma sequência de eventos, um após o outro.
*/
(function (){
    console.log('1');
    console.log('2');
    console.log('3');
})();
// '1'
// '2'
// '3'

/*
ASYNC
É quando trabalha-se com eventos, quando precisamos aguardar uma ação do usuário, ou quando precisamos fazer um temporizador na tela.

JS trabalha somente com uma THREAD.
Então JS executa um comando após o outro. Se algum dos comandos estiver bloqueando qualquer tipo de ação naquela THREAD, ela ficará completamente bloqueada.

Tópicos relacionados:
https://stackoverflow.com/questions/8963209/does-async-programming-mean-multi-threading

*/
(function (){
    'use strict';    
    console.log(0);
    for (var i = 1; i <= 10; i++){
        console.log(i);
    }
    console.log(11);
})();
//   1
//   2
//   3
//   4
//   5
//   6
//   7
//   8
//   9
//  10
//  11
/*
Algumas operações podem ter lentidão perceptível, uma vez que sua execução bloqueará o navegador: suponha que o loop acima fosse MUITO maior, como "(var i = 1; i <= 10000; i++)".
Em uma aplicação grande, esses métodos síncronos travarão a tela do usuário.
*/

// Event Loop
// Para que serve?
// Quando há um 'EventListener', o JS o coloca numa 'fila', no 'event loop', onde fica girando até a 'thread pool' ficar liberada. Se esse processo síncrono durar muito tempo, a 'thread' ficará bloqueada todo esse período. Um novo evento não assíncrono deixa a thread bloqueada.

// 
(function (){
    'use strict';
    console.log('inicio');
    document.addEventListener('click', function(){
        console.log('clicou no documento');
    }, false);
    console.log('fim');
})();
// Essa é a natureza assíncrona do JS. Acima, o evento só é executado quando é acionado pelo usuário, permanecendo no loop (ou na memória, se preferir).


(function (){
    'use strict';    
    console.log(0);
    document.addEventListener('click', function(){
        console.log('clicou no documento');
    }, false);
    
    for (var i = 1; i <= 10000; i++){
        console.log(i);
    }
    console.log(11);
})();


// setTimeout *********************************************
// It's unit is milliseconds. So 1000 = 1 second.

(function (win, doc){
    'use strict';
    
    console.log('início');
    
    setTimeout(function(){
        console.log('executou setTimeout');
    }, 10000);
    
    console.log('fim');
    
})(windows, document);

/*
// 'início'
// 'fim'
// 'executou setTimeout'
*/



// setInterval *********************************************
// It reapeats the code every XXX milliseconds, over and over until something else make it stops.
// Be aware that this is dangerous, it could be running forever and using our event queue. The code tend to loose performance.

(function (win, doc){
    'use strict';
    
    console.log('início');
    
    setInterval(function(){
        console.log('executou setTimeout');
    }, 1000);
    
    console.log('fim');
    
})(window, document);




// RECURSIVE FUNCTION: the one who calls itself, over and over.
(function (win, doc){
    'use strict';
    var counter = 0;
    function timer(){
        console.log( 'timer', counter++);
        setTimeout( timer, 3000);
    }
    timer();
})(window, document);

// How to stop that?

// Premissas para Função Recursiva:
// 1. Invicar a si própria.
// 2. Precisa de uma condição para parar.

(function (win, doc){
    'use strict';
    var counter = 0;
    function timer(){
        console.log( 'timer', counter++);
        if (counter > 10)
            return;
        setTimeout( timer, 3000);
    }
    timer();
})(window, document);


// setInterval X setTimeout ********************************

// Which one is better: recursive setTimeout or setInterval ?


// Recursive setTimeout
(function (win, doc){
    'use strict';
    var counter = 0;
    function timer(){
                
        console.log( 'timer', counter++);
        if (counter > 10)
            return;
        setTimeout( timer, 1000 );   
    }
    timer();
})(window, document);
// O setTimeout recursivo só coloca na fila o próximo quando aquele em execução já tiver sido concluído.




// setInterval
(function (win, doc){
    'use strict';
    var counter = 0;
    
    function timer(){
        console.log( 'timer', counter++);
    }
    setInterval(timer, 1000);    

})(window, document);
// o setInterval já é recursivo por natureza, então ele afeta mais a performance.
// Se o intervalo for um tempo grande, como 1 minuto, então dificilmente teremos algum problema.
// Mas por segurança, para garantir que tudo será como queremos, melhor utilizar o setTimeout recursivo.



// clerTimeout(id)

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Aula 21</title>
</head>
<body>
    <button data-pamplona="button">Parar o cronômetro!</button>
</body>
</html>
*/
(function (win, doc){
    'use strict';
    var counter = 0;
    var $button = doc.querySelector('[data-pamplona="button"]');
    var temporizador;
    function timer(){
        console.log( 'timer', counter++);
        
        if(counter > 20)
            return;
        temporizador = setTimeout(timer, 2000);   
        console.log(temporizador); // só para visualizar.
    }
    timer();
    
    $button.addEventListener('click', function(){
        clerTimeout(temporizador);
    }, false)
})(window, document);

// clearInterval(id)
(function (win, doc){
    'use strict';
    var counter = 0;
    var $button = doc.querySelector('[data-pamplona="button"]');
    var temporizador;
    
    function timer(){
        console.log( 'timer', counter++);
    }
    temporizador = setInterval(timer, 2000);   
    
    $button.addEventListener('click', function(){
        clearInterval(temporizador);
    }, false)
})(window, document);






























