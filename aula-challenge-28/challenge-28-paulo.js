  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  */
(function (){
    'use strict';
    
    /* ************************************************************
    
    LIBRARY DOM
    
    ************************************************************ */
    function DOM(elements){
        this.element = document.querySelectorAll(elements);
    }; 
    DOM.prototype.get = function get() {
                return this.element;
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
    // REAL TYPE OF
    DOM.realTypeOf = function realTypeOf(myObj){
            return Object.prototype.toString.call(myObj);
    };    
        
    /* ************************************************************
    
    END | LIBRARY DOM
    
    ************************************************************ */

    /*
    
    No JS:
    - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas deve ser limpo e enviado somente os números para a requisição abaixo;

    - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
    "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
    no input criado no HTML;

    - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela com os dados recebidos.

    - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar a mensagem: "Buscando informações para o CEP [CEP]..."

    - Se não houver dados para o CEP entrado, mostrar a mensagem:
    "Não encontramos o endereço para o CEP [CEP]."

    - Se houver endereço para o CEP digitado, mostre a mensagem:
    "Endereço referente ao CEP [CEP]:"

    - Utilize a lib DOM criada anteriormente para facilitar a manipulação e adicionar as informações em tela.
  
    */
  
    var $nome = new DOM('[data-js="nome"]');
    var $rua = new DOM('[data-js="logradouro"]');
    var $bairro = new DOM('[data-js="bairro"]');
    var $uf = new DOM('[data-js="uf"]');
    var $cidade = new DOM('[data-js="cidade"]');
    var $submit = new DOM('[type="submit"]');
    var $status = new DOM('[id="statusRequest"]');
    
    var $cep1 = new DOM('[data-js="cep-1"]');
    var $cep2 = new DOM('[data-js="cep-2"]');
        
    $cep1.on('keypress', function handleClick(e) {
        if ($cep1.element[0].value.length == $cep1.element[0].maxLength - 1) {
            $cep2.element[0].focus();
        }
    });
    $cep2.on('keyup', function handleClick(e) {
        if ($cep2.element[0].value.length == $cep2.element[0].maxLength) {
            $rua.element[0].focus();
            
            $status.element[0].innerHTML = 'Buscando informações para o CEP ' + $cep1.element[0].value + '-' + $cep2.element[0].value;
            
            getJSON(makeURL());
        }
    });    
        
    function makeURL(){
        
        var fullCep = '';
        var finalCep;
                
        fullCep = $cep1.element[0].value + '-' + $cep2.element[0].value;
        
        if (fullCep.match(/[0-9]{5}-[0-9]{3}/g) === null || fullCep.match(/[0-9]{5}-[0-9]{3}/g) === undefined){
            $status.element[0].innerHTML = 'CEP INVÁLIDO';
        }
        else if (fullCep.match(/[0-9]{5}-[0-9]{3}/g)[0].length === 9){
            finalCep = fullCep.match(/[0-9]{5}-[0-9]{3}/g)[0];
            return 'https://viacep.com.br/ws/' + finalCep + '/json/';
        }
        else {
            $status.element[0].innerHTML = '"else"';      
        }
    }        
        
    function getJSON(url){
        var meuXML = new XMLHttpRequest();
        
        meuXML.open('GET', url);
        meuXML.send();
        var response = '';
        meuXML.addEventListener('readystatechange', function(){
            
            if ( isRequestOk() ) {
                                
                response = JSON.parse(meuXML.responseText);
                
                if (response.logradouro !== undefined) {
                    
                    fillForm(response);
                    $status.element[0].innerHTML = 'Endereço referente ao CEP:<br /> ' + $cep1.element[0].value + '-' + $cep2.element[0].value;
                    
                } else {
                    
                    $status.element[0].innerHTML = 'Não encontramos o endereço para o CEP: ' + $cep1.element[0].value + '-' + $cep2.element[0].value;
                }
            }
            
        }, false);  
        
        function isRequestOk(){
            return meuXML.readyState === 4 && meuXML.status === 200;
        }      
    }
    
    function fillForm(viacep){
                $rua.element[0].value = viacep.logradouro;
                $bairro.element[0].value = viacep.bairro;
                $cidade.element[0].value = viacep.localidade;
                $uf.element[0].value = viacep.uf;
    }
    
    $submit.on('click', function handleClick(e) {
        e.preventDefault();        
        $status.element[0].innerHTML = 'MENSAGEM ENVIADA';
    });     
    
})();