(function (doc, DOM) {
  'use strict';

    function app(){
        
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
            this.serial = (1 + carsArray.length).toString();
            this.status = 'isAvailable';
            this.rentDailyPrice = 140;
            this.rentDailyTaxes = 0.15;
        }
        
        $formNewCar.on('submit', handleSubmitForm);        
                
        function handleSubmitForm(event){
            event.preventDefault();
            
            var newCar = new Carro($modelo,$marca,$ano,$placa,$cor,$imageUrl);
            var carIndex;
                        
            carsArray.push(newCar);
            carIndex = carsArray.length - 1;
            
            cardBuilder(newCar, carIndex);
            setMessage();
            setFlipButtons(carIndex);
            setDeleteButton(carIndex);
            setSwitcher();
        }
        
        function cardBuilder(newCar, carIndex){
            
            var newCard = document.createElement('li');
            
            newCard.classList.add(newCar.status);
                
            var html = '<div array-count="' + carIndex + '" class="my_card"><div class="card__wrapper"><div class="my_front"><div data-js="flip-btn"><i class="material-icons">import_export</i></div><h6>Modelo:</h6><h6 data-js="modelo">' + newCar.modelo + '</h6><h6>Marca:</h6><h6 data-js="marca">' + newCar.marca + '</h6><h6>Ano:</h6><h6 data-js="ano">' + newCar.ano + '</h6><h6>Placa:</h6><h6 data-js="placa">' + newCar.placa + '</h6><h6>Serial Number:</h6><h6 data-js="serial">' + newCar.serial +'</h6><div class="circle" data-js="img" style="background-image: url(\'' + newCar.imageUrl + '\');"></div><h6><i class="material-icons car-status-icon">' + setStatusIcon(carIndex) + '</i></h6></div>' + '<div class="my_back"><div data-js="flip-btn"><i class="material-icons">import_export</i></div><div data-js="delete"><i class="material-icons">delete_forever</i></div><h6 class="status-text">' + setStatusTitle(carIndex) + '</h6><div class="back-card-background"><input data-js="status-switcher" type="range" min="0" max="2" value="' + setLittleCarPosition(carIndex) + '" /><div class="store-wrapper"><span class="store">loja</span><div class="sunbrust"></div><div class="wrap-car-stand"><div class="car-stand"></div></div></div><div class="mechanic-wrapper" ><div class="mechanic"></div></div></div><h6 class="status-icon"><i class="material-icons car-status-icon">' + setStatusIcon(carIndex) + '</i></h6></div></div></div>';
            
            newCard.innerHTML = html;
            
            $cadastro.element[0].appendChild(newCard);
        }        
                        
        function setMessage(){
            $message.element[0].innerHTML = 'Veículos cadastrados: ' + (carsArray.length);
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
        
        function changeCarStatus(){
                        
            var carIndex = this.closest('[array-count]').attributes[0].value;
            var switcherPosition = this.value;
            
            if (switcherPosition == 0){
                carsArray[carIndex].status = 'isRented';
            }
            if (switcherPosition == 1){
                carsArray[carIndex].status = 'isAvailable';
            }
            if (switcherPosition == 2){
                carsArray[carIndex].status = 'isFixing';
            }
            updateCardStatus(carIndex);
        }
        
        function updateCardStatus(index){
            
            var $cardToChange = document.querySelector('[array-count="' + index + '"]').parentElement;
            var $statusIcon = $cardToChange.querySelectorAll('.car-status-icon');
            var $statusText = $cardToChange.querySelector('.status-text');
            var $switcherValue = $cardToChange.querySelector('[data-js="status-switcher"]');
            
            $cardToChange.classList.remove('isAvailable', 'isFixing', 'isRented', 'isDelayed');
            $cardToChange.classList.add(carsArray[index].status);
            
            $statusIcon[0].innerHTML = setStatusIcon(index);
            $statusIcon[1].innerHTML = setStatusIcon(index);
            $statusText.innerHTML = setStatusTitle(index);
            $switcherValue.setAttribute("value", setLittleCarPosition(index));
        }
                
        function setFlipButtons(carIndex){
            
            var $thisCard = document.querySelector('[array-count="' + carIndex + '"]');
            var $cardFlipButtons = $thisCard.querySelectorAll('[data-js="flip-btn"]');
            
            for (var x = 0; x < $cardFlipButtons.length; x++){
               $cardFlipButtons[x].addEventListener('click', function(){
                   $thisCard.classList.toggle('is-switched');
               });
            }
        }
        
        function setDeleteButton(carIndex){
            var $selector = document.querySelector('[array-count="' + carIndex + '"]');
            var $deleteButton = $selector.querySelector('[data-js="delete"]');
            var $cardElement = $selector.parentElement;
            
            $deleteButton.addEventListener('click', function(){
                
                carsArray.splice(carIndex,1);
                                
                $cardElement.parentNode.removeChild($cardElement);
                                
                console.log($cardElement);
                console.log($cadastro);
                console.log(carsArray);
                
                setMessage();
                
            });         
            
        }
        
        function setSwitcher(){
            var $statusSwitcher = new DOM('[data-js="status-switcher"]');
            $statusSwitcher.on('click', changeCarStatus);                        
        }
    }

    window.app = app;
    app();
    
})(document, window.DOM);