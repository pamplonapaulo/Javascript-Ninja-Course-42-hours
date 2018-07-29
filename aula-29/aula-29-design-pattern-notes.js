/*
            * * * * * * * * * * * * * * * * * * * * * *
            *                                         *
            *    ÍNDICE DA AULA 29                    *
            *                                         *
            *    1. module pattern - parte 1          *
            *                                         *
            *      a - exportação/ importação         *
            *      b - module pattern                 *
            *                                         *
            *    2. module pattern - parte 2          *
            *                                         *
            *      a - revealing module pattern       *
            *      b - closures .                     *
            *                                         *
            * * * * * * * * * * * * * * * * * * * * * *
                     
    1. module pattern - parte 1
    
    a)    exportação/ importação:
    
    Nas últimas aulas, vimos como utilizar uma lib javascript, no caso a lib DOM. Mas em vez de utilizá-la junto do código principal, no mesmo arquivo, nós vamos deixar separada para ser importada externamente.
    
    Para isso, precisamos aprender a separar o código por módulos. Nós não queremos ter arquivos com quase 200 linhas de código, como fizemos anteriormente.
    
    Considerando que por boas práticas nossos códigos ficam sempre dentro de IIFEs, como permitir que o arquivo "main.js" (por exemplo) consiga acessar o escopo da lib do DOM salva externamente em "LibDOM.js"?
    
    
    Portanto, além das script tags no HTML chamando ao arquivo da Library antes do código principal, eis um exemplo curto de como tornar o escopo da Library acessível de dentro da outra IIFE no código principal:
    
    b)    método 1: module pattern:

    Como melhorar o código fazendo com que ele seja um módulo que possa ser exportado?
    
    Abaixo isso é feitou a partir da inclusão do código dentro de uma function nominal, a qual podemos colocar em 'window', para figurar em escopo global podendo ser lida por outros arquivos.
    
    */

    (function(DOM){

        function app(){

            // ALL THE CODE

        }

        window.app = app; // Atrelando 'app' ao objeto 'window', você o exporta, para caso precise usar externamente.

        app();

    })(window.DOM);
    /*
    
    
    c)    método 2: revealing module pattern

    Revela métodos específicos que você precise.
    */

    (function(DOM){
        
        function app(){
            // A LOT OF CODE
            
            function getMessage(){
                // SOME CODE
            }

            function replaceCEP(){
                // SOME CODE
            }    
            
            return {
                getMessage: getMessage,
                replaceCEP: replaceCEP,
            };            
        }        

        window.app = app;
        // window.app = app();
        // A forma acima, com o call da function feito, faz com que o conteúdo de app() não possa ser totalmente acessado. Ao exportar a function, ela já irá executada.  

        app();

    })(window.DOM);
    // CLOSURES
    // Sempre que você tem uma função, ela cria um contexto, um escopo. Quando você cria outra função dentro dela, aquela que está dentro tem acesso a tudo qeu está dentro e tudo que está fora. 






