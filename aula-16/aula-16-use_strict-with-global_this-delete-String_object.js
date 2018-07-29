// use_strict-with-global_this-delete-String_object

// use strict - criação de variáveis sem var
// use strict - uso do with e global this === undefined
// use strict - operador delete, objetos e funções
// Objeto String






// use strict - criação de variáveis sem var  *******************************************************
/*
Diretiva introduzida a partir da EcmaScript 5 (leia-se aplicácel a browsers mais modernos, a partir do IE8). Surgiu em razão de alguns problemas do javascript, tais como:

1 -   VARIÁVEL declarada em local scope sem a palavra-chave VAR é alocada no global scope.
*/

//var name = 'global';
(function(){
    var name = 'Fernando Daciuk';
    myName = 'Paulo Pamplona';
    console.log(name);
})();
console.log(name);
console.log(myName);


// COMO INCLUIR ESSA DIRETIVA?
var name = 'global';
(function(){
    'use strict'; // ela afeta o que houver dentro do mesmo escopo.
    var name = 'Fernando Daciuk';
    myName = 'Paulo Pamplona';
    console.log(name);
})();
console.log(myName);

// O QUE ACONTECE?
var name = 'global';
(function(){
    'use strict';
    var name = 'Fernando Daciuk';
    myName = 'Paulo Pamplona'; // Uncaught ReferenceError: myName is not defined
    console.log(name);
})();
console.log(myName);
// Uncaught ReferenceError: myName is not defined (seguido pela linha do erro)

// BEST PRACTICE:
/*
A partir de agora (ao menos no curso), passaremos a utilizar não somente a IIFE em todo o código, mas também o 'use strict' dentro desta IIFE. Por que? Porque podemos ter códigos de terceiros não testados no EcmaScript5.
Sempre que tivermos alguma variável não declarada, o use strict não permitirá que esses problemas passem direto, ele acusará o erro para podermos vê-lo.
/*

2 - instruções EVAL e WITH.
*/

// WITH
// Serve para diminuir o tamanho de um objeto:

(function (){
    'use strict';
    var obj = {
        prop1: {
            prop2: {
                prop3: {
                    prop31: 'prop31',
                    prop32: 'prop32',
                    prop33: 'prop33'
                }
            }
        }
    };
    console.log(obj.prop1.prop2.prop3);
    with(obj.prop1.prop2.prop3){
         console.log(prop31, prop32, prop33)
         }

// Qual seria a alternativa convencional (e mais longa!) de chamar isso?
    console.log(obj.prop1.prop2.prop3.prop31);
    console.log(obj.prop1.prop2.prop3.prop32);
    console.log(obj.prop1.prop2.prop3.prop33);
    
// 'use strict' não permite esse recurso WITH para impedir que estas calls confundam estas props do object em with com outras variáveis do código.

// No 'use strict', portanto, qualquer uso de WITH resulta no erro abaixo:

    // Uncaught SyntaxError: Strict mode code may not include a with statement


})();




// use strict - uso do with e global this === undefined  *******************************************************

// Como visto anteriormente, utilizar o THIS dentro do escopo global vará referência ao objeto WINDOW (no browser) ou GLOBAL (no Node.js). E aqui há esta restrição ao termos o 'use strict', que lhe atribuirá o valor de 'undefined', não mais correlacionando a WINDOW (no browser) ou a GLOBAL (no Node.js). 

(function(){
    console.log(this);
})();
// Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}

(function(){
    'use strict';
    console.log(this);
})();
// undefined


// ATENÇÃO PARA O CASO A SEGUIR:

// vamos ter chamar um constructor sem a palavra-chave 'new' para ver o que acontece dentro dos escopos. estamos simulando uma falha que não é erro no sistema, portanto passaria despecebida facilmente.

(function(){
    function Person( name, lastName, age ) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
    console.log( Person ('Paulo', 'Pamplona', 30 ));
})();
// Agora vamos chamar 'name' e ver o que acontece:
name;
// "Paulo"
// (ou seja, a propriedade ficou atrelada ao objeto WINDOW)
// Isso poderá causar muitos conflitos com variáveis, tudo despercebido.

// Ao utilizar 'use strict', receberíamos um alerta específico para esse problema:
(function(){
    'use strict';
    function Person( name, lastName, age ) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
    console.log( Person ('Paulo', 'Pamplona', 30 ));
})();
// Uncaught TypeError: Cannot set property 'name' of undefined



// OBS: Lembramos que para instanciar o objeto, o correto seria utilizar a palavra-chave NEW:
(function(){
    'use strict';
    function Person( name, lastName, age ) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
    console.log( new Person ('Paulo', 'Pamplona', 30 ));
})();
// Person {name: "Paulo", lastName: "Pamplona", age: 30}






// use strict - operador DELETE, objetos e funções  *******************************************************

// DELETE é um comando para deletar PROPRIEDADES de objetos.
// Há condições em que o DELETE não pode ser usado.
(function (){
    var obj = {
        prop1: 'prop1',
        prop2: 'prop2',
        prop3: 'prop3'
    };
    console.log(delete obj.prop1, obj);
})();
// true {prop2: "prop2", prop3: "prop3"}

// Porém DELETE não deleta variáveis.
(function (){
    var myVar = 2;
    var obj = {
        prop1: 'prop1',
        prop2: 'prop2',
        prop3: 'prop3'
    };
    console.log(delete myVar);
})();
// false

// No 'use strict', será acusado um erro específico:
(function (){
    'use strict';
    var myVar = 2;
    var obj = {
        prop1: 'prop1',
        prop2: 'prop2',
        prop3: 'prop3'
    };
    console.log(delete myVar);
})();
// Uncaught SyntaxError: Delete of an unqualified identifier in strict mode.

