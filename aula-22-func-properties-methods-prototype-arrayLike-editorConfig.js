(function (){
    
// AULA - 22

/*

1.  Propriedades e Métodos de Funções

        .Propriedades de Funções
            .name
            .length
        
        .Métodos de Funções
            .toString()
            .call()
                .call(this, arg1, arg2, ..., argN)


2.  Prototype



3.  Array-like, editorconfig

        .Array-like
        .editorconfig
*/



    
    
    
// PROPRIEDADES    


// .name ******************************************************
// Retorna o nome da função como uma string.
function myFunction (a, b, c, d){
    return "Hello";
}
console.log(myFunction.name);
// myFunction
    

// .length *****************************************************
// Conta a quantidade de parâmetros que uma função pode receber.
console.log(myFunction.length);
// 4





// MÉTODOS
    
// .toString() *****************************************
// Faz o mesmo que faria em um array: converte para string.

function myFunction (a, b, c, d){
    return "Hello";
}
    
console.log(myFunction.toString());
/*
function myFunction (a, b, c, d){
    return "Hello";
}
*/
var arr = [1, 2, 3, 4];
console.log(arr.toString());
// 1,2,3,4

var obj = { prop1: 1, prop2: 2};
console.log(obj.toString());
// [object Object]
    
    
    
// .call() *****************************************
// Qual a diferença de call() para uma mera invocação em si?

console.log(myFunction.call());
// Hello

// Resposta:    
.call(this)
    
    
(function(){
    'use strict';
    
    function myFunction (a, b, c, d){
        console.log(this.lastName);
    }
    
    var myname = new myFunction();
    
    myname.lastName = 'Daciuk';
    
    console.log(myname());

})();
// ERROR: myname is not a function.
    

    

(function(){
    'use strict';
    
    function myFunction (a, b, c, d){
        console.log(this.lastName);
    }
    
    var obj = {
        lastName: 'Daciuk'
    };
    
    var obj2 = {
        lastName: 'Silva'
    }
    
    // myFunction.call();
    // Cannot read property 'lastName' of undefined

    myFunction.call(obj);
    // Daciuk

    myFunction.call(obj2);
    // Silva


})();

    
// call(this, arg1, arg2, ..., argN) ******************************
// O primeiro parâmetro tem de ser o THIS.
(function(){
    'use strict';
    function myFunction (a, b, c, d){
        console.log(this.lastName, a, b, c, d);
    }
    var obj = {
        lastName: 'Silva'
    }
    myFunction.call(obj, 'primeiro', 2, 'terceiro', '4º');
    // Silva primeiro 2 terceiro 4º
})();

// Without THIS:
(function(){
    'use strict';
    function myFunction (a, b, c, d){
        console.log(a, b, c, d);
    }
    var obj = {
        lastName: 'Silva'
    }
    myFunction.call(null, 'primeiro', 2, 'terceiro', '4º');
    // primeiro 2 terceiro 4º
    myFunction.call({}, 'primeiro', 2, 'terceiro', '4º');
    // primeiro 2 terceiro 4º
    myFunction.call(myFunction, 'primeiro', 2, 'terceiro', '4º');
    // primeiro 2 terceiro 4º
})();
    
    
(function(){
    'use strict';
    function myFunction (a, b, c, d){
        console.log(this.lastName, a, b, c, d);
    }
    var obj = {
        lastName: 'Silva'
    }
    
    var arr = [ 1, 2, 3 ];
    
    myFunction.call(obj, arr);
    // Silva, [ 1, 2, 3 ], undefined, undefined, undefined
})();
    
    

// .apply() ************************************************************
// .apply(this) ********************************************************
// .apply(this, [arg1, arg2, ..., argN] ) ******************************
// Com apply você consegue passar um array ou um array-like.
    
(function(){
    'use strict';
    function myFunction (a, b, c, d){
        console.log(this.lastName, a, b, c, d);
    }
    var obj = {
        lastName: 'Silva'
    }
    
    var arr = [ 1, 2, 3, 4 ];
    
    myFunction.call(obj, arr);
    // Silva, [ 1, 2, 3, 4 ], undefined, undefined, undefined
    
    myFunction.apply(obj, arr);
    // Silva 1 2 3 4
    
    myFunction.apply(obj, [ '$', 'c', {}, {'obj3': 'myObj3'}]);
    // Silva $ c {} {obj3: "myObj3"}
    
        
    myFunction.apply(obj);
    // Silva undefined undefined undefined undefined
})();
    
    
    
    
    
// PROTOTYPE 
// .......... **************************************************
/*
É onde há todos os métodos doobjeto principal, sempre a serem herdados na criação de um novo objeto. É o protótipo de nossos constructors, já existentes no javascript.
*/
    
// REVISÃO:
var obj = {}
// undefined
obj
// {}
obj.toString() // 'toString' vem herdado do prototype.
// "[object Object]"    
var arr = [1, 2, 3]
//undefined
arr
//(3) [1, 2, 3]
arr.slice(1) // 'slice' vem herdado do prototype.
//(2) [2, 3]
Array.prototype
//[constructor: ƒ, concat: ƒ, find: ƒ, findIndex: ƒ, pop: ƒ, …] 


// REVISÃO CONSRTUCTOR:    
(function (){
    'use strict';
    
    function myFunction( name, lastName ){
        this.fullname = name + ' ' + lastName;
    }
    var fernando = new myFunction( 'Fernando', 'Daciuk');
    console.log(fernando.fullname);
})();
// Fernando Daciuk

    
    
    
    
(function (){
    'use strict';
    
    // constructor function
    function MyFunction(name,lastName){
        this.name = name;
        this.lastName = lastName;
    }
    
    // extension - property creation:
    MyFunction.prototype.fullName = function(){
        return this.name + ' ' + this.lastName;
    }
    
    // new object:
    var fernando = new MyFunction('Fernando','Daciuk');
    
    // call using the new method just created (fullName):
    console.log(fernando.fullName());
    // 'Fernando Daciuk'
    
    
    
    // we could keep including new properties:
    MyFunction.prototype.age = 30;
    
    // test:
    console.log(fernando.age);
    // 15
    
    // we can also override a prototype:
    MyFunction.prototype.age = 15;
    
    console.log(fernando.age);
    // 15
    
    
    // But what if we try to override an existin property original from the object itself, like that bellow, what is going to prevail?
    function MyFunction(name,lastName){
        this.name = name;
        this.lastName = lastName;
        this.age = 50;
    }
    
    MyFunction.prototype.age = 15;
    console.log(fernando.age);
    // 50
    // Javascript will consider this extension only if there is no other property with this same name. When repeated, it will ignore the extension.

})();

    
    
    
    
    

// ARRAY-LIKE 
// ........... **************************************************
/*
Tem formato de array, pode ser utilizado como um array, mas não é um array de verdade.

*/
// Exemplo: 'querySelectorAll()'
// Exemplo: 'arguments'    
(function (){
    'use strict';
    
    function myFunction(){
        console.log(arguments);
        // Arguments(7) ["a", "b", 3, 4, 5, "f", "g", callee: (...), Symbol(Symbol.iterator): ƒ]
        console.log(arguments.length);
        // 7
    }
    
    console.log(myFunction('a', 'b', 3, 4, 5, 'f', 'g'));
})();

// But is not actually a real array. Many array methods don't work, like "forEach" for instance:
(function (){
    'use strict';
    
    function myFunction(){
        arguments.forEach(function(arg){
            console.log(arg);    
        });
        
    }
    console.log(myFunction('a', 'b', 3, 4, 5, 'f', 'g'));
})();
// Uncaught TypeError: arguments.forEach is not a function

// So how could we iterate those items? We actually could try some magic:
    
(function (){
    'use strict';
    function myFunction(){
        var arr = [1, 2, 3, 4];
        arr.forEach(function(item){
            console.log(item)
        });
    }
    console.log(myFunction( 1, 2, 3, 4, 5, 6));
})();
// 1
// 2
// 3
// 4
    
(function (){
    'use strict';
    function myFunction(){
        var arr = [1, 2, 3, 4];
        arguments.forEach(function(item){
            console.log(item)
        });
    }
    console.log(myFunction( 1, 2, 3, 4, 5, 6));
})();    
// Uncaught TypeError: arguments.forEach is not a function

    
// So the magic is: (by Paulo - but later showed by professor as well)
(function (){
    'use strict';
    function myFunction(){
        for (var i = 0; i<arguments.length; i++){
            console.log(arguments[i]);
        }        
    }
    console.log(myFunction( 'paulo', 'natalie', 'helo', 'eva'));
})();  

    
// Even better magic: (by Daciuk)
(function (){
    'use strict';
    function myFunction(){
        var arr = [1, 2, 3, 4];
        arr.forEach(function(item){
            console.log(this);
        }, arguments);
    }
    console.log(myFunction('paulo', 'natalie', 'helo', 'eva'));
})();      
/*
Arguments(4) ["paulo", "natalie", "helo", "eva", callee: (...), Symbol(Symbol.iterator): ƒ]
Arguments(4) ["paulo", "natalie", "helo", "eva", callee: (...), Symbol(Symbol.iterator): ƒ]
Arguments(4) ["paulo", "natalie", "helo", "eva", callee: (...), Symbol(Symbol.iterator): ƒ]
Arguments(4) ["paulo", "natalie", "helo", "eva", callee: (...), Symbol(Symbol.iterator): ƒ]
*/
    
// Also:
(function (){
    'use strict';
    function myFunction(){
        var arr = [1, 2, 3, 4];
        arr.forEach(function(item, index){
            console.log(this[index]);
        }, arguments);
    }
    console.log(myFunction(1, 'paulo', 3, 4, 5, 6, 7, 8));
})();  
/*
1
paulo
3
4
*/
// So that way, we could use also "forEach", "Map", "Filter", "Reduce", ETC.
    
// forEach + call:
(function (){
    'use strict';
    function myFunction(){
        Array.prototype.forEach.call( arguments, function(item, index){
            console.log(item);
        });
    }
    console.log(myFunction(1, 'paulo', 3, 4, 5, 6, 7, 8));
})();     
/*
1
paulo
3
4
5
6
7
8
*/
    
// forEach + apply:
(function (){
    'use strict';
    function myFunction(){
        Array.prototype.forEach.apply( arguments, [function(item, index){
            console.log(item);
        }]);
    }
    console.log(myFunction(1, 'paulo', 3, 4, 5, 6, 7, 8));
})();
/*
1
paulo
3
4
5
6
7
8
*/    
    
// reduce + call:
(function (){
    'use strict';
    function myFunction(){
        var result = Array.prototype.reduce.call( arguments, function(acumulated, actual, index){
            return acumulated + actual;
        });
        console.log(result);
    }
    console.log(myFunction(1, 2, 3, 4, 5, 6, 7, 8));
})(); 
// 36
    
// This above would be the same as the normal 'reduce' bellow:
function myReduce(){
    'use strict';
    var arr = [1, 2, 3, 4, 5, 6, 7, 8];
    
    var reduce = arr.reduce(function(acumulated, actual) {
        return acumulated + actual;
    }, 0);
    console.log(reduce);
}
myReduce();
// 36
    

    
    
    

// EDITOR CONFIG
// ************************************************
    
/*
http://editorconfig.org/


*/



})();