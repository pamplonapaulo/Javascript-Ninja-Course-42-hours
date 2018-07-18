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

/*
**********************************************
DACIUK CODE START
**********************************************
*/

/*

ALERTA MUDANÇAS NA LIB DOM:

Em boa parte da revisão deste challenge, Daciuk se ocupou de melhorias na LIB DOM. Todas as alterações visaram tornar mais simples as calls da LIB.

Veja, portanto, a nova LIB e a documentação destas melhorias em DOM-DACIUKchallenge29.js.

Dentre as alterações correlatas porém feitas fora do arquivo da LIB, note que Daciuk não passa mais 'DOM' no parâmetro da nossa IIFE principal. Em vez disso, ele a chama de '$', tal qual a famosa lib jQuery em inúmeros de seus comandos. Portanto:

ONDE ANTERIORMENTE NOSSA IFFE TINHA:
************************************

(function(DOM) {
  'use strict';
    
    function app(){
        return {
        
            **(ALL THE FUCKING CODE)**
        
        };        
    }
    
    app().init();
    
})(window.DOM);        
        

AGORA NOSSA IIFE TEM:
********************

(function($) {
  'use strict';
    
    function app(){
        return {
        
            **(ALL THE FUCKING CODE)**
        
        };        
    }
    
    app().init();
    
})(window.DOM);        
*/


