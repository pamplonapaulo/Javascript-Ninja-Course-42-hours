// BROWSER - THIS - OBJ ARGUMENTS


// JS no browser
// Escopos
// THIS
// Object Arguments












// JS no browser  *********************************************


console.log("sj arquivo externo");






// Escopos  *********************************************

// Estávamos utilizando sempre uma IIFE porque tornam os nossos scripts com escopo local.

// Escopos globais são perigosos pois podem criar conflitos, subscrevendo valores de variáveis com nomes idênticos.

console.log("Teste 1: ");
(function(){
    var name = "Local";
    console.log(name);
})();

var name = "Global";
console.log(name);

// Um teste: não declarando a variável local.

console.log("Teste 2: ");
(function(){
    name = "Local";
    console.log(name);
})();

var name = "Global";
console.log(name);






// THIS  *********************************************
/*
1. Em métogos e objetos

É uma referência ao objeto principal. SEMPRE A OBJETOS!
Se está dentro de uma função solta no script, apontará para o objeto acima, isto é, provavelmente o objeto window.

*/
console.log("'THIS' lesson: ");

(function MeuConstrutor(){
    var myObject = {
        myProperty: 1,
        init: function init(){
            return this;
        }
    };
    console.log(myObject.init());
})();
// {myProperty: 1, init: ƒ}
// no caso acima, faz a referência ao próprio objeto myObject.

// ps:
// int() é um método.

// ex 2:
(function (){
    var myObject = {
        myProperty: 1,
        init: function init(){
            return this.myProperty;
        }
    };
    console.log(myObject.init());
})();
// 1

/*
2. Em funções. (literais ou atribuídas a variáveis).

Nesse caso, dentro de funções, poderá ter dois valores. O primeiro é uma referência a um objeto global chamado objeto 'window'). Tudo que você consegue acessar sem uma refrência de objeto, faz parte da base do javascript, na verdade está pendurado deste objeto global.

Mas no Node, esse objeto window chama-se objeto 'global'. Afinal o Node não foi feito para rodar no browser, não tem uma window.
*/
(function () {
    function myFunction(){
        return this;
    }
    console.log ( myFunction());
    
    console.log ( myFunction() === window);
    // isto é: o this é igual ao objeto window.

    
})();
// Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
// true

// e no node, que não tem o objeto 'window':
(function () {
    function myFunction(){
        return this;
    }    
    //console.log ( myFunction() === global);
    
})();
// true


console.log("   ");
// outro exemplo:
(function () {
    function myFunction(){
        return this;
    }
    
    console.log ( 'myFunction:', myFunction() === window);
    var myObject = {
        myProperty: 1,
        init: function init(){
            //return this.myProperty;
            return this;
            }
    };

    console.log( 'myObject', myObject.init(), myObject.init === myObject );
    // isto é: o this é igual ao objeto 'myObject'.

})();
// Dependendo do lugar onde THIS está ou da forma como THIS é chamado, THIS vai mudar o seu formato.

// Outra forma dentro de funções: Quando THIS faz referência a um objeto instanciado. Ou seja, cirando os nossos próprios construtores.

    console.log( 'S E P A R A D O R' );


(function () {
    function myFunction(){
        return this;
    }
    
    console.log ( 'myFunction:', myFunction(), myFunction() === window);
    // myFunction: Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
    
    var myObject = {
        myProperty: 1,
        init: function init(){
            return this;
            }
            // true
    };

    console.log( 'myObject', myObject.init(), myObject.init() === myObject );
    // myObject {myProperty: 1, init: ƒ} true
    
    // criação de objetos:
    var newObject = new Object();
    // Acima, NEW cria uma nova referência de object. E atribui ao 'newObject'
    
    //console.log( 'newObject', newObject );
    // newObject  Object {}
    
    //console.log( 'newObject', newObject, Object() );
    
    console.log( 'newObject', new Object() === new Object() );
    // false, pois são dois objetos sendo criados e, portanto, com referências distintas.
    
    console.log( 'newObject', {} === {} );
    // false, pois são dois objetos sendo criados e, portanto, com referências distintas.
    
})();


// THIS *** WINDOW ** CONSTRUCTORS ********************************

