(function (win, doc){
    'use strict';
    
    /*
    Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
    As regras são:

    - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
    diretamente;
    - O input deve iniciar com valor zero;
    - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
    - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
    multiplicação(x) e divisão(÷);
    - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE" que irá limpar o input, deixando-o com valor 0;

    - A cada número pressionado, o input deve atualizar concatenando cada valor
    digitado, como em uma calculadora real;
    - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
    operação no input. Se o último caractere no input já for um símbolo de alguma
    operação, esse caractere deve ser substituído pelo último pressionado.
    Exemplo:
    - Se o input tem os valores: "1+2+", e for pressionado o botão de
    multiplicação (x), então no input deve aparecer "1+2x".
    - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
    input;
    - Ao pressionar o botão "CE", o input deve ficar zerado.
    
    var operation;
    var numOne;
    var numTwo;



    var display = doc.querySelector('[data-js="myDisplay"]');
    
    var numArr = doc.querySelectorAll('[data-js="num"]');
    
    for (var i=0; i<numArr.length; i++){
        numArr[i].addEventListener('click', pressNum, false); 
    }
    
    var clearEntry = doc.querySelector('[data-js="reset"]');
    clearEntry.addEventListener('click', resetCalc, false);
    
    var equals = doc.querySelector('[data-js="="]');
    equals.addEventListener('click', seeResult, false);
    
    function resetCalc(){
        display.value = 0;
        numOne = undefined;
        numTwo = undefined;
        operation = undefined;
    }
    
    var opsArr = doc.querySelectorAll('[data-js="math"]');
    for (var i=0; i<opsArr.length; i++){
        opsArr[i].addEventListener('click', setOperation, false);
    }
    
    function setOperation(){
        numOne = display.value;
        operation = this.value;
        display.value = 0;
        console.log(numOne + operation);
    }    
    
    function pressNum(){
        if (display.value == 0) {
            return display.value = this.value;
        } else {
            return display.value += this.value; 
        }
    }
    
    function seeResult(){
        numTwo = display.value;
        
        if (operation == '+') {
            var finalResult = Number(numOne) + Number(numTwo);
        } else if (operation == '-') {
            var finalResult = Number(numOne) - Number(numTwo);
        } else if (operation == '*') {
            var finalResult = Number(numOne) * Number(numTwo);
        } else if (operation == '/') {
            var finalResult = Number(numOne) / Number(numTwo);
        } else {
            display.value = 'ERRO';
        }
        
        display.value = finalResult;
        operation = undefined;
    }    
    */

    
    //
    
    // By Fernando Daciuk:
    
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
    // refactoring: melhorar um código que já funciona.    
    
    
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