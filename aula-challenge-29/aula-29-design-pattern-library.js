(function (win, document){
            'use strict';

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
         
         
         
         
         
         
         
         
         
         
         
         
            
            
            // Aqui abaixo estamos vinculando a Library ao objeto window
            win.DOM = DOM;
        
})(window, document); // Não esquecer 'document', pois 'DOM' também faz referência direta ao objeto 'document', não somente 'window'.
        
