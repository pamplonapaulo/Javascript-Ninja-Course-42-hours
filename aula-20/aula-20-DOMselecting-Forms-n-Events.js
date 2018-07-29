// AULA - 20

/*

1.  Selecting DOM elements
        - IIFE WITH PARAMETERS
        - MINIFICAÇÃO DE CÓDIGO
        - IFs SEM CHAVES
        - WINDOW OBJECT METHODS
            - alert();
            - prompt();
            - confirm();
            
        - SELECTORS
            - getElementsById();
            - getElementsByClassName();
            - getElementsByTagName();
            - getElementsByName();
            - querySelector();
            - querySelectorAll();
            - Static VS. Dynamic selectors
        
2.  Forms and Events
    - Method .value;
    - Method .addEventListener('click');
    - event.preventDefault();
    - Method .addEventListener('submit');


*/









// IIFE WITH PARAMETERS ************************************

(function(window){
    'use strict';
    console.log();
    
})(window);

/*
A ideia é que você possa passar parâmetros para a IIFE que são globais na sua aplicação, para acessá-los de forma local, dentro da IIFE. Já vimos que, em Javascript, o escopo é a função em que o código está inserido, correto?

Sempre que criarmos uma variável fora de uma função, é possível acessá-la dentro de qualquer função que esteja no mesmo escopo. O mesmo não acontece para variáveis criadas dentro de funções. Sempre que você cria uma variável dentro de uma função, essa variável não está acessível fora dela.

E qualquer variável criada dentro de uma função, que tenha o mesmo nome de uma variável criada fora dessa função (em escopo global), a variável mais interna terá precedência sobre a variável externa.

Um exemplo seria o seguinte:
*/

var name = 'daciuk';
function myFunction(){
    var name = 'arroz';
    
    console.log(name);
    // 'arroz'
}

console.log( name );
// 'daciuk'

/*
Veja que, no código acima, temos duas variáveis NAME : uma criada dentro da função, e outra criada fora da função. Quando você usa o console.log dentro da função, é mostrado o valor da variável interna. E quando você chama o console.log fora da função, o valor é da variável externa. Ou seja: dentro da função, ainda que você crie uma variável com o mesmo nome da variável de fora, essa terá precedência. Simples, não?

Agora, sobre a IIFE: quando temos objetos globais, nós podemos passar por parâmetro para a IIFE, para que esses parâmetros sejam uma representação do objeto externo (global), mas usados de forma local. Isso tem várias vantagens que veremos em alguma aula futura, como minificação de código, por exemplo :)

Mas a ideia é: sempre que você tiver objetos globais, e precisar usar dentro da IIFE, não use diretamente o objeto global. Passe-o por parâmetro, e use-o como uma referência local:
*/

(function(win) {
    console.log( win === window );
})(window);

/*

O código acima mostra uma mensagem no console TRUE , pois WIN  é uma referência local ao objeto WINDOW  global.

O outro assunto do qual falamos nesses 5 minutos foi sobre como podemos utilizar IF s de uma única linha sem a necessidade das chaves.

Nos nossos códigos, nós vamos procurar evitar ao máximo utilizar IFs. E, sempre que necessário, vamos ao máximo evitar ELSE, pois isso deixa o código mais complexo e difícil de entender.

E sempre que utilizarmos IF, vamos tentar manter o código dentro do IF  pequeno, com no máximo uma única linha (não se preocupe, vou mostrar como podemos fazer isso na maior parte dos casos em breve :D).

E para esses casos, sempre que usarmos IFs de uma única linha, nós podemos simplificar o seu uso, removendo as chaves. O mesmo vale para WHILE e FOR. Vou mostrar alguns exemplos:

*/






// IFs WITHOUT CURLY BRACES ************************************

(function(win) {
    if( win === window )
        console.log( 'win é uma referência local à window');
})(window);

/*

Executando o código acima, você poderá ver que a mensagem "WIN É UMA REFERÊNCIA LOCAL À WINDOW" é mostrada no console, pois a condição é válida (é avaliada como true).

Para garantir que está realmente funcionando, inverta a condição:

*/

(function(win){
    if(win !== window)
        console.log( 'win é uma referência local à window');
})(window);

