(function(){
    'use strict';

            function DOM(elements){
                this.element = document.querySelectorAll(elements);
            }; 
    
            var $meuArray = [ 'paulo', 'natalie', 'lucinda', 'cordelia'];
            var ages = [32, 33, 16, 40];
            var $myList = new DOM('[data-js="myList"]');   
            var $p = new DOM('[data-js="paragraph"]');     
            var $a = new DOM('[data-js="link"]');
    
    
            // Challenge 26 ******************************************************
    
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
            console.log('Elementos selecionados:', $a.get());
            console.log('$a é filho de body?', $a.get()[0].parentNode === document.body);
            $a.on('click', function handleClick(e) {
              e.preventDefault();
              console.log('clicou');
                $a.off('click', handleClick);
            });
    
    
    
            // Challenge 27 BY FERNANDO DACIUK *******************************************************
            /*
            function DOM(elements){
                this.element = document.querySelectorAll(elements);
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
            DOM.prototype.get = function get() {
                return this.element;
            };
            */
            console.log('DACIUK START');
    
            var $a = new DOM('[data-js="link"]');
    
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
            
            
            
            
            
            // TESTES DE TODOS ACIMA:
            
            // for each:
            
            $a.forEach(function(item, index){
                console.log(item.firstChild.nodeValue);
            });
            /*
            Link 1
            Link 2
            Link 3
            Link 4    
            */
    
            // map
            var dataJS1 = $a.map(function(item, index){
                return item.getAttribute('data-js');
            });
            console.log(dataJS1); // novo array criado.
            // (4) ["link", "link", "link", "link"]
    
            // reduce:
            var dataJS2 = $a.reduce(function(acc, item, index){
                return acc + ' ' + item.getAttribute('data-js') + ' ' + index;
            }, 0);
            console.log(dataJS2); // novo array criado.
            
            // filter:
            var dataJS3 = $a.filter(function(item, index){
                return index > 1;
            }); // o professor não fez esses exemplos testados de filter, every e some.
            console.log(dataJS3);
            // (2) [a, a]
    
    
    
    
            // PARTE 2: MÉTODOS ESTÁTICOS

            // BY PAULO:
            DOM.isArray = function isArray(myObj){
                        return Object.prototype.toString.call(myObj)  === '[object Array]';
            };
            console.log(DOM.isArray([1, 2, 3]));
    
            // OU Daciuk 1:
            DOM.prototype.isArray = function isArray(myObj){
                        return Object.prototype.toString.call(myObj)  === '[object Array]';
            };
            console.log(DOM.prototype.isArray([1, 2, 3]));
    
            // OU Daciuk 2:
            var dom = new DOM();
            DOM.prototype.isArray = function isArray(myObj){
                        return Object.prototype.toString.call(myObj)  === '[object Array]';
            };
            console.log(dom.isArray([1, 2, 3]));
    
            // E vale o mesmo para os demais. Tudo igual.
    
    
    
    
            console.log('DACIUK END');
            // ***************************************************************************************
    
    
    
            // Challenge 27 ******************************************************

            /*
            Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
            métodos semelhantes aos que existem no array, mas que sirvam para os
            elementos do DOM selecionados.
            Crie os seguintes métodos:
            - forEach, map, filter, reduce, reduceRight, every e some.
            */    
    
            // FOR:
            DOM.prototype.myFor = function myForEach(){
                for(var i=0; i<this.element.length; i++){
                    console.log(this.element[i]);
                }
            }    
    
            $myList.myFor();
            /*
            <li data-brackets-id="39" data-js="myList">1</li>
            <li data-brackets-id="40" data-js="myList">2</li>
            <li data-brackets-id="41" data-js="myList">3</li>
            <li data-brackets-id="42" data-js="myList">4</li>
            <li data-brackets-id="43" data-js="myList">5</li>
            <li data-brackets-id="44" data-js="myList">6</li>
            <li data-brackets-id="45" data-js="myList">7</li>
            */
            $a.myFor();
            /*
            <a data-brackets-id="36" data-js="link" href="#">Link 1</a>
            <a data-brackets-id="37" data-js="link" href="#">Link 2</a>
            */
            $p.myFor();
            /*
            <p data-brackets-id="81" data-js="paragraph">…</p>
            <p data-brackets-id="82" data-js="paragraph">…</p>
            <p data-brackets-id="83" data-js="paragraph">…</p>
            <p data-brackets-id="84" data-js="paragraph">…</p>
            <p data-brackets-id="85" data-js="paragraph">…</p>
            */            
            
            // FOR EACH:
            DOM.prototype.myForEach = function myForEach(callback){
                Array.prototype.forEach.call(this.element, callback);
            }
            
            $myList.myForEach(function(item, index, array){console.log('item: ' + item + '     index: ' + index + '     array-like: ' + array);});
            /*
            item: [object HTMLLIElement] index: 0 array-like: [object NodeList]
            item: [object HTMLLIElement] index: 1 array-like: [object NodeList]
            item: [object HTMLLIElement] index: 2 array-like: [object NodeList]
            item: [object HTMLLIElement] index: 3 array-like: [object NodeList]
            item: [object HTMLLIElement] index: 4 array-like: [object NodeList]
            item: [object HTMLLIElement] index: 5 array-like: [object NodeList]
            item: [object HTMLLIElement] index: 6 array-like: [object NodeList]    
            */
            $a.myForEach(function(item, index, array){console.log('item: ' + item + '     index: ' + index + '     array-like: ' + array);});
            /*
            item: http://127.0.0.1:57648/challenge-27/index.html#   index: 0     array-like: [object NodeList]
            item: http://127.0.0.1:57648/challenge-27/index.html#   index: 1     array-like: [object NodeList]    
            */
            $p.myForEach(function(item, index, array){console.log('item: ' + item.nodeName + '     index: ' + index + '     array-like: ' + array);});
            /*
            item: [object HTMLParagraphElement]     index: 0     array-like: [object NodeList]
            item: [object HTMLParagraphElement]     index: 1     array-like: [object NodeList]
            item: [object HTMLParagraphElement]     index: 2     array-like: [object NodeList]
            item: [object HTMLParagraphElement]     index: 3     array-like: [object NodeList]
            item: [object HTMLParagraphElement]     index: 4     array-like: [object NodeList]
            */    

            // FILTER BY INDEX
            DOM.prototype.filterByIndex = function myFilter(myIndex){
                Array.prototype.filter.call(this.element, function(item, index, array) {
                    if (index == myIndex) {
                        console.log(item, item.nodeName, index);
                    }
                });
            }
            $myList.filterByIndex(6);  

            // FILTER BY NODE NAME
            DOM.prototype.filterByNodeName = function myFilter(myNodeName){
                Array.prototype.filter.call(this.element, function(item, index, array) {
                    if (item.nodeName == myNodeName) {
                        console.log(item, item.nodeName, index);
                    }
                });
            }            
            $myList.filterByNodeName('LI');
            
            // FILTER BY INNER HTML
            DOM.prototype.filterByInnerHTML = function myFilter(innerHTML){
                Array.prototype.filter.call(this.element, function(item, index, array) {
                    if (item.innerHTML == innerHTML) {
                        console.log(item.innerHTML, item.nodeName, index);
                    }
                });
            }            
            $myList.filterByInnerHTML(1);
            
            // MAP
            DOM.prototype.myMap = function myMap(callback){
                Array.prototype.map.call(this.element, callback);
            }
            
            $p.myMap(function(item, index, array){console.log(index + 100);});
            /*
            100
            101
            102
            103
            104
            */    
            
            // REDUCE
            DOM.prototype.myReduce = function myReduce(callback){
                Array.prototype.reduce.call(this.element, callback);
            }
            var meuReduce = $myList.myReduce(function(total, currentItem, currentIndex, array){ 
                return total + currentItem.innerHTML; 
            }, 0);
            console.log(meuReduce);
    
            // TESTE DEBUG
            var arr = [ 1, 2, 3, 4, 5 ];
            var reduce = arr.reduce(function(acumulado, valorAtual, index, array){
                return acumulado + valorAtual;
            }, 0);
            console.log(reduce);    
            
            
            // REDUCE RIGHT
            console.log('SOME START');
            // SOME
            DOM.prototype.mySome = function mySome(callback){
                Array.prototype.some.call(this.element, callback);
            }
            $myList.mySome(function(item){ 
                console.log(item.innerHTML > 4); 
            }, 0);
            //console.log(meuSome);

            console.log('SOME END');

            

            
            // EVERY

            

            

            

            // STATIC METHODS **********************************************************************
    
            /*
            Crie também métodos que verificam o tipo do objeto passado por parâmetro.
            Esses métodos não precisam depender de criar um novo elmento do DOM, podem
            ser métodos estáticos.

            Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
            no objeto, como nos exemplos abaixo:
            DOM.isArray([1, 2, 3]); // true
            DOM.isFunction(function() {}); // true
            DOM.isNumber('numero'); // false

            Crie os seguintes métodos para verificação de tipo:
            - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
            O método isNull deve retornar `true` se o valor for null ou undefined.
            */
    
            console.log('STATIC METHODS PAULO');
    
            DOM.realTypeOf = function realTypeOf(myObj){
                    return Object.prototype.toString.call(myObj);                
            };
            console.log(DOM.realTypeOf('paulo'));
            // "[object String]"
            console.log(DOM.realTypeOf(undefined));
            // "[object Undefined]"
            console.log(DOM.realTypeOf(null));
            // "[object Null]"    
            console.log(DOM.realTypeOf(12));
            // "[object Number]"
    
            DOM.isArray = function isArray(myObj){
                        return Object.prototype.toString.call(myObj)  === '[object Array]';
            };
            console.log(DOM.isArray([1, 2, 3]));
            // true
            DOM.isFunction = function isFunction(myObj){
                        return Object.prototype.toString.call(myObj)  === '[object Function]';
            };
            console.log(DOM.isFunction(function() {}));
            // true
            DOM.isNumber = function isNumber(myObj){
                        return Object.prototype.toString.call(myObj)  === '[object Number]';
            };
            console.log(DOM.isNumber(1));
            // true
            DOM.isString = function isString(myObj){
                        return Object.prototype.toString.call(myObj)  === '[object String]';
            };
            console.log(DOM.isString('olá você'));
            // true
            DOM.isBoolean = function isBoolean(myObj){
                        return Object.prototype.toString.call(myObj)  === '[object Boolean]';
            };
            console.log(DOM.isBoolean(1 === 2));
            // true
            DOM.isNull = function isNull(myObj){
                        return 
                            Object.prototype.toString.call(myObj)  == '[object Undefined]' || Object.prototype.toString.call(myObj)  =='[object Null]';
            };
            console.log(DOM.isNull(undefined));
            // true    
            console.log(DOM.isNull(null));
            // true        
    
            
    
    
    
    
            // NOT STATIC **********************************************************************
            DOM.prototype.realTypeOf = function realTypeOf(){
                    return Object.prototype.toString.call(this.element);                
            };
    
            $myList.realTypeOf();
            // "[object NodeList]"
            
            DOM.prototype.isNodeList = function isNodeList(){
                        return Object.prototype.toString.call(this.element)  === '[object NodeList]';
            };
            $myList.isNodeList();
            // true
    
            DOM.prototype.isArray = function isArray(){
                        return Object.prototype.toString.call(this.element)  === '[object Array]';
            };
            $myList.isArray();
            // false
            
    
    
    
})();

