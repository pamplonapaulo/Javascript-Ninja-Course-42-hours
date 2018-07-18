(function (){


    /*
    Envolva todo o código desse desafio em uma IIFE.
    */

    /*
    Crie um array chamado numberObjects. Esse array deve ter 10 elementos. Cada
    elemento será um objeto no formato:
    { number: [NUMBER] }
    Os números devem ser de 1 a 10.
    Mostre esse array no console.
    */
    console.log( 'Number Objects Array:' );
    
    var numberObjects = [];
    
    for ( i = 1; i <= 10; i++){
        numberObjects.push({ number: i });
    }
    // 10 (é o length)
    console.log( numberObjects ); /*
     [
        { number: 1 },
        { number: 2 },
        { number: 3 },
        { number: 4 },
        { number: 5 },
        { number: 6 },
        { number: 7 },
        { number: 8 },
        { number: 9 },
        { number: 10 },
    ];
    */

    /*
    Crie um array chamado `justNumbers`, que terá como elementos somente os números do array criado acima. Mostre esse novo array no console.
    */
    console.log( '\nJust Numbers:' );
    var justNumbers = [];
    for (i=0; i<numberObjects.length; i++){
        for (var prop in numberObjects[i]){
            justNumbers.push(numberObjects[i][prop]);
        }
    }
    console.log(justNumbers);
    
    
    // PROFESSOR: ******************************************
    
    var justNumbers = numberObjects.map(function(item) {
        return item.number;
    });
    console.log(justNumbers);
    // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
    
    // map só funciona para arrays. se não for array, usar outra estrutura de repetição.
    // map é mais rápido, tem melhor performance.
    // se ao invés de item.number usasse apenas item, copiaria um array idêntico.
    
    
    /*
    Crie um novo array chamado `justMod2Or3`, que receberá do array criado acima somente os números que forem divisíveis por 2 ou 3. Mostre esse novo array no console.
    */
    /*
    console.log( '\nJust module of division by 2 or 3:' );
    var justMod2Or3 = [];
    for (i=0;i<justNumbers.length;i++){
        if (i % 2 == 0 || i % 3 == 0){
            justMod2Or3.push(i);
        }
    }
    */
    // 7 (ele retorna o length)
    // justMod2Or3
    // [ 0, 2, 3, 4, 6, 8, 9 ]
    RESULTADO DIFERENTE ATENÇÃO ****************************
    
    // PROFESSOR: ******************************************
    
    var justMod2Or3 = justNumbers.filter(function(item) {
        return item % 2 === 0 || item % 3 === 0;
    });
    console.log(justMod20r3);
    // [ 2, 3, 4, 6, 8, 9, 10 ]
    
    // MAP NOT GOOD FOR THAT: **********************************
    /*
    var justMod20r3 = justNumbers.map(function(item) {
        if (item % 2 === 0 || item % 3 === 0) {
            return item;
        }
    });
    console.log(justMod20r3);
    // [ undefined, 2, 3, 4, undefined, 6, undefined, 8, 9, 10 ]
    */
    
    
    
    /*
    Declare uma variável chamada operation que receba, do array criado acima, um valor reduzido pela seguinte operação:
    - Somar 1 ao último valor retornado;
    - Multiplicar o resultado pelo valor atual.
    O cálculo deve começar com zero.
    Mostre o resultado no console.
    */
    console.log( '\nOperation:' );
    var operation = justMod2Or3.reduce(function(acumulado, atual, index, array){
        return (acumulado + 1) * atual;
    }, 0);
    console.log(operation);
    // 177940

    // PROFESSOR: ******************************************
    var operation = justMod20r3.reduce(function(acumulado, atual){
        return (acumulado + 1) * atual;
    }, 0);
    console.log(operation);
    // 177940
    
    /*
    Faça o mesmo cálculo passado acima, mas começando do último item para o primeiro. O nome da variável deve ser operation2. Mostre o resultado no console.
    */
    console.log( '\nOperation 2:' );
    var operation2 = justMod2Or3.reverse().reduce(function(acumulado, valorAtual, index,array){
        return (acumulado + 1) * valorAtual;
    }, 0 );
    console.log(operation2);
    // 115376
    
    
    // 0 (passando o zero acima, como parâmetro)
    // sem passar o zero como parâmetro, aqui o obtido seria 17793.
    
    
    // PROFESSOR: ********************************** reduceRight ********
    console.log( '\nOperation 2:' );
    var operation2 = justMod2Or3.reduceRight(function(acumulado, valorAtual, index,array){
        return (acumulado + 1) * valorAtual;
    }, 0 );
    console.log(operation2);    
    // 115376
    
    /*
    Crie um array chamado `name`. Cada elemento desse array deve ser uma sílaba do seu nome. Vamos reduzir esse array, juntando todas as sílabas, mas usando a "língua do P".
    PS.: Lembra da língua do "P"? Não? A língua do "P" é uma brincadeira infantil, onde você coloca a letra "P" antes de cada sílaba de uma palavra falada, como se você estivesse falando em código xD
    */
    
    console.log( '\nSeu nome na língua do "P":' );
    var name = [ 'le', 'o', 'nar', 'do' ];
    var reduceName = name.reduce(function(total, currentValue, currentIndex, arr){
        return total + "pe" + currentValue;
    }, "pe");
    console.log(reduceName);

    
    // PROFESSOR: ******************************************
    
    var name = [ "pam", "plo", "na" ];
    var reduceP = name.reduce(function(acumulado, atual){
        return acumulado + "pe" + atual;
    }, '');
    console.log(reduceP);
    
    // É GRAÇAS À STRING VAZIA PASSADA NO FIM DA FUNÇÃO QUE O 'PE' NÃO SE DUPLICA NO COMEÇO DA NOVA STRING CONSTRUÍDA.
    
    
    
    /*
    Crie uma variável chamada `inversedName`, que reduzirá o array em uma string e atribuirá o seu nome invertido (usando o array criado acima).
    */
    console.log( '\nInversed Name:' );
    var inversedName = name.reduceRight(function(total, currentValue, currentIndex, arr){
        return total + currentValue;
    });
    console.log(inversedName);
    // naplopam
    
    // OUTRO MÉTODO:
    console.log( inversedName, name.reverse().join(''));
    
    /*
    Mostre no console o array `numberObjects`.
    */
    console.log( '\nNumber objects' );
    console.log(numberObjects);
    /*
    [ { number: 1 },
      { number: 2 },
      { number: 3 },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
      { number: 8 },
      { number: 9 },
      { number: 10 } ]    
    */
    
    /*
    Verifique se existem em algum índice de numberObjects um objeto ìgual a
    { number: 2 }. Se houver, mostre no console:
    - "Existe um objeto { number: 2 } em numberObjects!"
    Senão, mostre a frase:
    - "Não existe um objeto { number: 2 } em numberObjects :("
    Consegue prever o resultado? Deixe uma mensagem no console tentando explicar o que acontece ;)
    */
    console.log( '\nExiste um { number: 2 } em numberObjects?' );

    function checkNumber (x){
        var existence = numberObjects.some(function(item, index, array){
            return item.number == x;
        });
        if (existence) {
            console.log("Existe um objeto { number: " + x + " } em numberObjects!");
        } else {
            console.log("Não existe um objeto { number: " + x + " } em numberObjects :(");
        }
    }
    checkNumber(2); 
    
    // MAIS PRÓXIMO DO DESEJADO PELO PROFESSOR:
    
    function mySearch(target){
        var existence = numberObjects.map(function(e) {
            return e.number; 
        }).indexOf(target);
        if (existence != -1) {
            console.log("Existe um objeto { number: " + target + " } em numberObjects!");
        } else {
            console.log("Não existe um objeto { number: " + target + " } em numberObjects :(");
        }        
    }
    mySearch(2);
    // Existe um objeto { number: 99 } em numberObjects!
    mySearch(99);
    // Não existe um objeto { number: 99 } em numberObjects :(
    
    
    
    
    
    
    // PROFESSOR: ******************************************
    if (numberObjects.indexOf({ number: 2}) > -1 ) {
            console.log("Existe um objeto { number: { number: 2 } } em numberObjects!");
    } else {        
            console.log("Não existe um objeto { number: { number: 2 } } em numberObjects :(");
    }
    // Não existe um objeto { number: { number: 2 } } em numberObjects :(
    
    
    // EXPLICAÇÃO:
    // QUANDO VOCÊ CRIA UM OBJETO, ELE CRIA UMA REFERÊNCIA ÚNICA NA MEMÓRIA. NENHUM OBJETO É IGUAL AO OUTRO. EXEMPLO:
    {} === {}
    // false
    { number: 2 } === { number: 2 }
    // false
    // ELES NÃO APONTAM PARA A MESMA REFERÊNCIA NA MEMÓRIA, É COMO SE ESTIVÉSSEMOS CRIANDO DOIS OBJETOS.
    // AO MESMO TEMPO EM QUE TENTAMOS COMPARAR, ACIMA, ESTAMOS CRIANDO-OS. SÃO, PORTANTO, DOIS OBJETOS DISTINTOS.
    
    // RECAPITULANDO:
    
    new Object();
    // {}
    var obj = { number: 2 }
    var obj2 = obj;
    obj
    // { number: 2 }
    obj2
    // { number: 2 }
    obj === obj2
    // true
    
    // NÃO SÃO 2 OBJETOS DIFERENTES. NÃO É UMA CÓPIA. É UM OBJETO APONTADO PARA OUTRO. O OBJETO 2 APONTA PARA A REFERÊNCIA DE MEMÓRIA OBJ, TAMBÉM CHAMADO DE PONTEIRO EM ALGUMAS LINGUAGENS. A PARTIR DA ATRIBUIÇÃO DE OBJ PARA OBJ2, ELE SERÁ UMA REFERÊNCIA. OBJETOS E ARRAYS NÃO SÃO COPIADOS, SÃO PASSADOS POR REFERÊNCIA. OU SEJA, SE VOCÊ ALTERAR UM, VOCÊ TAMBÉM ALTERA O OUTRO.
    // AO TENTAR ALTERAR UM...
    obj2.number = 90;
    // VOCÊ TAMBÉM ALTERA O OUTRO:
    obj
    // { number: 90 }
    
    // AGORA ATENÇÃO PARA OURTA FORMA DE APONTAR, COM COMPORTAMENTO DIFERENTE QUE NOS ATENDE MELHOR:
    // UMA VEZ QUE NUMBERS OU STRINGS SÃO VALORES PRIMITIVOS, O QUE ACONTECE SE O APONTAMENTO FOR ENTRE ESTES, NÃO ENTRE OS OBJETOS COMO UM TODO?
    // EXEMPLO:
    var obj = { number: 2 };
    // undefined
    var obj2 = {};
    // undefined
    obj2.number = obj.number;
    // 2
    obj2
    // { number: 2 }
    obj === obj2;
    // false
    // AFINAL ELES NÃO SÃO A MESMA REFERÊNCIA.
    // DESSA FORMA SÃO 2 OBJETOS DIFERENTES EM DOIS LUGARES DIFERENTES DA MEMÓRIA.
    
    
    
    
    // PORTANTO, A SOLUÇÃO DO PROFESSOR É:
    var obj = numberObjects[1]
    // ou seja, o índice 1 de numberObjects, que é { number: 2}.
    if (numberObjects.indexOf(obj) > -1 ) {
            console.log("Existe um objeto { number: { number: 2 } } em numberObjects!");
    } else {        
            console.log("Não existe um objeto { number: { number: 2 } } em numberObjects :(");
    }    
    
    
    /*
    Fazendo o mesmo do exercício acima, mas começando a buscar do último índice, será que obtemos um resultado diferente? Faça a busca a partir do índice 2.
    */
    console.log( '\nE buscando a partir do último índice, o { number: 2 } existe?' );
    function reverseSearch(target){
        var existence = numberObjects.map(function(e) {
            return e.number; 
        }).lastIndexOf(target, 2);
        if (existence != -1) {
            console.log("Existe um objeto { number: " + target + " } em numberObjects!");
        } else {
            console.log("Não existe um objeto { number: " + target + " } em numberObjects :(");
        }        
    }    
    reverseSearch(2);
    // Existe um objeto { number: 2 } em numberObjects!
    reverseSearch(99);
    // Não existe um objeto { number: 99 } em numberObjects :(
    
    
// PROFESSOR: ******************************************
    if (numberObjects.lastIndexOf(numberObjects[1], 2) > -1 ) {
            console.log("Existe um objeto { number: { number: 2 } } em numberObjects!");
    } else {        
            console.log("Não existe um objeto { number: { number: 2 } } em numberObjects :(");
    }    
    
    /*
    Verifique se `justMod2Or3` é um array. Se for, mostre-o no console, no formato de String.
    */
    console.log( '\njustMod2Or3 é um array? Se for, a representação dele em String é:' );
    console.log( Array.isArray(justMod2Or3) );
    // true
    
// PROFESSOR: ******************************************
    if(Array.isArray(justMod2Or3)){
        console.log( justMod2Or3.toString() );
    }
    
})();