/*
Agora nada é logado no console!

E para ver que, sem as chaves, só a primeira linha é avaliada, você pode testar o seguinte:
*/

(function(win) {
    if( win !== window )
        console.log( 'win é uma referência local à window'); // do not apper now
        console.log( 'Essa mensagem sempre é mostrada'); // not affected by the IF, it's still visible.
})(window);

/*

Dê uma olhada na indentação: parece que os dois console.log estão dentro do IF, mas na verdade, como ele está sem as chaves, somente o primeiro será avaliado dentro do IF. A outra mensagem sempre será mostrada!

Vamos tomar muito cuidado ao utilizar IF  de uma única linha, por conta da dificuldade de leitura que isso pode causar, mas mantendo nossas funções pequenas, isso dificilmente será um problema. Tudo depende do código onde você irá aplicar essa regra. Se você tem uma função muito grande (mais de 8 linhas), então esse formato pode começar a se tornar um problema.

Bom, mas em breve vamos falar sobre boas práticas de como aplicar tudo o que estamos aprendendo em projetos reais!

*/






// WINDOW OBJECT METHODS **************************************

// 1.window.alert();
// Em desuso. Hoje em dia conseguimos fazer via CSS, com Divs, entre outros, com estilo melhor e sem bloquear a navegação do usuário.

(function(win) {
    'use strict';
    
    // window.alert( 'Mensagem' );
    
    alert( 'Mensagem' );
    
})(window);

// ALSO, 'WITH' IT'S BEEN DEPRECATED.
var obj = {
    prop1: {
        prop2: { prop3: 1}
    }
}
// It is still working, but soon won't. So do not use it.
with(obj.prop1.prop2) {
    console.log(prop3);
}
// 1

// * * *

// So back to Alert. Every window.Method() we can use without call the object window itself, since it's already global.

    window.alert( 'Mensagem' ); // not necessary way
    alert( 'Mensagem' ); // shortest way that works fine.




// 2.window.prompt();

(function(win){
    'use strict';        
    if (prompt( 'Pergunta?' ))
        console.log(' resposta OK! ');
        // in case the user answer the prompt window.
    else 
        console.log(' resposta não OK! ');
        // it will be showed if the user cancel the prompt window.
        console.log(' teste SECOND statement '); // This is visible anyways.
        console.log(' teste THIRD statement '); // Visible anyways as well.
})(window);
// PS: Always do your best to avoid using ELSE.
// PS: Always try to avoid long IFs, which means single-line IFs, without curly braces. 

(function(win){
    'use strict';
    
    var name = prompt("Qual é o seu nome?");
    
        
    if (name)
        console.log("Olá,", name);
    else 
        console.log(' não respondeu! ');
})(window);





// 3.window.confirm();

(function(win){
    'use strict';
    
    var del = confirm( 'Deseja realmente excluir?' );
    if (del)
        console.log( ' Excluído com sucesso! ', del);
        // Excluído com sucesso!  true
    else 
        console.log( ' Ação cancelada! ', del);
        //  Ação cancelada!  false
})(window);



