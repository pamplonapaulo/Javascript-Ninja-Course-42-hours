(function(){
    'use strict';
    /*
    Crie dois objetos, que serão duas pessoas. Cada um deve ter as propriedades `name` e `lastName`, preenchidos com o nome e sobrenome da pessoa.
    */
    function CreatePerson(name, lastName){
        this.name = name;
        this.lastName = lastName;
    }
    var paulo = new CreatePerson('paulo', 'pamplona');
    var natalie = new CreatePerson('natalie', 'harrold');
    
    // PROFESSOR: ********************************************
    var fernando = {
        name: 'Fernando',
        lastName: 'Daciuk'
    }
    var maria = {
        name: 'Maria',
        lastName: 'Josefina'
    }
    // *******************************************************

    
    
    
    
    
    
    
    
    
    /*
    Agora crie uma função chamada `getFullName` que retorne as propriedades
    `name` e `lastName` dos objetos acima, formando um nome completo.
    A função não deve receber nenhum parâmetro, mas as propriedades `name` e
    `lastName` devem ser dinâmicas. A mesma função deve servir para as duas pessoas (ou qualquer outra que for criada). Depois disso, invoque essa função, mostrando no console o nome completo das pessoas que foram criadas anteriormente, passando as pessoas acima como contexto da função. Use um console.log por pessoa.
    */
    console.log( 'O nome das pessoas é:' );

    CreatePerson.prototype.getFullName = function(){
        return this.name + ' ' + this.lastName;
    }
    console.log(paulo.getFullName());
    console.log(natalie.getFullName());
    // OR MAYBE:
    function getFullName(){
        return arguments[0].name + ' ' + arguments[0].lastName;
    }
    console.log(getFullName(paulo));
    console.log(getFullName(natalie));
    
    // PROFESSOR: ********************************************
    function getFullName(){
        return this.name + ' ' + this.lastName;
    }
    console.log( getFullName.call( fernando ));
    console.log( getFullName.call( maria ));
    // COMENTÁRIO: 'Call' te permite dizer qual vai ser o THIS de uma função.
    // *******************************************************
    
    
    
    
    
    
    
    
    
    /*
    Crie uma função chamada `sum`. Essa função pode receber uma lista de
    parâmetros variável, e deverá retornar a soma de todos eles.
    Não use estruturas de repetição para somar os argumentos.
    Na primeira linha, dentro da função, deixe um console.log para mostrar todos
    os parâmetros passados para essa função.
    */
    function sum(){
        console.log(arguments);
        
        var sumResult = Array.prototype.reduce.call( arguments, function (acumulated, actualValue, index){
            return acumulated + actualValue;
        });
        console.log(sumResult);
    }
    // PROFESSOR: ********************************************
    function sum(){
        console.log(arguments);
        return Array.prototype.reduce.call( arguments, function(accumulated, actualItem){
            return Number(accumulated) + Number(actualItem);
    //ou:   return (+accumulated) + (+actualItem);
        });
    }
    // COMENTÁRIO: .
    // *******************************************************

    /*
    Mostre no console que a função acima funciona, invocando-a em 3 console.log
    diferentes, com quantidades variáveis de parâmetros passados.
    */
    console.log( '\nSomar alguns números:' );
    // ?
    
    console.log(sum(3, 7, 8));
    console.log(sum(13, 7, 2));
    console.log(sum(31, 7, 10));
    
    // PROFESSOR: ********************************************
    // COMENTÁRIO: De bueanas. Igual.
    // *******************************************************

    /*
    Declare uma variável chamada `userEntry`, que irá receber alguns valores
    entrados pelo usuário. Mostre para o usuário a seguinte frase:
    "Entre com alguns números que serão somados:"
    */
    var userEntry = prompt("Entre com alguns números que serão somados:");
    
    // PROFESSOR: ********************************************
    // COMENTÁRIO: De bueanas. Igual.
    // *******************************************************

    /*
    Mostre no console o valor entrado pelo usuário:
    */
    console.log( '\nEntrada do usuário:' );
    console.log(userEntry);
    
    // PROFESSOR: ********************************************
    // COMENTÁRIO: De bueanas. Igual.
    // *******************************************************    
    
    /*
    Crie uma função chamada `justNumbers`, que recebe por parâmetro uma string
    e remove tudo o que não for número, retornando um array somente com os números
    da string. Mostre a representação em string dessa função no console.
    */
    console.log( '\nFunção que limpa entrada do usuário (somente números):' );
    
    function justNumbers(myString){
        var digitsArray = [];
        var justDigits = myString.match(/(\d)/gm);
        for (var i=0; i<justDigits.length; i++){
            digitsArray.push(parseInt(justDigits[i])); 
        }
        console.log(digitsArray);
    }
    // PROFESSOR: ********************************************
    function justNumbers( entry ){
        return entry.replace( /\D+/g, ',').split(',');
    }
    console.log(justNumbers('10ferdir2oi 3, 8'));
    // COMENTÁRIO: 
    // *******************************************************


    /*
    Usando a função acima, faça a limpeza dos valores entrados pelo usuário,
    atribuindo o resultado à uma variável `numbers`.
    */
    console.log( '\nEntrada do usuário limpa. Somente números:' );
    var numbers = justNumbers(userEntry);

    /*
    Agora com o array de números, utilize a função `sum` para somar todos os
    números desse array e mostre o resultado no console.
    */
    console.log( '\nSomar números entrados pelo usuário:' );
    // ?
    console.log(sum(numbers));
    
    // PROFESSOR: ********************************************
    console.log(sum.apply( sum, numbers));
    // COMENTÁRIO: 
    // *******************************************************
    
    
    
})();