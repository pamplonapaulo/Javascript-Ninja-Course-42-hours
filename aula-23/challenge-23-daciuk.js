(function (win, doc){
    'use strict';
    
    var $visor = doc.querySelector('[data-js="myDisplay"]');
    var $buttonsNumbers = doc.querySelectorAll('[data-js="num"]');
    var $buttonCE = doc.querySelector('[data-js="reset"]');
    var $buttonsOperations = doc.querySelectorAll('[data-js="math"]');
    var $buttonEqual = doc.querySelector('[data-js="="]');
    
    Array.prototype.forEach.call($buttonsNumbers, function(button) {
        button.addEventListener('click', handleClickNumber, false);
    });    
    
    Array.prototype.forEach.call($buttonsOperations, function(button){
        button.addEventListener('click', handleClickOperation, false);
    });
    
    $buttonCE.addEventListener('click', handleClickCE, false);
    
    $buttonEqual.addEventListener('click', handleClickEqual, false);
    
    function handleClickNumber(){
        $visor.value += this.value;
    }
    
    function handleClickCE(){
        $visor.value = 0;
    }
    
    function handleClickOperation(){
        $visor.value = removeLastItemIfIsItAnOperator($visor.value);
        $visor.value += this.value;
    }                             
     
    function isLastItemAnOperation(number){
        var operations = ['+', '-', '*', '/'];
        var lastItem = number.split('').pop();
        return operations.some(function(operator) {
            return operator === lastItem;
        });
    }
    
    function removeLastItemIfIsItAnOperator(number){
        if(isLastItemAnOperation(number)) {
            return number.slice(0, -1);
        }
        return number;
    }    
    
    function handleClickEqual(){
        $visor.value = removeLastItemIfIsItAnOperator($visor.value);
        var allValues = $visor.value.match(/\d+[+\*\/-]?/g);
        
        $visor.value = allValues.reduce(function(total, current){
            var firstValue = total.slice(0,-1);
            var operator = total.split('').pop();
            var lastValue = removeLastItemIfIsItAnOperator(current);
            var lastOperator = isLastItemAnOperation(current) ? current.split('').pop() : '';
            
            switch(operator) {
                case '+':
                    return ( Number(firstValue) + Number(lastValue) ) + lastOperator;
                case '-':
                    return ( Number(firstValue) - Number(lastValue) ) + lastOperator;
                case '*':
                    return ( Number(firstValue) * Number(lastValue) ) + lastOperator;
                case '/':
                    return ( Number(firstValue) / Number(lastValue) ) + lastOperator;
            }
        });
    }


    
    
    
    
})(window, document);