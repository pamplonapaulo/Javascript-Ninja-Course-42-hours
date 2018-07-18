(function(){
    'use strict';
    

    /*
    1. Envolva todo o conteúdo desse desafio em uma IIFE.
    2. Adicione a diretiva 'use strict';
    3. Crie um arquivo index.html e adicione esse script à ele.
    */

    /*
    Declare uma variável chamada `name` que receba seu primeiro nome.
    Mostre no console todas as letras do seu nome separadas, com a frase:
    - "[LETRA] é a [POSIÇÃO]ª letra do meu nome."
    Ex: no caso do nome ser "Fernando", deve mostrar as frases:
    - "F é a 1ª letra do meu nome."
    - "e é a 2ª letra do meu nome."
    E assim por diante, até a última.
    */
    console.log( 'As letras do seu nome:' );
    var name = 'Pamplona';
    for (var i=0; i<name.length; i++){
        console.log(name[i] + " é a " + (i+1) + "ª letra do meu sobrenome.");
    }
    // PROFESSOR *********** CORREÇÃO ***************************************
    var name = 'Fernando';
    for (var i=0, len = name.length; i<len; i++){
        console.log(name[i] + " é a " + (i+1) + "ª letra do meu sobrenome.");
    }
    // OBS: Eu não entendi a necessidade desta va 'len'.
    //***********************************************************************************************

    
    
    
    
    
    
    
    

    /*
    - Declare uma variável chamada `fullName`, que receba seu nome completo, escrito no formato de slug (caixa baixa e palavras separadas por um traço).
    Ex: o nome "Fernando Daciuk" ficaria "fernando-daciuk"
    - Faça a primeira letra de cada nome ficar em caixa alta, e troque o traço por um espaço.
    - Detalhe: o código que você escrever abaixo deve funcionar para qualquer nome, então fique à vontade para usar as artimanhas que já viu até agora no curso para fazer isso funcionar corretamente :)
    - Mostre no console o nome no formato slug, e o resultado final. Use um console.log para cada formato.
    */
    console.log( '\nNome convertido à partir de um slug:' );    

    (function(){
        var fullName = "paulo-da-silva-pamplona";
        var mae = "heloisa-beatriz-teixeira-da-silva";
        var pai = "carlos-marques-pamplona";
        function capsChanger(nameString){
            'use strict';

            var processingArray = [];
            var namesArray = nameString.split('-');

            for (var i = 0; i < namesArray.length; i++){
                processingArray.push(namesArray[i].charAt(0).toLocaleUpperCase() + namesArray[i].slice(1));
            }        
            processingArray = processingArray.join(' ');
            console.log(processingArray);
        }
        capsChanger(mae);    
    })();
    // PROFESSOR *********** CORREÇÃO ***************************************
    var fullName = 'fernando-daciuk-terceiro-junior';
    var newFullName = fullName.split( '-' ).map(function(name){
        return name.charAt(0).toLocaleUpperCase() + name.slice(1);
        // return name[0].toLocaleUpperCase();
    }).join( ' ' );
    console.log( fullName );
    console.log( newFullName );
    //***********************************************************************************************
    
    
    
    
    
    
    
    
    
    
    
    
    
    /*
    - Crie um array com 5 nomes. Reduza esses nomes a uma única string, separando cada nome por vírgula. Entre o penúltimo e o último nome, o separador deve
    ser um "e". No final, concatene com a frase: " são meus amigos.".
    O resultado final deve ficar mais ou menos assim:
    - "João, Maria, Roberto, Pedro e Marcos são meus amigos."
    - Detalhe: o código abaixo deve funcionar com um array de qualquer tamanho.
    5 nomes foi somente uma sugestão ;)
    */
    console.log( '\nMeus amigos:' );
    var amigos = [ 'Horácio', 'Juliano', 'Fabrício', 'Gil', 'Natalie' ];
    function friendsToString(friendsArray){
        'use strict';
        var lastFriend = friendsArray.pop();
        console.log(friendsArray.join(', ').concat(" e " + lastFriend + " são meus amigos."));
    }
    friendsToString(amigos);
    // PROFESSOR *********** CORREÇÃO ***************************************
    var friends = [ 'Paulo', 'Marcos', 'Maria', 'Sandro', 'Felipe' ];
    var phrase = friends.reduce(function(acumulado, atual, index){
        
        var separador = friends.length - 1 === index ? ' e ' : ', ';
        return acumulado + separador + atual;
    }).concat(" são meus amigos.");
    console.log( phrase );
    // O separador verifica quando o index do loop é o último, isto é, o valor de length menos 1. Se for, ele utiliza  ' e ' como separação.
    //***********************************************************************************************
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /*
    Usando o replace(), faça a string "Roberto" virar "Roberta".
    Mostre o resultado no console.
    */
    console.log( '\nEra "Roberto", agora é:' );
    
    function becomeTrans(name){
        'use strict';
        var newName = name.split('').reverse().join('').replace('o', 'a').split('').reverse().join('');
        console.log(newName);
    }
    becomeTrans('Roberto');
    becomeTrans('Paulo');
    becomeTrans('Elves');
    // PROFESSOR *********** CORREÇÃO ***************************************
    console.log( 'Roberto'.replace( 'to', 'ta' ) );
    // OBS: PUTA QUE PARIU!!!!! kkkkk
    //***********************************************************************************************
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /*
    Mostre no console a parte "nando" da string "Fernando". Use o método que faz a busca do final para o início da string.
    */
    console.log( '\nParte de uma string:' );
    
    function makeNickname(nameString){
        'use strict';
        var x = nameString.lastIndexOf('r') + 1;
        var y = nameString.lastIndexOf('o') + 1;
        var nickName = nameString.substring(x, y);
        console.log(nickName);
    }
    makeNickname('Fernando');
    // PROFESSOR *********** CORREÇÃO ***************************************
    console.log( 'Fernando'.substring( 8, 3 ) );
    //ou:
    console.log( 'Fernando'.slice( 'Fernando'.lastIndexOf('nando')));
    // OBS: 
    //***********************************************************************************************
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /*
    Declare uma variável chamada `myName`, que receba o seu primeiro nome, escrito de forma natural.
    Mostre no console esse nome, mas com as letras intercalando entre maiúsculas e minúsculas.
    
    - Detalhe: o código abaixo deve funcionar da mesma forma para qualquer nome, de qualquer tamanho, escrito de qualquer forma.
    Ex.: Nomes que deveriam funcionar: "Fernando", "RoBertO", "gabriEla", etc.
    */
    console.log( '\nNome com letras intercaladas entre caixa alta e baixa:' );
    
    function messedName(meuNome){
        'use strict';
        meuNome = meuNome.split('');
        var crazyCaps = [];
        for (var i = 0; i<meuNome.length; i++){
            if (i % 2 === 0){
                crazyCaps += meuNome[i].toUpperCase();
            }
            else {
                crazyCaps += meuNome[i].toLowerCase();
            }
        }
        console.log(crazyCaps);
    }
    messedName('pamplona');
    // PROFESSOR *********** CORREÇÃO ***************************************
    var myName = 'Fernando';
    var myNewName = [];
    for( var i = 0, len = myName.length; i < len; i++) {
        myNewName.push( i % 2 === 0 ? myName[i].toLocaleLowerCase() : myName[i].toLocaleUpperCase() );
    }
    console.log( myNewName.join('') );
    // OBS: 
    //***********************************************************************************************
    
    
    
    
    
    
        
})();