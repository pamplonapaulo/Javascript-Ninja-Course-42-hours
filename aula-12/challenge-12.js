(function (){
    /*
    Envolva todo o conteúdo desse arquivo em uma IIFE.
    */

    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */
    var person = {
        name:   'Paulo',
        lastname:   'Pamplona',
        age:    39
    }

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
    console.log( 'Propriedades de "person":');
    console.log(Object.keys(person));

    /*
    Crie um array vazio chamado `books`.
    */
    var books = [];

    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */
    books.push({ name: 'Sociedade do Espetáculo', pages: 200 });
    books.push({ name: 'Arte de Viver', pages: 100 });
    books.push({ name: 'American Sniper', pages: 300 });

    /*
    Mostre no console todos os livros.
    */
    console.log( '\nLista de livros:' );
    console.log(books);

    /*
    Remova o último livro, e mostre-o no console.
    */
    var remover = books.pop();
    console.log( '\nLivro que está sendo removido:' );
    console.log(remover);
    
    /*
    Mostre no console os livros restantes.
    */
    console.log( '\nAgora sobraram somente os livros:' );
    console.log(books);

    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    var bookString = JSON.stringify(books);

    /*
    Mostre os livros nesse formato no console:
    */
    console.log( '\nLivros em formato string:' );
    console.log(bookString);
    
    /*
    Converta os livros novamente para objeto.
    */
    var bookObjects = JSON.parse(bookString);

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    
    
    console.log( '\nAgora os livros são objetos novamente:' );
    for (var i = 0; i < Object.keys(bookObjects).length; i++) {
        console.log(bookObjects[i].name + ': ' + bookObjects[i].pages);
    }*/
    
    // CONSIDERAR O SEGUNDO ABAIXO:
    
    console.log( '\nAgora os livros são objetos novamente:' );
    
    for (var i = 0; i < bookObjects.length; i++) {
        for (var prop in bookObjects[i]){
            console.log( prop + ': ' + books[i][prop]);
        }
    }    

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    var myName = [ 'P', 'a', 'u', 'l', 'o' ];
    
    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    console.log( '\nMeu nome é:');
    console.log(myName.join(''));
    
    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    
    console.log( '\nMeu nome invertido é:' );
    console.log(myName.reverse().join(''));
    
    
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    console.log( '\nAgora em ordem alfabética:' );
    console.log(myName.sort());
    
})();