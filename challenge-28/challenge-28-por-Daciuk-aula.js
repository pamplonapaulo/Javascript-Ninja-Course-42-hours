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
    
    Código contém falhas. Refazer com base na API abaixo:
    
    http://apps.widenet.com.br/busca-cep/api-de-consulta
    
    */

    var $formCEP = new DOM('[data-js="form-cep"]');
    var $inputCEP = new DOM('[data-js="input-cep"]');
    var $logradouro = new DOM('[data-js="logradouro"]');
    var $bairro = new DOM('[data-js="bairro"]');
    var $estado = new DOM('[data-js="estado"]');
    var $cidade = new DOM('[data-js="cidade"]');
    var $cep = new DOM('[data-js="cep"]');
    var $status = new DOM('[data-js="status"]');    
    var ajax = new XMLHttpRequest();
    $formCEP.on('submit', handleSubmitFormCEP);
    
    function handleSubmitFormCEP(event){
        event.preventDefault();
        console.log($inputCEP.get()[0].value);
        var url = getUrl();
        ajax.open('GET', url);
        ajax.send();
        getMessage('loading');
        ajax.addEventListener('readystatechange', handleReadyStateChange);
    }
    
    function getUrl(){
        return replaceCEP('https://viacep.com.br/ws/[CEP]/json/');
    }
    
    function clearCEP(){
        return $inputCEP.get()[0].value.replace(/\D/g, '');
    }
    
    function handleReadyStateChange(){
        if (isRequestOk()) {
            getMessage('ok');
            fillCEPFields();
        } 
        /*
        else {
            getMessage('error');
            var data = clearData();
            $logradouro.get()[0].textContent = data.logradouro;
            $bairro.get()[0].textContent = data.bairro;
            $estado.get()[0].textContent = data.uf;
            $cidade.get()[0].textContent = data.localidade;
            $cep.get()[0].textContent = data.cep;
        }
        */
        // Intervenção de Paulo na solução de Daciuk. Diferença na source da URL pode explicar diferença de comportamento, talvez.
    }
    
    function isRequestOk(){
        console.log(ajax.readyState === 4 && ajax.status === 200);
        return ajax.readyState === 4 && ajax.status === 200;
    }
    
    function fillCEPFields(){
        //debugger;
        var data = parseData();
        
        console.log(data);
        
        if (!data || data.erro === true) {
            getMessage('error');
            data = clearData();
            // o data.erro é intervenção de Paulo.
        } 
        $logradouro.get()[0].textContent = data.logradouro;
        $bairro.get()[0].textContent = data.bairro;
        $estado.get()[0].textContent = data.uf;
        $cidade.get()[0].textContent = data.localidade;
        $cep.get()[0].textContent = data.cep;
        
    }
    
    function clearData(){
        return {
            logradouro: '-',
            bairro: '-',
            uf: '-',
            localidade: '-',
            cep: '-'
        }
    }
    
    function parseData() {
        var result;
        try {
            result = JSON.parse(ajax.responseText);
        }
        catch(e) {
            result = null;
        }
        return result;
    }
    
    /*
    function getMessage(type){
        var messages =  {
            loading: 'Buscando informações para o CEP ',
            ok: 'Endereço referente ao CEP: ',
            error: 'Não encontramos o endereço para o CEP '
        };
        return messages[type];
    }
    
    // SINTAXE ABREVIADA:
    function getMessage(type){
        return {
            loading: 'Buscando informações para o CEP ',
            ok: 'Endereço referente ao CEP: ',
            error: 'Não encontramos o endereço para o CEP '
        }[type];
    }
    */
    /*
    function getMessage(type){
        var messages =  {
            loading: 'Buscando informações para o CEP ',
            ok: 'Endereço referente ao CEP: ',
            error: 'Não encontramos o endereço para o CEP '
        };
        var $status = new DOM('[data-js="status"]');
        $status.textContent = messages[type];
    }
    */
    function getMessage(type){
        var messages =  {
            loading: replaceCEP('Buscando informações para o CEP [CEP]...'),
            ok: replaceCEP('Endereço referente ao CEP [CEP]: '),
            error: replaceCEP('Não encontramos o endereço para o CEP [CEP].')            
        };
        $status.get()[0].textContent = messages[type];
    }
    
    function replaceCEP(message){
        return message.replace('[CEP]', clearCEP());
    }
    
        
    
})();