// 4.window.document();
// It's the HTML itself, or Document Object Model.

    // 4.1 getElementById();
    // 4.2 getElementsByClassName();
    // 4.3 getElementsByTagName();

    (function(win, doc){
        'use strict';
        console.log( doc.getElementById('my-link'));
        // <a id="my-link">My Text</a>

        console.log( doc.getElementsByClassName('myClasses'));
        /*
        HTMLCollection(3) [a.myClasses, a.myClasses, a.myClasses]
        0: a.myClasses
        1: a.myClasses
        2: a.myClasses
        length: 3
        __proto__: HTMLCollection
        */

        console.log( doc.getElementsByTagName('a'));
        /*
        HTMLCollection(4) [a#my-link, a.myClasses, a.myClasses, a.myClasses, my-link: a#my-link]
        0: a#my-link
        1: a.myClasses
        2: a.myClasses
        3: a.myClasses
        length: 4
        my-link: a#my-link
        __proto__: HTMLCollection
        */

    })(window, document);


    //4.4 getElementsByName();

    (function(win, doc){
        'use strict'; 
        console.log( doc.getElementsByName('username'));
    })(window, document);
    // [input]




    // ALSO:
    (function(win, doc){
        'use strict';
        var $input = doc.getElementsByTagName('input');
        // Best practice in JS is, while naming DOM elements, make sure you name it starting with '$'.
        
        console.log($input.length);

    })(window, document);
    // 2

    







    // * However, DOM elements are dynamic so their values (like the exemple above, 'length') might change while something manipulates the document.

    // ATTENTION FOR COLATERAL EFFECTS:
    var $inputs = document.getElementsByTagName('input');
    console.log("By getElementsByTagName: ", $inputs.length);
    // BEFORE ANY MODIFICATION AT THIS DOM ELEMENT: 2
    console.log("By getElementsByTagName: ", $inputs.length);
    // AFTER ANY MODIFICATION AT THIS DOM ELEMENT: 6

    //4.5 querySelector();
    // Select ONLY THE FIRST element that matches the query.
    // This method has no risk to colateral effect.
    // Supported since Internet Explorer 8.
    // Only one restriction: if the CSS selector won't be available on the browser, it won't select it.

    //4.6 querySelectorAll();
    // Select ALL element that matches the query.
    // This method has no risk to colateral effect.
    // Supported since Internet Explorer 8.
    // Only one restriction: if the CSS selector won't be available on the browser, it won't select it.

    (function(win, doc){
        'use strict';
        var $myInputs = doc.querySelectorAll('input');
        console.log($myInputs.length);
    })(window, document);
    // NOT COLATERAL:
    // So unless you execute again all the attribuition 'querySelectorAll', the value on the variable will remain the same, even if the DOM had any change. If you get by Id, Class or Tag, those values will change all the time when the DOM has any change.
    var $myInputs = document.querySelectorAll('input');
    console.log("By querySelectorAll: ", $myInputs.length);
    // BEFORE ANY MODIFICATION AT THIS DOM ELEMENT: 2
    console.log("By querySelectorAll: ", $myInputs.length);
    // AFTER ANY MODIFICATION AT THIS DOM ELEMENT: 2

    // HOWEVER, DESPITE querySelector BE STATIC, IF WE DECIDE TO RUN AGAIN THE ATTRIBUITION, THEN IT WILL COUNT AGAIN ALL THOSE MATCH WITH THE QUERY.

    // LOOKING DEEPER THE CSS SELECTION:
    var $myInputs = document.querySelectorAll('[type="text"]');
    var $classes = document.querySelectorAll('.myClasses');
    var $myID = document.querySelector('#my-link');





// FORMS AND EVENTS ************************************


// Method .value 

(function(win, doc) {
    'use strict';
    
    var $inputUsername = doc.querySelector('#username');
    var $inputPassword = doc.querySelector('#password');
    $inputUsername.value = 'Fernando Daciuk';
    $inputPassword.value = 'minha-senha';
                
})(window, document);

// GETTER, gets a value.
// SETTER, sets a value.



// Method .addEventListener('click');
(function(win, doc) {
    'use strict';
    
    var $otherInputUsername = doc.querySelector('#meuNome');
    var $otherInputPassword = doc.querySelector('#minhSenha');
    var $button = doc.querySelector( '#button');
    
    $button.addEventListener('click', function(e) {
        event.preventDefault(); // não enviará o formulário.
        console.log('Clique no botão');
    }, false);
                
})(window, document);


// event.preventDefault
// Prevent the execution of the default action of an event, which would be sending the form in this case ([type="submit"] on the HTML)

// Method .addEventListener('submit');

/*
(function(win, doc) {
    'use strict';
    
    var $otherInputUsername = doc.querySelector('#meuNome');
    var $otherInputPassword = doc.querySelector('#minhSenha');
    var $button = doc.querySelector( '#button');
    
    $button.addEventListener('submit', function(e) {
        event.preventDefault(); // não enviará o formulário.
        console.log('Clicou no botão');
    }, false);
                
})(window, document);
*/

// You can put a listener in any element:
(function(win, doc) {
    'use strict';
    var $otherInputUsername = doc.querySelector('#meuNome');
    var $otherInputPassword = doc.querySelector('#minhSenha');
    
    $otherInputUsername.addEventListener('click', function(e) {
        event.preventDefault(); // não enviará o formulário.
        alert('Clicou no input');
    }, false);
                
})(window, document);






















