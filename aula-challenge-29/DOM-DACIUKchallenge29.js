(function (win){
    'use strict';
    
    /* ************************************************************
    
    LIBRARY DOM
    
    ************************************************************ */
    function DOM(elements){
        /*
        INTERVENÇÃO(3) CHALLENGE 29 - BY DACIUK:
        
        Essa melhoria é para que não necessitemos passar "new" na call de criação de um novo objeto DOM. Em outras palavras, é para que em vez de escrevermos dessa forma:
        var $companyName = new DOM('[data-js="company-name"]');

        Possamos escrever dessa forma:
        var $companyName = DOM('[data-js="company-name"]');

        
        
        
        LIB VELHA:
        this.element = document.querySelectorAll(elements);

        LIB NOVA:
        if(!(this instanceof DOM))
            return new DOM(elements);
        this.element = document.querySelectorAll(elements);
        
        EXPLICAÇÃO:
        Ao chamar a function sem o 'new', o objeto ainda não foi criado e, portanto, essa criação não será uma instância do contructor DOM.
        
        Ok. Breve pausa para falarmos do método 'instanceof':
        
        
        * * * * * * * * * * * * * * *
        *                           *
        *       instanceof          *
        *                           *
        * * * * * * * * * * * * * * *
        
        Ele diz se o objeto faz parte da instância de outro objeto. Retorna TRUE ou FALSE:
        
        Exemplo 1:
        console.log({} instanceof Object); // true
        
        Exemplo 2:
        var $input = new DOM('input');
        console.log($input instanceof DOM); // true
        
        Exemplo 3:
        var $input = '';
        console.log($input instanceof DOM); // false        
        
        Ok. De volta à nossa Lib, quando checamos se o elemento passado por parâmetro da function DOM (no caso, 'this') é instância de DOM e obtemos o resultado 'false', então mandamos que seja criada esse objeto. Quando essa condition for 'true', a function não irá tentar criar esse objeto.
        
        
        */
        if(!(this instanceof DOM))
            return new DOM(elements);
        this.element = document.querySelectorAll(elements);
        /*
        INTERVENÇÃO(2) CHALLENGE 29 - BY DACIUK:
        
        "function DOM(elements){
            this.element = document.querySelectorAll(elements);
            if (this.element.length === 1)
                return this.get();
        };"

        Feita a intervenção abaixo, Daciuk melhora também esta parte da Lib. O objetivo é tornar o código mais simples nas CALLs, de tal forma:
        
        CALL SUPER VELHA:
            $companyName.get()[0].textContent = data.name;
            
        CALL INTERMEDIÁRIA:
            $companyName.get().textContent = data.name;
        
        CALL VERSÃO FINAL:
            $companyName.textContent = data.name;
            
        OBS: As melhorias são melhor sentidas para casos de único item dentro do array-like.
        
        */
        
        // Daciuk desligou isso temporariamente e irá corrigir em breve:
        
        //if (this.element.length === 1)
        //    return this.get(0);
    }
    
    
    /*
    INTERVENÇÃO(1) CHALLENGE 29 - BY DACIUK:
    
    Obs: Mudança no método 'get' para evitar que tenhamos que utilizar '[0]' sempre que formos chamar um elemento que tenha somente um item dentro de si (considerando que estes seletores formam 'array-like' para nosso código).
    
    LIB VELHA:
    DOM.prototype.get = function get() {
                return this.element;
    };
    CALL:
    $variable.get()[0].anyMethod = obj.prop;
    
    
    LIB NOVA:
    DOM.prototype.get = function get(index) {
        if (!index)
            return this.element[0];
        return this.element[index];
    };
    CALL:
    $variable.get().anyMethod = obj.prop;
    
    */
    
    DOM.prototype.get = function get(index) {
        if (!index)
            return this.element[0];
        return this.element[index];
    };
    
    DOM.prototype.getDOMElements = function getDOMElements() {
        return document.querySelectorAll(elements);
    };
    
    DOM.prototype.on = function on(eventType, callback) {
        Array.prototype.forEach.call(this.element, function(element){
            element.addEventListener(eventType, callback, false);
        });
    };

    DOM.prototype.off = function off(eventType, callback) {
        Array.prototype.forEach.call(this.element, function(element){
            element.removeEventListener(eventType, callback, false);
        });                        
    };

    // FOR EACH
    DOM.prototype.forEach = function forEach(){
        return Array.prototype.forEach.apply(this.element, arguments);
    }
    // MAP
    DOM.prototype.map = function map(){
        return Array.prototype.map.apply(this.element, arguments);
    }
    // FILTER
    DOM.prototype.filter = function filter(){
        return Array.prototype.filter.apply(this.element, arguments);
    }
    // REDUCE
    DOM.prototype.reduce = function reduce(){
        return Array.prototype.reduce.apply(this.element, arguments);
    }
    // REDUCE RIGHT
    DOM.prototype.reduceRight = function reduceRight(){
        return Array.prototype.reduceRight.apply(this.element, arguments);
    }
    // EVERY
    DOM.prototype.every = function every(){
        return Array.prototype.every.apply(this.element, arguments);
    }
    // SOME
    DOM.prototype.some = function some(){
        return Array.prototype.some.apply(this.element, arguments);
    }     
    // FOR
    DOM.prototype.for = function myForEach(){
        for(var i=0; i<this.element.length; i++){
            console.log(this.element[i]);
        }
    }    

    // MÉTODOS ESTÁTICOS

    // IS ARRAY
    DOM.isArray = function isArray(myObj){
                return Object.prototype.toString.call(myObj)  === '[object Array]';
    };    
    // IS NUMBER
    DOM.isNumber = function isNumber(myObj){
                return Object.prototype.toString.call(myObj)  === '[object Number]';
    };     
    // IS BOOLEAN
    DOM.isBoolean = function isBoolean(myObj){
                return Object.prototype.toString.call(myObj)  === '[object Boolean]';
    }; 
    // IS STRING
    DOM.isString = function isString(myObj){
                return Object.prototype.toString.call(myObj)  === '[object String]';
    };     
    // IS FUNCTION
    DOM.isFunction = function isFunction(myObj){
                return Object.prototype.toString.call(myObj)  === '[object Function]';
    };    
    // IS NULL
    DOM.isNull = function isFunction(myObj){
                return Object.prototype.toString.call(myObj)  === '[object Null]' || Object.prototype.toString.call(myObj)  === '[object Undefined]';
    };     
    // REAL TYPE OF
    DOM.realTypeOf = function realTypeOf(myObj){
            return Object.prototype.toString.call(myObj);
    };

    /* ************************************************************
    
    END | LIBRARY DOM
    
    ************************************************************ */
            
            // Aqui abaixo estamos vinculando a Library ao objeto window
            win.DOM = DOM;
        
})(window, document); // Não esquecer 'document', pois 'DOM' também faz referência direta ao objeto 'document', não somente 'window'.
        
