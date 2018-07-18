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
            this.status = 'isAvailable';
            this.rentDailyPrice = 140;
            this.rentDailyTaxes = 0.15;
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
                
                html += '<li class="' + carsArray[i].status + '"><div array-count="' + i + '" class="my_card"><div class="card__wrapper"><div class="my_front"><div data-js="flip-btn"><i class="material-icons">import_export</i></div><h6>Modelo:</h6><h6 data-js="modelo">' + carsArray[i].modelo + '</h6><h6>Marca:</h6><h6 data-js="marca">' + carsArray[i].marca + '</h6><h6>Ano:</h6><h6 data-js="ano">' + carsArray[i].ano + '</h6><h6>Placa:</h6><h6 data-js="placa">' + carsArray[i].placa + '</h6><h6>Cor:</h6><h6 data-js="cor">' + carsArray[i].cor +'</h6><div class="circle" data-js="img" style="background-image: url(\'' + carsArray[i].imageUrl + '\');"></div><h6><i class="material-icons">' + getStatusIcon(i) + '</i></h6></div>' + 
                
                '<div class="my_back"><div data-js="flip-btn"><i class="material-icons">import_export</i></div><h6 class="show-status">' + getStatusTitle(i) + '</h6><div class="set-status-box"><input data-js="rentIt" value="Alugar" type="button" /><input data-js="receiveIt" value="Receber" type="button" /><input data-js="fixIt" value="Consertar" type="button" /></div><div class="wrap"><h6>Serial Number<span data-js="">' + carsArray[i].serial + '</span></h6></div><h6 class="status-icon"><i class="material-icons">' + getStatusIcon(i) + '</i></h6></div></div></div></li>';
            }
            
            $cadastro.element[0].innerHTML = html;            
             
            var $flipButtons = document.querySelectorAll('[data-js="flip-btn"]');
            
            for (var x = 0; x < $flipButtons.length; x++){
               $flipButtons[x].addEventListener('click', function(){
                   event.preventDefault();
                   
                   this.closest('[array-count]').classList.toggle('is-switched');
                                      
                   //var indexValue = this.closest('[array-count]').attributes[0].nodeValue;
                   //carsArray.splice(indexValue,1);
                   //htmlBuilder();
                   //getMessage();
               })
            }
            
        }
                
        function getMessage(){
            $status.element[0].innerHTML = 'Veículos cadastrados: ' + (carsArray.length);            
        }
        
        function getStatus(index){
            return carsArray[index].status;
        }
        
        function getStatusIcon(index){
            if (carsArray[index].status === 'isAvailable'){
                return 'vpn_key';
            } else if (carsArray[index].status === 'isRented'){
                return 'block';
            } else if (carsArray[index].status === 'isDelayed'){
                return 'alarm';
            } else if (carsArray[index].status === 'isFixing'){
                return 'report';
            }        
        }
        function getStatusTitle(index){
            if (carsArray[index].status === 'isAvailable'){
                return 'disponível';
            } else if (carsArray[index].status === 'isRented'){
                return 'alugado';
            } else if (carsArray[index].status === 'isDelayed'){
                return 'atrasado';
            } else if (carsArray[index].status === 'isFixing'){
                return 'manutenção';
            }        
        }        
        
        
        
        
    }

    window.app = app;
    app();
    
})(document, window.DOM);