(function () {
    function myFunction(){
        return this;
    }
    console.log ( 'myFunction:', myFunction(), myFunction() === window);
    var myObject = {
        myProperty: 1,
        init: function init(){
            return this;
            }
    };
    console.log( 'myObject', myObject.init(), myObject.init() === myObject );
    
    // criando um CONSTRUCTOR aqui. E deve iniciar com letra maiúscula, por convenção (e boas práticas), pois é como construtores são feitos.
    
    function MyConstructor(){
        this.prop1 = 'prop1 qualquer';
        this.prop2 = 'prop2 outra qualquer';
    }
    
    console.log( 'myConstructor', new MyConstructor() );
    // resultado:
    // myConstructor MyConstructor {prop1: "prop1 qualquer", prop2: "prop2 outra qualquer"}
    
    // ou:
    var constructor = new MyConstructor();
    console.log( 'myConstructor', constructor );
    // resultado:
    // myConstructor MyConstructor {prop1: "prop1 qualquer", prop2: "prop2 outra qualquer"}
    
    // e assim, dentro de uma VAR, você pode acessar as propriedades do objeto:
    console.log( 'myConstructor', constructor.prop1 );
    // myConstructor prop1 qualquer
    
    // pendurando um valor no objeto window. veja isso:
    
    prop1 = 'propriedade one';
    // se não utilizamos VAR, essa variável vai para o escopo global, isto é, ela fica pendurada no objeto window.
    
    // dessa forma:
    console.log(window.prop1);
    // propriedade one

    var prop2 = 'propriedade two';
    // Experimentemos agora fazer com o VAR, para confirmar a tese.
    
    console.log(window.prop2);
    // undefined
    
    // OUTRO ALERTA:
    
    // esperimente chamar a prop1 sem pendurar em nenhum objeto:
    console.log( prop1 );
    // propriedade one
    
    // VEJA! Ele retornou com sucesso! ou seja, 'this.prop1' do constructor é o mesmo que 'window.prop1'.
    // Ou seja. o Constructor abaixo é o mesmo que o seguinte, sem this e com window:
    function MyConstructor(){
        this.prop1 = 'prop1 qualquer';
        this.prop2 = 'prop2 outra qualquer';
    }
    console.log( prop1 );
    // propriedade one
    
    function MyConstructor(){
        window.prop1 = 'prop1 qualquer';
        window.prop2 = 'prop2 outra qualquer';
    }
    console.log( window.prop1 );
    // propriedade one    
    
    
    // Cuidado com a forma como for chamar, pois as propriedades podem ficar no escopo global.    
})();

// Object Arguments  *********************************************

// É um 'array light'. Ele representa todos os argumentos passados para a função.


(function (){
    function myFunction(){
        return arguments;
    }
    console.log(myFunction());
    
})();
//  Arguments [callee: ƒ, Symbol(Symbol.iterator): ƒ]

// Representa todos os argumentos passados para a função, eles ficam armazenados em Object Arguments
(function (){
    function myFunction(arg1, arg2){
        return arguments;
    }
    console.log(myFunction(10, 20));
    
})();
// [ 10, 20 ]
// Arguments(2) [10, 20, callee: ƒ, Symbol(Symbol.iterator): ƒ]


(function (){
    function myFunction(){ // nesse caso nem precisa realmente passar os parâmetros.
        //return arguments[0];
        
        return arguments[0];
        // esse retorna um objeto que parece com um array, mas não é um array.
    }
    console.log(myFunction('bobo', 20));
    
})();
// bobo

(function (){
    function myFunction(){
        //return arguments[0];
        
        return arguments;
        // esse retorna um objeto que parece com um array, mas não é um array. É um array-like. veremos detalhes disso adiante.
    }
    console.log(myFunction('bobo', 20));
    
})();
// Arguments(2) ["bobo", 20, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// ALERTA: nunca nomeie o seu argumento como 'arguments' pois irá subescrever a palavra-chave 'arguments'.
(function (){
    function myFunction(ARGUMENTS){ // numa passar com esse nome 'arguments'.
        return arguments;
    }
    console.log(myFunction('bobo', 20));
})();