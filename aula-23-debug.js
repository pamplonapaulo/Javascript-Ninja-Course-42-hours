(function (){
    'use strict';
    
// AULA - 23

/*

1.  Chrome Debug - Parte 1

        */
    
        function sum(){
            return Array.prototype.reduce.call(arguments, function(accumulated, item) {
                return accumulated + item;
            });
        }
        console.log(sum( 1, 21, 32, 4 ));
        
    
        /*

        .Exemplo 1: como saber o que ocorre por trás dos panos numa função de reduce?
        
        Chrome - Console.log
        Observar arquivo e linha de comando executado.
        Exemplo: aula-23-debug.js:21 58
        
        
        Call Stack:
        Pilha de execuções a serem feitas ou em execução, na ordem real com que serão/são executados, não representa a mesma ordem do código, especialmente se o código tiver uma callback, por exemplo.
        
        Scope:
        Todos os escopos dos objetos presentes. No nosso exemplo, eles são 'arguments' e 'this', em local e global scope.
        
        Breakpoints:
        No debugger, clique na numeração das linhas do código para adicionar um breakpoint. Em seguida, ele deverá aparecer como um breakpoint selecionado. Clique então em "refresh". O browser deverá ler os códigos até atingir o breakpoint definido.
        O browser ficará meio que carregando eternamento, com o loop no ícone de loading page. Se passarmos o mouse em cima dos códigos no JS, na linha definida como breakpoint, irão aparecer detalhes do comando selecionado.
        
        Dessa forma, podemos esmiuçar cada etapa (oculta) de um método como reduce, quando ele soma cada parâmetro a um sub-total, revelando-nos esses valores intermediários, não somente o resultado final.
        
        Acesso a variáveis locais:
        Dentro deste ambiente de debug, se você clica dentro do código e em seguida tecla "Esc", o browser lhe abrirá um acesso ao console, porém então com acesso ao escopo local daquele trecho onde você clicou, como, por exemplo, acesso á variável "accumulated".
        
        Step into next function call:
        Etrar na próxima chamada de função. Uma vez selecionada alguma function call qualquer, ao clicar neste ícone (lado direito) você será direcionado para o interior da function que está sendo chamada.
        
        Step out of current function:
        É o oposto do item acima, para você ser levado até onde a função está sendo chamada.
        
        */
    
        function sum(){
            return Array.prototype.reduce.call(arguments, function(accumulated, item) {
                return accumulated + item;
            });
        }
        console.log(sum( 1, 21, 32, 4 ));
        
    
        /*
        
2.  Debug - Parte 3

        .Console
        Existem outros métodos além de LOG, como DIR, clear() etc.
        Se você digitar 'console.' , dentro do console, todas as propriedades disponíveis serão exibidas.
        
        
        .Chrome Dev Tools Documentation
        https://developer.chrome.com/devtools
        

4.  Debug - Parte 4

        'debbuger;'
        Dentro do código, é como se cirasse um breakpoint para você no código. Não pertence ao javascript, é uma API dos browsers. Não o utilize em produção, ele irá travar seu código se o console estiver aberto.
        
        Performance
        Como medir o tempo que a nossa aplicação leva para rodar e ser executada?
        A olho nu, tudo parece ser bem rápido. Mas como mensurar?
        Façamos um teste com o código abaixo.
        
        Código "não funcional", código imperativo. Aquele que bloqueará a nossa thread('fio'):
*/
        for (var i = 0; i < 10000; i++){
            console.log('calculando...');
        }
/*
        Foram síncrona, imperativa, que bloqueia a navegador. Como medir esse tempo?
*/
        console.time('Calculando tempo do for');
        for (var i = 0; i < 10000; i++){
            console.log('calculando...');
        }
        console.timeEnd('Calculando tempo do for');
        // Calculando tempo do for: 1631.402099609375ms
    
    /*
        console.table( arr );
        
        Melhor forma de visualizar objetos dentro do console.
        Ideal para objetos com um mesmo padrão de propriedades, dessa forma:
    */
        var arr = [
            { item: 'Arroz', price: 'R$10'},
            { item: 'Feijão', price: 'R$20'},
            { item: 'Macarrão', price: 'R$12'},
            { item: 'Carne', price: 'R$30'}
        ];
        console.table( arr );
    
    
    
})();