(function($) {
  'use strict';
    
    
    // Originalmente, era assim que Daciuk começava o código: com esta function app dentro da IIFE.
    //function app(){
    
    
    // Porém agora a estratégia é ter essa function em forma de uma OUTRA(SEGUNDA) IIFE:
    var app = (function appControler(){
        // a function pode ser anônima. se for nomeada, não pode conflitar com o nome da própria var, ou acarretará em erro.
        
        return {
            
            // Procure sempre NOMEAR OS MÉTODOS, será mais fácil para debbugar depois. Use o mesmo nome dado na função.
            
            init: function init(){
                console.log('app init');
                this.companyInfo(); // Existem alguns problemas possíveis decorrentes deste tipo de uso de THIS.
                this.initEvents();
            },
            
            initEvents: function initEvents(){
                $('[data-js="new-car"]').on('submit', this.handleSubmit);
            },
            
            handleSubmit: function handleSubmit(e){
                e.preventDefault();
                console.log('submit');
                var $tableCar = $('[data-js="table-car"]').get();
                //$tableCar.appendChild(this.createNewCar());
                $tableCar.appendChild(app.createNewCar());
                
                // wrong code:
                //$tableCar.appendChild(this.createNewCar());
                /* O 'this' bem acima não é o mesmo 'this' que há dentro de initEvents(). 
                
                O código correto seria:
                $tableCar.appendChild(app().createNewCar());
                Porém Daciuk recomenda e faz com que a function app() venha a ser, na verdade, uma IIFE.
                Sobre isso, veja comentários acima logo abaixo de  'use strict'.
                
                Logo, o código final será:
                $tableCar.appendChild(app.createNewCar());

                */
            },
            
            createNewCar: function createNewCar(){
                var $fragment = document.createDocumentFragment();
                var $tr = document.createElement('tr');
                var $tdImage = document.createElement('td');
                var $image = document.createElement('img');
                var $tdBrand = document.createElement('td');
                var $tdYear = document.createElement('td');
                var $tdPlate = document.createElement('td');
                var $tdColor = document.createElement('td');
                
                // Inserção da <img> com source value. Duas opções:
                // opção 1:
                //$image.src = $('[data-js="input-url"]').get().value;
                // opção 2:
                $image.setAttribute('src', $('[data-js="input-url"]').get().value);
                $tdImage.appendChild($image);
                
                $tdBrand.textContent = $('[data-js="input-marca"]').get().value;
                $tdYear.textContent = $('[data-js="input-ano"]').get().value;
                $tdPlate.textContent = $('[data-js="input-placa"]').get().value;
                $tdColor.textContent = $('[data-js="input-cor"]').get().value;
                
                $tr.appendChild($tdImage);
                $tr.appendChild($tdBrand);
                $tr.appendChild($tdYear);
                $tr.appendChild($tdPlate);
                $tr.appendChild($tdColor);
                
                /*
                Usando createDocumentFragment, toda a manipulação do Dom está sendo feita antes de fazer o append da 'table row' ($tr), para deixar a aplicação rápida.
                */
                return $fragment.appendChild($tr);
            },
            
            companyInfo: function companyInfo(){
                var ajax = new XMLHttpRequest();
                ajax.open('GET', 'company.json', true); // 'true' pois queremos chamar de forma assíncrona.
                ajax.send(); // 'send' é o que busca o arquivo.
                ajax.addEventListener('readystatechange', this.getCompanyInfo, false);
                // Resposta para a questão da função abaixo: o 'this' é o próprio elemento ('ajax') que chamou o evento.
                
                console.log('COMPANY INFO', this)
            },
            
            getCompanyInfo: function getCompanyInfo(){
                //console.log('Quem é o this: ', this);
                // Aqui para te mostrar quem é o 'this' aqui: 'XMLHttpRequest {}'
                // 'XMLHttpRequest {}' é o elemento vinculado ao evento qeu faz a call dessa função.
                
                //if ( app().isReady() ) // Ler comment 'Leia-me 1'.
                if(!app.isReady.call(this)) // Ler comment 'Leia-me 2'.
                    return;
                    //console.log('call ', app().isReady.call(this))
                    
                    var data = JSON.parse(this.responseText);
                    console.log(data);
                    console.log(this.responseText);
                
                var $companyName = $('[data-js="company-name"]').get();
                var $companyPhone = $('[data-js="company-phone"]').get();
                $companyName.textContent = data.name;
                $companyPhone.textContent = data.phone;
                //console.log(this.responseText); // Reforçando: nesse contexto (isto é, nessa function) 'this' é o elemento 'ajax', portanto 'ajax.responseText'.
                // responseText traz todo o objeto dentro do arquivo.

                /* Leia-me 1:
                Se aqui dentro deste método (getCompanyInfo) 'this' se refere a 'ajax', como podemos chamar uma 'outra propriedade' de app()?
                Resposta: 'app().outraPropriedade'. No caso, chamamos 'app().isReady()'
                */

                /* Leia-me 2:
                E se quisermos passar o 'this' de 'isReady()' que seja o 'this' de 'ajax'?
                Resposta: app().isReady.call(this).
                call ou apply permitem passar um 'this' por método.
                */
            },
            
            isReady: function isReady(){
                return this.readyState === 4 && this.status === 200;
            }            
        };        
    })(); // Fechamento da segunda IIFE criada quase no fim da revisão do challenge de Daciuk.

    // Substituindo essa forma de call:
    // app().init();
    
    // Por essa:
    app.init();
    
})(window.DOM);
/*
**********************************************
DACIUK CODE END
**********************************************
*/











/*
**********************************************
PAULO CODE START
**********************************************
*/


// TURN ON / TURN OFF (MY CODE BELLOW):

/*




(function(doc, DOM) {
  'use strict';
    
    function app(){

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
        }
        var carsArray = [];
        
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
                html += '<li array-count="' + i + '"><div data-js="delete">&#x2716;</div><h6>Modelo:</h6><h6 data-js="modelo">' + carsArray[i].modelo + '</h6><h6>Marca:</h6><h6 data-js="marca">' + carsArray[i].marca + '</h6><h6>Ano:</h6><h6 data-js="ano">' + carsArray[i].ano + '</h6><h6>Placa:</h6><h6 data-js="placa">' + carsArray[i].placa + '</h6><h6>Cor:</h6><h6 data-js="cor">' + carsArray[i].cor +'</h6><div class="circle" data-js="img" style="background-image: url(\'' + carsArray[i].imageUrl + '\');"></div></li>';
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
*/