// Mas o 'use strict' não causa problemas se usarmos o DELETE corretamente, isto é, para deletar apenas propriedades:
(function (){
    'use strict';
    var obj = {
        prop1: 'prop1',
        prop2: 'prop2',
        prop3: 'prop3'
    };
    console.log(delete obj.prop1, obj);
})();
// true {prop2: "prop2", prop3: "prop3"}


// NAMING PROPERTIES:

// ATUALIZAÇÃO:
// Duplicate properties are legal in ECMAScript version 6, opposed to ES5, where it is forbidden in strict mode.


// ECMAScript version 5
// No caso do 'use strict' (ES5) eram apontados erros de sintax se tentávamos dar nomes idênticos a duas propriedades diferentes:
(function (){
    'use strict';
    var obj = {
        casa: 99,
        casa: 88,
        vila: 'Formosa'
    };
    console.log(delete obj.prop1, obj);
})();
// In IE 10-11 and Opera 28.0.1750 it throws error as expected.

// ATENÇÃO:
// ESSA RESTRIÇÃO NÃO É MAIS EXISTENTE.
(function (){
    'use strict';
    var obj = {
        casa: 99,
        casa: 88, // essa linha subescreve a anterior, de nome idêntico.
        vila: 'Formosa'
    };
    console.log(obj);
})();
// {casa: 88, vila: "Formosa"}

// NAMING ARGUMENTS:
(function(){
    function myFunction( a, a, b, c) {
        return a + b;
    }
    console.log(myFunction(1,8,100, 2))
})();
// 108

(function(){
    'use strict';
    function myFunction( a, a, b, c) {
        return a + b;
    }
    console.log(myFunction(1,8,100, 0))
})();
// Uncaught SyntaxError: Duplicate parameter name not allowed in this context






// Objeto String  *******************************************************

// PROPRIEDADES DO OBJETO STRING:

.length
// Faz exatamente a mesma coisa que em um array. Ele conta a quantidade de caracteres.
'fernando'.length;
// 8






.charAt(index)
// Informa qual é o caractere em um determinado índice passado como parâmetro.
'fernando'.charAt(6);
// 'd'

// também funciona com sintaxe/notação de array, [ ]:
'fernando'[6]; 
// 'd'






.concat
'fernando'.concat( ' daciuk', ' meu', ' nome', ' é');
// "fernando daciuk meu nome é"
// MAS NÃO É MODIFICADA A STRING ORIGINAL:
var fer = new String('fernando');
fer;
// [ String: 'fernando' ]
fer.concat(' mas', ' paulo', ' é', ' o', ' melhor', ' aluno');
"fernando mas paulo é o melhor aluno"
fer;
// [ String: 'fernando' ]






.indexOf ( string [,start] )
fer.indexOf('o');
// 7
fer.indexOf('nando');
// 3 (valor indica o índeice da primeira letra dentro do trecho em parênteses)
fer.indexOf('nanda');
// -1 (a string 'nanda' não está contida. Portanto, não encontrada)






.lastIndexOf ( string [,start] )
// Mesmo que com arrays. Retorna o último item, buscando de trás para frente. Mas respeita a posição normal de index.
fer.lastIndexOf('a');
// 4
var ferTeste = new String('fernandona');
ferTeste.lastIndexOf('a');
// 9






.replace
// substitui um caractere por outro, mas somente com o primeiro encontrado no array ou objeto. A string principal não é modificada.
ferTeste.replace('a', 'i');
// "fernindona"






.slice
// Fatia o array/string.
ferTeste.slice(5);
// "ndona"
ferTeste.slice(5, 9);
// "ndon"






.split
// quebra o array/string em diferentes itens, a partir do parâmetro passado - que não será incluso no novo array/string. Não será modificado o string/array principal.
// sem parâmetros, apenas retorna o array/string inteiro:
ferTeste.split();
// ["fernandona"]
ferTeste.split('n');
// ["fer", "a", "do", "a"]
ferTeste;
// String {"fernandona"}
var novo = ferTeste.split('n');
novo;
// ["fer", "a", "do", "a"]
ferTeste;
// String {"fernandona"}





.join
// Une todas as strings em uma:
var voltar = novo.join('n');
voltar;
// "fernandona"

voltar.replace('n', 'z');
// "ferzandona"
voltar.split('n');
// ["fer", "a", "do", "a"]
voltar;
// "fernandona"
voltar.split('n');
// ["fer", "a", "do", "a"]
voltar.split('n').join('z');
// "ferzazdoza"
// AQUI ACIMA SERVE PARA SUBSTITUIR O 'N' PELO 'Z'.





.substring(start [,end])
// faz o mesmo que o slice, basicamente. Porém 'corrije' se invertermos os parâmetros. O slice já não o faz. Comparemo-os abaixo:
var nome = 'pamplona';
nome.substring(2);
// "mplona"
nome.substring(1, 6);
// "amplo"
nome.substring(6, 1);
// "amplo"
nome.slice(1, 6);
// "amplo"
nome.slice(6, 1);
// ""
nome.slice(4, 1);
// ""
nome.slice(5, 1);
// ""





.toUpperCase(); // Não modifica a string original.
var caixaAlta = nome.toUpperCase()
caixaAlta;
//"PAMPLONA";

.toLowerCase();
var caixaBaixa = caixaAlta.toLowerCase();
caixaBaixa;
// "pamplona"

// INTERESSANTE:
nome.charAt(0).toUpperCase();
// "P"
nome;
// "pamplona"
var newNome = nome.charAt(0).toUpperCase() + nome.slice(1);
newNome;
// "Pamplona"





