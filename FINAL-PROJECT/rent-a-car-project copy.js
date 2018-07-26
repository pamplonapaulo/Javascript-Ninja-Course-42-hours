(function (doc, DOM) {
  'use strict';

    function app(){
        
        var debuggerCounter = 0;
        
        var carsArray = [];
        var $formNewCar = new DOM('[data-js="new-car"]');
        var $modelo = new DOM('[data-js="input-modelo"]');
        var $marca = new DOM('[data-js="input-marca"]');
        var $ano = new DOM('[data-js="input-ano"]');
        var $placa = new DOM('[data-js="input-placa"]');
        var $cor = new DOM('[data-js="input-cor"]');
        var $imageUrl = new DOM('[data-js="input-url"]');
        var $message = new DOM('[data-js="message-display"]');
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
            this.status = 'isAvailable';
            //this.rentDailyPrice = 140;
            //this.rentDailyTaxes = 0.15;
        }
        
        $formNewCar.on('submit', handleSubmitForm);        
                
        function handleSubmitForm(event){
            event.preventDefault();
            
            var newCar = new Carro($modelo,$marca,$ano,$placa,$cor,$imageUrl);
            
            idGenerator(newCar);
            carsArray.push(newCar);
            
            cardBuilder(newCar);
            updateMessage(carsArray);
            
            setFlipBtn(newCar);
            setDeleteBtn(newCar);
            setSwitcherBtn(newCar);
            
            saveOnServer(newCar);
        }
        
        function idGenerator(newCar){
            newCar.id = sortNumber();
            if (carsArray.length > 0)
                return scanDuplication(newCar);    
        }
        
        function sortNumber(){
            return Math.round(Math.random() * 99);
        }
        
        function scanDuplication(newCar){
            for (var i=0; i<carsArray.length; i++){
                if(carsArray[i].id === newCar.id){
                    newCar.id = sortNumber();
                    scanDuplication(newCar);
                }
            }
        }
        
        function cardBuilder(newCar){
            
            var card = document.createElement('li');
            card.setAttribute("id", newCar.id);
            card.classList.add(newCar.status);
                
            var html = '<div class="my_card"><div class="card__wrapper"><div class="my_front"><div data-js="flip-btn"><i class="material-icons">import_export</i></div><h6>Modelo:</h6><h6 data-js="modelo">' + newCar.modelo + '</h6><h6>Marca:</h6><h6 data-js="marca">' + newCar.marca + '</h6><h6>Ano:</h6><h6 data-js="ano">' + newCar.ano + '</h6><h6>Placa:</h6><h6 data-js="placa">' + newCar.placa + '</h6><h6>ID number:</h6><h6 data-js="id">' + newCar.id +'</h6><div class="circle" data-js="img" style="background-image: url(\'' + newCar.imageUrl + '\');"></div><h6><i class="material-icons car-status-icon">' + setStatusIcon(indexSelector(newCar)) + '</i></h6></div>' + '<div class="my_back"><div data-js="flip-btn"><i class="material-icons">import_export</i></div><div data-js="delete"><i class="material-icons">delete_forever</i></div><h6 class="status-text">' + setStatusTitle(indexSelector(newCar)) + '</h6><div class="back-card-background"><input data-js="status-switcher" type="range" min="0" max="2" value="' + setLittleCarPosition(indexSelector(newCar)) + '" /><div class="store-wrapper"><span class="store">loja</span><div class="sunbrust"></div><div class="wrap-car-stand"><div class="car-stand"></div></div></div><div class="mechanic-wrapper" ><div class="mechanic"></div></div></div><h6 class="status-icon"><i class="material-icons car-status-icon">' + setStatusIcon(indexSelector(newCar)) + '</i></h6></div></div></div>';
            
            card.innerHTML = html;
            
            $cadastro.element[0].appendChild(card);
        }        
                        
        function updateMessage(array){
            $message.element[0].innerHTML = 'Veículos cadastrados: ' + (array.length);
        }
        
        function setStatusIcon(index){
            if (carsArray[index].status === 'isAvailable')
                return 'vpn_key';
            if (carsArray[index].status === 'isRented')
                return 'block';
            if (carsArray[index].status === 'isDelayed')
                return 'alarm';
            if (carsArray[index].status === 'isFixing')
                return 'report';
        }
        
        function setStatusTitle(index){
            if (carsArray[index].status === 'isAvailable')
                return 'disponível';
            if (carsArray[index].status === 'isRented')
                return 'alugado';
            if (carsArray[index].status === 'isDelayed')
                return 'atrasado';
            if (carsArray[index].status === 'isFixing')
                return 'manutenção';
        }
        
        function setLittleCarPosition(index){
            if (carsArray[index].status === 'isRented' || carsArray[index].status === 'isDelayed')
                return 0;
            if (carsArray[index].status === 'isAvailable')
                return 1;
            if (carsArray[index].status === 'isFixing')
                return 2;
        }
        
        function changeCarStatus(newCar){
            return function (e) {

                var index = indexSelector(newCar);

                if (event.target.value == 0)
                    carsArray[index].status = 'isRented';
                if (event.target.value == 1)                  
                    carsArray[index].status = 'isAvailable';
                if (event.target.value == 2)
                    carsArray[index].status = 'isFixing';

                updateCardHtlm(index, newCar);
            }
        }  
        
        function updateCardHtlm(index, newCar){
            var $statusIcon = idSelector(newCar).querySelectorAll('.car-status-icon');
            var $statusText = idSelector(newCar).querySelector('.status-text');
            var $switcherValue = idSelector(newCar).querySelector('[data-js="status-switcher"]');
            
            // LI element:
            idSelector(newCar).classList.remove('isAvailable', 'isFixing', 'isRented', 'isDelayed');
            idSelector(newCar).classList.add(carsArray[index].status);
            
            // front-card:
            $statusIcon[0].innerHTML = setStatusIcon(index);
            
            // back-card:
            $statusIcon[1].innerHTML = setStatusIcon(index);
            $statusText.innerHTML = setStatusTitle(index);
            $switcherValue.setAttribute("value", setLittleCarPosition(index));
        }
        
        function setFlipBtn(newCar){
            var $flipBtn = idSelector(newCar).querySelectorAll('[data-js="flip-btn"]');
            for (var x = 0; x < $flipBtn.length; x++){
               $flipBtn[x].addEventListener('click', function(){
                   idSelector(newCar).childNodes[0].classList.toggle('is-switched');
               });
            }
        }
        
        function setSwitcherBtn(newCar){
            var $switchersArray = idSelector(newCar).querySelector('[data-js="status-switcher"]');
            $switchersArray.addEventListener('click', changeCarStatus(newCar) );    
        }
        
        function setDeleteBtn(newCar){
            var $deleteBtn = idSelector(newCar).querySelector('[data-js="delete"]');
            $deleteBtn.addEventListener('click', function(){
                carsArray.splice(indexSelector(newCar),1);
                idSelector(newCar).parentNode.removeChild(idSelector(newCar));
                updateMessage();
            });         
        }
        
        function indexSelector(newCar){
            for (var i=0; i<carsArray.length; i++){
                if(carsArray[i].id === newCar.id)
                    return i;
            }            
        }
        
        function idSelector(newCar){
            return document.querySelector('[id="' + newCar.id + '"]');
        }
        
        
        function saveOnServer(newCar){
            
            var ajax = new XMLHttpRequest();
            ajax.open('POST', 'http://localhost:3000/car');
            ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            ajax.send('status='+newCar.status+
                      '&id='+newCar.id+
                      '&marca='+newCar.marca+
                      '&modelo='+newCar.modelo+
                      '&ano='+newCar.ano+
                      '&placa='+newCar.placa+
                      '&cor='+newCar.cor+
                      '&imageUrl='+newCar.imageUrl);
            
            ajax.onreadystatechange = function(){
                if(ajax.readySate == 4){
                    console.log('Carro cadastrado!', ajax.responseText);
                }
            }
                      
            var get = new XMLHttpRequest();
            get.open('GET', 'http://localhost:3000/car/');
            get.send();
            get.onreadystatechange = function(){
                if(get.readyState === 4){
                    
                    serverObjects = JSON.parse(get.responseText)[indexSelector(newCar)];
                    
                    console.log(serverObjects);
                    console.log('paulo');
                }
            };
        }
        
        var serverObjects = '';
        
        function isPopulated(serverJSON){
            if(serverJSON){
                
                console.log(serverJSON);
               
               } else {
                   
                console.log(serverJSON);
               }            
        } 
        
        //isPopulated(serverJSON);
        
        function serverJSON(){
            
            var get = new XMLHttpRequest();
            get.open('GET', 'http://localhost:3000/car/' );
            get.send();
            get.onreadystatechange = function(){
                if(get.readyState === 4){
                    console.log(JSON.parse(get.responseText));
                    console.log('rodando function serverJSON');
                    
                    return JSON.parse(get.responseText);
                    
                    //reloadExistingCards($json);
                }
            };            
        }
        
        function reloadExistingCards(cars){
            for(var i=0; i<cars.length; i++){
                
                
            carsArray.push(cars[i]);
            
            cardBuilder(cars[i]);
            
            setFlipBtn(cars[i]);
            setDeleteBtn(cars[i]);
            setSwitcherBtn(cars[i]);
            }
            updateMessage(cars);
        }
    }

    window.app = app;
    app();
    
})(document, window.DOM);



