(function(){
    'use strict';
    /*
    1. Envolva todo o conteúdo desse desafio em uma IIFE.
    2. Adicione a diretiva 'use strict';
    3. Crie um arquivo index.html e adicione esse script à ele.
    */

    /*
    Crie uma função chamada `cleanCPF`, que receba um CPF por parâmetro, e
    retorne esse CPF limpo (somente os números).
    Usando os CPFs abaixo, mostre no console que a limpeza funciona para todos
    eles! Use um console.log para cada CPF.
    - "049-214 3421-1"
    - "210.458.522-05"
    - "735 500 794 - 22"
    - "101.123-131x32"
    */
    console.log( 'Limpando CPFs:' );
    // ?
    function cleanCPF(myCPF){
        var regex = /\d+/g;
        var onlyNumbers = myCPF.match(regex).join('');
        return onlyNumbers;
    }
    console.log(cleanCPF("049-214 3421-1"));
    // 04921434211
    
    console.log(cleanCPF("210.458.522-05"));
    // 21045852205
    
    console.log(cleanCPF("735 500 794 - 22"));
    // 73550079422
    
    console.log(cleanCPF("101.123-131x32"));
    // 10112313132
    
    
    
    // PROFESSOR: ************************************************************
    function cleanCPF( cpf ) {
        return cpf.replace( /\D/g, '');
    }
    console.log( cleanCPF( '049-214 3421-1' ) );
    console.log( cleanCPF( '210.458.522-05' ) );
    console.log( cleanCPF( '735 500 794 - 22' ) );
    console.log( cleanCPF( '101.123-131x32' ) );
    // OU MELHOR AINDA:
    function cleanCPF( cpf ) {
        return cpf.replace( /\D/g, '');
    }
    var cpfs = [ '049-214 3421-1', 
                 '210.458.522-05', 
                 '735 500 794 - 22', 
                 '101.123-131x32' ];
    cpfs.forEach(function( cpf ) {
        console.log( cleanCPF ( cpf ) );
    });
    /*
    04921434211
    21045852205
    73550079422
    10112313132
    */
    //*************************************************************************
    
    /*
    Usando os CPFs limpos acima, deixe-os com a formatação correta de CPF.
    Ex.: "999.999.999-99"
    Mostre o resultado no console.
    */
    console.log( '\nFormatando CPFs corretamente:' );
    // ?
    
    function fixCPF(cpf){
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
    }
    var cpfs = [ '04921434211',
                 '21045852205',
                 '73550079422',
                 '10112313132' ];
    
    cpfs.forEach(function(cpf) {
        console.log(fixCPF(cpf));
    });
    /*
    049.214.342-11
    210.458.522-05
    735.500.794-22
    101.123.131-32
    */
    
    
    
    
    // PROFESSOR: ************************************************************
    cpfs.forEach(function(cpf) {
        console.log(cleanCPF(cpf).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'));
    });
    /*
    049.214.342-11
    210.458.522-05
    735.500.794-22
    101.123.131-32
    */
    // Lembrete Capturas:
    // $& = pega todas as capturas.
    // OU AINDA: ************************************************************
    cpfs.forEach(function(cpf) {
        console.log(
            cleanCPF(cpf).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,
                function(regex, arg1, arg2, arg3, arg4 ) {
            return arg1 + "." + arg2 + "." + arg3 + "-" + arg4;
        }));
    });
    // MAS O CÓDIGO AQUI É MAIS 'VERBOSO' QUE O ANTERIOR.
    //*************************************************************************
    
    
    
    
    
    
    /*
    Crie uma expressão regular que faça match com as palavras "junho" ou "julho",
    usando o mínimo de caracteres possíveis na regex.
    Para garantir que a regex funciona, teste-a usando o método match. Se houver
    o match, o método retorna um array com os matches. Caso contrário, ele
    retornará null.
    Mostre no console o resultado do match para a frase:
    "Os meses de janeiro, junho e julho começam com a letra j."
    O resultado deve ser:
    ["junho", "julho"]
    */
    console.log( '\nMatch com as palavras "junho" ou "julho" para a frase "Os meses de janeiro, junho e julho começam com a letra j.":' );
    // ?
    var text = "Os meses de janeiro, junho e julho começam com a letra j.";
    text.match(/(ju\who)/g);
    // (2) ["junho", "julho"]
    
    //
    // PROFESSOR: ************************************************************
    console.log("Os meses de janeiro, junho e julho começam com a letra j.".replace(/ju[nl]ho/g));
    // (2) ["junho", "julho"]
    // DENTRO DE LISTAS [], CARACTERES ESPECIAIS SÃO 'ESCAPADOS' AUTOMATICAMENTE.
    console.log("Os meses de janeiro, junho e julho começam com a letra j.".replace(/ju()ho/g));
    // (2) ["junho", "julho"]
    //*************************************************************************

    
    
    
    /*
    Crie uma expressão regular que faça o match com a abertura de uma tag
    HTML qualquer.
    Ex.: "<div>", "<section>", "<blockquote>".
    Use o método match e faça o teste com a marcação abaixo:
    "<div><section><blockquote>Texto <img /></blockquote></section></div>"
    O resultado deve ser:
    ["<div>", "<section>", "<blockquote>"]
    */
    console.log( '\nMatch com a abertura de uma tag HTML:' );
    // ?
    var tags = "<div><section><blockquote>Texto <img /></blockquote></section></div>";
    tags.match(/(<\w+>)/g);
    // (3) ["<div>", "<section>", "<blockquote>"]
    
    
    // PROFESSOR: ************************************************************
    console.log("<div><section><blockquote>Texto <img /></blockquote></section></div>".match(/(<\w+>)/g));
    // (3) ["<div>", "<section>", "<blockquote>"]
    //*************************************************************************

    
    /*
    Crie uma expressão regular que faça o match com uma tag HTML vazia, casando
    com a abertura e fechamento da tag.
    Ex.: "<div></div>", "<section></section>", "<blockquote></blockquote>".
    Use o método match e faça o teste com a marcação abaixo:
    "<div><ul><li></li><li></li><li><span></span></li></ul></div>"
    O resultado deve ser:
    ["<li></li>", "<li></li>", "<span></span>"]
    */
    console.log( '\nMatch com tags HTML vazias (abertura e fechamento da tag):' );
    // ?
    var tags = "<div><ul><li></li><li></li><li><span></span></li></ul></div>";
    tags.match(/(<\w+><\/\w+>)/g);
    // (3) ["<li></li>", "<li></li>", "<span></span>"]

    
    // PROFESSOR: ************************************************************
    console.log('<div><ul><li></li><li></li><li><span></span></li></ul></div>'.match(/(<\w+><\/\w+>)/g));
    // (3) ["<li></li>", "<li></li>", "<span></span>"]    
    //*************************************************************************

    
    
    
    
    
    /*
    Vamos complicar um pouco agora :D

    Crie uma expressão regular que faça o match com um texto existente dentro de
    uma tag HTML. O texto deve ser capturado e substituído por:
    'O texto dentro da tag "[NOME DA TAG]" é "[TEXTO]"'

    Use a marcação abaixo para fazer o replace:
    "<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>"

    A marcação deve permanecer como está, somente o texto deve ser substituído.
    No replace, utilize quebras de linha para deixar uma tag por linha.

    O resultado deve ser esse:
    <h1>O texto dentro da tag "h1" é "Título da página"</h1>
    <p>O texto dentro da tag "p" é "Este é um parágrafo"</p>
    <footer>O texto dentro da tag "footer" é "Rodapé"</footer>

    Uma dica: faça o match aos poucos. Para facilitar o teste, use o site
    https://regex101.com/#javascript e verifique se as capturas estão
    corretas, para depois aplicar no código ;)
    */
    console.log( '\nFazer replace dos textos das tags:' );
    // ?
    var myHTML = "<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>";
    
    myHTML.replace(/<(\w+)>([a-zA-Z_áéí\s]+)/g, function(regex, key, value){
        
        var myConsole = "<" + key + ">O texto dentro da tag \"" + key + "\" é \"" + value + "</" + key + ">";
        
        if (key === 'h1'){
           console.log(myConsole);
        } else if (key === 'p'){
           console.log(myConsole);
        } else if (key === 'footer'){
           console.log(myConsole);
        }
        return;
        
    });
    //<h1>O texto dentro da tag "h1" é "Título da página</h1>
    //<p>O texto dentro da tag "p" é "Este é um parágrafo</p>
    //<footer>O texto dentro da tag "footer" é "Rodapé</footer>
    //"undefined</h1>undefined</p>undefined</footer>"
    
    // PROFESSOR: *************************************************************
    console.log('<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>'.replace(/<(\w+)>([^<]+)<\/\w+>/g, '<$1>O texto dentro da tag "$1" é $2</$1>\n'));
    //<h1>O texto dentro da tag "h1" é Título da página</h1>
    //<p>O texto dentro da tag "p" é Este é um parágrafo</p>
    //<footer>O texto dentro da tag "footer" é Rodapé</footer>
    //*************************************************************************
    
    
});