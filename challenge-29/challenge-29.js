(function(doc, DOM) {
  'use strict';

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */
    function app(){
        
        var carsArray = [];
        var $formNewCar = new DOM('[data-js="new-car"]');
        var $modelo = new DOM('[data-js="input-modelo"]');
        var $marca = new DOM('[data-js="input-marca"]');
        var $ano = new DOM('[data-js="input-ano"]');
        var $placa = new DOM('[data-js="input-placa"]');
        var $cor = new DOM('[data-js="input-cor"]');
        var $imageUrl = new DOM('[data-js="input-url"]');
        var $submit = new DOM('[type="submit"]');
        var $status = new DOM('[data-js="status"]');
        var $cadastro = new DOM('[data-js="cadastro"]');
        
        function loadCompany(){
            var $companyName = new DOM('[data-js="company-name"]');
            var $companyPhone = new DOM('[data-js="company-phone"]');
            var ajax = new XMLHttpRequest();
            ajax.open('GET', 'company.json');
            ajax.send();
            var response = '';
            ajax.addEventListener('readystatechange', function(){
                if ( isRequestOk() ){

                    try {
                        response = JSON.parse(ajax.responseText);    
                    }
                    catch(e) {
                        response = ajax.responseText;    
                    }
                    $companyName.element[0].innerHTML = response.name;            
                    $companyPhone.element[0].innerHTML = response.phone;
                } 
            }, false);  
            function isRequestOk(){
                return ajax.readyState === 4 && ajax.status === 200;
            }
        }
        loadCompany();
        
        function Carro(modelo, marca, ano, placa, cor, imageUrl) {
            this.modelo = modelo.element[0].value;
            this.marca = marca.element[0].value;
            this.ano = ano.element[0].value;
            this.placa = placa.element[0].value;
            this.cor = cor.element[0].value;
            this.imageUrl = imageUrl.element[0].value;
            this.serial = (1 + carsArray.length).toString();
        }
        
        $formNewCar.on('submit', handleSubmitForm);        
                
        function handleSubmitForm(event){
            event.preventDefault();
            
            var newCar = new Carro($modelo,$marca,$ano,$placa,$cor,$imageUrl);
                        
            carsArray.push(newCar);
            
            htmlBuilder();
            
            getMessage();
                        
        }        
                        
        function htmlBuilder(){
                        
            var html = '';
            
            for (var i=0; i<carsArray.length; i++){
                html += '<li array-count="' + i + '"><div data-js="delete">&#x2716;</div><h6>Modelo:</h6><h6 data-js="modelo">' + carsArray[i].modelo + '</h6><h6>Marca:</h6><h6 data-js="marca">' + carsArray[i].marca + '</h6><h6>Ano:</h6><h6 data-js="ano">' + carsArray[i].ano + '</h6><h6>Placa:</h6><h6 data-js="placa">' + carsArray[i].placa + '</h6><h6>Cor:</h6><h6 data-js="cor">' + carsArray[i].cor +'</h6><div class="circle" data-js="img" style="background-image: url(\'' + carsArray[i].imageUrl + '\');"></div><h6>' + carsArray[i].serial + '</h6></li>';
            }
            
            $cadastro.element[0].innerHTML = html;
             
            var $dels = document.querySelectorAll('[data-js="delete"]');
            for (var x = 0; x < $dels.length; x++){
               $dels[x].addEventListener('click', function(){
                   event.preventDefault();
                   var indexValue = this.closest('[array-count]').getAttribute('array-count');
                   carsArray.splice(indexValue,1);
                   htmlBuilder();
                   getMessage();
               })
            }            
        }
                
        function getMessage(){
            $status.element[0].innerHTML = 'Veículos cadastrados: ' + (carsArray.length);            
        }
    }

    window.app = app;
    app();
    
})(document, window.DOM);