// AULA - 19

/*
1.  Outros símbolos para Regex
        Início de String:   ^
        Fim de String:      $
        Flag Multiline:     /m
        Como evitar capturas gulosas
        Referências /1 /2 dentro da própria regex.
        
2.  Métodos de string para Regex
        Match
        Replace
        Split
        Search
        
3.  RegExp Object
        Sintaxe sem  / /
        Método .test
        Método .exec
        Caracteres especiais de RegExp em Strings.

*/

// ESTUDE REGEX SEMPRE COM O WEBSITE https://regex101.com/





var text = "<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>";

// INÍCIO DE STRING:   ^

// Caso esteja fora de uma lista( isto é, [entre colchetes] ), não terá o valor de NEGAÇÃO conforme foi visto na aula passada.
// Portanto puxará somente a abertura da primeira de todas as tags de text;
text.match(/^</g);
//["<"]
text.match(/</g);
//(6) ["<", "<", "<", "<", "<", "<"]



// FIM DE STRING:      $

// Ele será a última coisa que você irá adicionar.
// Ele deve vir sempre depois do caractere que você quer.
// Portanto puxará somente o fim da última de todas as tags de text:
text.match(/>$/g);
// [">"]
text.match(/>/g);
// (6) [">", ">", ">", ">", ">", ">"]



// INÍCIO DE STRING + FIM DE STRING

// Exemplo com os dois, puxando tudo entre eles:
text.match(/(^<)(.+)(>$)/);
/*
1: "<"
2: "h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer"
3: ">"
*/


// FLAG MULTILINE: /m

// Faz com que o escopo da Regex inclua todas as linhas.
// Cada linha vai ser uma string onde a regex tentará casar.

// Exemplo com 3 linhas:
var text =
"<h1>Título da página</h1>
<p>Este é um parágrafo</p>
<footer>Rodapé</footer>"

text.match(/^</gm);
/*
Match 1
`<`
Match 2
`<`
Match 3
`<`
*/



// CAPTURAS GULOSAS *****************************

// Primeiro, o que é uma captura gulosa?
// Exemplo:
var text = "<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>";
text.match(/(<\w+>).+(<\/\w+>)/g);
// Como na var text temos muitas tags abrindo e fechando, a regex acima está atropelando as intermediárias, reconhecendo apenas a primeira e a última. Daí o termo captura "guolosa".

Group 1.	n/a	`<h1>`
Group 2.	n/a	`</footer>`

// Ou seja, perdemos todo o conteúdo intermediário.

// Que alternativas temos para sanar isso?

// DICA 1: LISTA C/ NEGAÇÃO '^' DO INÍCIO DA CAPTURA SEGUINTE:
text.match(/(<\w+>)[^<]+(<\/\w+>)/g);

// Na regex acima, temos a lista com a negação do caractere de abertura de tag, de modo que a seleção deste trecho termina antes da primeira abertura de tag.
Full match	0-25	`<h1>Título da página</h1>`
Group 1.	n/a	`<h1>`
Group 2.	n/a	`</h1>`
Match 2
Full match	25-51	`<p>Este é um parágrafo</p>`
Group 1.	n/a	`<p>`
Group 2.	n/a	`</p>`
Match 3
Full match	51-74	`<footer>Rodapé</footer>`
Group 1.	n/a	`<footer>`
Group 2.	n/a	`</footer>`
// se removermos a flag 'g', teremos então somente o primeiro trecho de match:
Full match	0-25	`<h1>Título da página</h1>`
Group 1.	n/a	`<h1>`
Group 2.	n/a	`</h1>`

// DICA 2: A INCLUSÃO DE "?" (APÓS REPETIDORES)

// Quando usado após repetidores, '?' forçará a regex a respeitar o início da captura seguinte. A captura engloba o mínimo de caracteres necessários para fazer o match, então conclui e parte para a nova captura.
text.match(/(<\w+>).+?(<\/\w+>)/g);

Match 1
Full match	0-25	`<h1>Título da página</h1>`
Group 1.	n/a	`<h1>`
Group 2.	n/a	`</h1>`
Match 2
Full match	25-51	`<p>Este é um parágrafo</p>`
Group 1.	n/a	`<p>`
Group 2.	n/a	`</p>`
Match 3
Full match	51-74	`<footer>Rodapé</footer>`
Group 1.	n/a	`<footer>`
Group 2.	n/a	`</footer>`

// REVISÃO: '?'
// Nas aulas anteriores, vimos que '?' representa 1 ou 0 caracteres daquele caractere que vem antes dele. Pode ou não ser incluído.

var smalltext = 'Título da página';
smalltext.match(/y?/g);
// Ou seja, acima, com o '?', busca-se o match com o 'y' ou sem o 'y'. Independe de quantas vezes ele aparece ou não. No caso desta var 'smalltext', ele nunca aparece.
/*
Match 1
Full match	0-0	``
Match 2
Full match	1-1	``
Match 3
Full match	2-2	``
Match 4
Full match	3-3	``
Match 5
Full match	4-4	``
Match 6
Full match	5-5	``
Match 7
Full match	6-6	``
Match 8
Full match	7-7	``
Match 9
Full match	8-8	``
Match 10
Full match	9-9	``
Match 11
Full match	10-10	``
Match 12
Full match	11-11	``
Match 13
Full match	12-12	``
Match 14
Full match	13-13	``
Match 15
Full match	14-14	``
Match 16
Full match	15-15	``
Match 17
Full match	16-16	``
*/

// DICA 3: (?:) "Somente agrupamento, sem capturar"

// Digamos que eu queira pegar

var inverno = "junho e julho";

inverno.match(/ju[nl]ho/g);
/*
Match 1
Full match	0-5	`junho`
Match 2
Full match	8-13	`julho`
*/
inverno.match(/junho|julho/g);
/*
Match 1
Full match	0-5	`junho`
Match 2
Full match	8-13	`julho`
*/
inverno.match(/ju(n|l)ho/g);
/*
Full match	0-5	`junho`
Group 1.	n/a	`n`
Match 2
Full match	8-13	`julho`
Group 1.	n/a	`l`
*/

// Note que acima o problema é que ele está fazendo a captura de 'n' e 'l', não dos meses em si.
// Com parênteses, dá-se agrupamento e captura ao mesmo tempo.

// Para evitar o agrupamento, portanto, vamos nos valer de:
// (?:)
inverno.match(/ju(?:n|l)ho/g);
/*
Match 1
Full match	0-5	`junho`
Match 2
Full match	8-13	`julho`
*/
// Ou seja, o match foi correto. E não há grupos, apesar de termos o parênteses).





// REFERÊNCIA DENTRO DE REGEX: \1 \2

var text = "<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>";

// Por exemplo, é possível garantir que vamos capturar o fechamento de uma tag igual ao nome da abertura da tag?

// Na situação inicial abaixo, de captura 'gulosa', estamos 'atropelando' e saltando direto para o fechamento da última tag, que é diferente da primeira capturada. Vamos tentar arrumar isso?
text.match(/<(\w+)>.+<\/(\w+)>/g);
/*
Match 1
Full match	0-74	`<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>`
Group 1.	n/a	`h1`
Group 2.	n/a	`footer`
*/


// Eis a solução:
text.match(/<(\w+)>.+<\/(\1)>/g);
// O que está sendo comunicado acima é: \1 faz referência ao conteúdo da primeira captura. Veja o resultado:
/*
Match 1
Full match	0-25	`<h1>Título da página</h1>`
Group 1.	n/a	`h1`
Group 2.	n/a	`h1`
Match 2
Full match	25-51	`<p>Este é um parágrafo</p>`
Group 1.	n/a	`p`
Group 2.	n/a	`p`
Match 3
Full match	51-74	`<footer>Rodapé</footer>`
Group 1.	n/a	`footer`
Group 2.	n/a	`footer`
*/

// É um recurso similar ao $1, $2, $3... visto anteriormente na function com replace. Quase igual, porém DENTRO da regex!








// 2.  Métodos de string para Regex *************************

// Já vimos: Match e Replace

// Match
'fernando'.match(/nando/);
// ["nando"]

'fernando'.match(/n/g);
// ["n", "n" ]

'fernando'.match(/n/);
// ["n" ]

'fernando'.match(/z/);
// null


// Replace
// .replace(regexp, string)
// O segundo parâmetro pode ser uma string ou um parânetro.
// A função substitui uma string e retorna o valor que vai ser substituído pelo valor da regex. Os parâmetros desse função são as capturas que você fez pela regex.


// Novos:

// Split
'111.222.333-44'.split('.');
// (3) ["111", "222", "333-44"]
// QUebrou no ponto e removeu o ponto.


'111.222.333-44'.split(/\D/); 
// (4) ["111", "222", "333", "44"]
// Tudo que for diferente de número é utilizado para quebrar (isto é, ponto ou hífem, no exemplo acima).




// Search
// .search(regexp)
// Faz uma busca na string.
'111.222.333-44'.search(/\./); 
// 3
// Traz o índice do caractere.

'111.222.333-44'.search(/\-/); 
// 11

// No search, a flag global é ignorada. Ele retorna o primeiro sempre. É como se fosse um indexof, mas para regex.

// Tal qual 'indexof', se buscar um caractere inexistente a resposta também é -1:
'111.222.333-44'.search(/\f/); 
// -1














// 3.  Construtor RegExp() *************************

// Funciona mais ou menos como os outros construtores.
// Via Constructor, você automaticamente cria um novo objeto.
// Neste caso, não utilizamos as duas barras "/ /" envolvendo a string.

var regex = new RegExp( 'nando' ); // Obs: passe como string.
// undefined
redex
// /nando/

// É igual quando você cria uma string por constructor:
new String('Fernando');
// String {"Fernando"}
/*
String {"Fernando"}0: "F"1: "e"2: "r"3: "n"4: "a"5: "n"6: "d"7: "o"length: 8__proto__: String[[PrimitiveValue]]: "Fernando"
*/
'fernando'.match( regex );
// ["nando", index: 3, input: "fernando", groups: undefined]


// A criação pelo formato literal é mais rapida, da mesma forma que como visto nos demais constructors. É o mesmo que fazer:
regex = /nando/
// /nando/
'fernando'.match( regex );
// ["nando", index: 3, input: "fernando", groups: undefined]
var name = 'fer123nando';
// undefined
name
// 'fer123nando'

// ATENÇÃO: Para match somente com números, há uma diferença:
// Via constructor, a sua regex precisará de um SCAPE a mais para detectar o \d de dígitos (números).

// NÃO FUNCINA ASSIM:
var regex = new RegExp( '\d' );
// /d/
regex
// /d/
'paulo123'.match(regex);
// null

// ASSIM É QUE FUNCIONA, 'ESCAPANDO':
var regex = new RegExp( '\\d' );
// /\d/
regex
// /\d/
'paulo123'.match(regex);
// ["1", index: 5, input: "paulo123", groups: undefined]

// OU SEJA, SEMPER QUE FORMOS UTILIZAR A BARRA INVERTIDA PARA ALGUM CARACTERE ESPECIAL DE COMANDO, NESTE CASO A PRÓPRIA BARRA INVESTIDA PRECISA SER ESCAPADA. ABAIXO, A MENOS QUE QUEIRA-SE MATCH COM UMA BARRA + A LETRA 'D', É IMPRESCINDÍVEL UM ESCAPE PARA A PRÓPRIA BARRA DE '\d'. OU SEJA, O MATCH VIA COMANDO DÍGITOS DEPENDE DE '\\d', TAL COMO ABAIXO:
var regex = new RegExp( '\\d' );


// FLAGS IN REGEXP OBJECTS
var regex = new RegExp( '\\d', 'g' );
// undefined
'paulo123'.match(regex);
// (3) ["1", "2", "3"]








// MÉTODOS de RegExp Obj: .test
.test
// retorna falores booleanos: true or false.

regex = new RegExp('z');
// undefined

regex.test('fernandoz');
// true

regex.test('paulo');
// false

// ISSO NÃO FUNCIONA A MENOS QUE SEJA UM REGEXP OBJECT:
'z'.test('paulo');
// Uncaught TypeError: "z".test is not a function





// MÉTODOS de RegExp Obj: .exec
.exec
// O método .exec faz o match a cada vez que é executado. Na primeira vez, pega a primeira referência. Na segudna pega a segunda referência, e por aí vai.

// ATENÇÃO: PARA FUNCIONAR, VOCÊ NÃO PODE ESQUECER A FLAG GLOBAL:
// Exemplo:

var regex = /\d/g;
// undefined

var name = 'fer123nando';
// undefined

regex.exec(name);
//["1", index: 3, input: "fer123nando", groups: undefined]

regex.exec(name);
//["2", index: 4, input: "fer123nando", groups: undefined]

regex.exec(name);
//["3", index: 5, input: "fer123nando", groups: undefined]

regex.exec(name);
//null

regex.exec(name);
//["1", index: 3, input: "fer123nando", groups: undefined]

regex.exec(name);
//["2", index: 4, input: "fer123nando", groups: undefined]

regex.exec(name);
//["3", index: 5, input: "fer123nando", groups: undefined]

regex.exec(name);
//null

regex.exec(name);
//["1", index: 3, input: "fer123nando", groups: undefined]

regex.exec(name);
//["2", index: 4, input: "fer123nando", groups: undefined]

regex.exec(name);
//["3", index: 5, input: "fer123nando", groups: undefined]

regex.exec(name);
//null

// OBS: Ao fim dos matchs, comos e vê, ele retorna null. Na sequência, ele recomeça do zero. E assim vai.


// CASO SEM A \g FLAG, SIMPLESMENTE NÃO FUNCIONA:
var regex = /\d/g;
// undefined
regex.exec(name);
// ["1"]
regex.exec(name);
// ["1"]
regex.exec(name);
// ["1"]



// PROPRIEDADE .lastIndex + MÉTODO .exec

// Diz respeito ao index daquele último match executado:
regex.lastIndex;


regex.exec(name);
//["1", index: 3, input: "fer123nando", groups: undefined]
regex.lastIndex;
// 4

regex.exec(name);
//["2", index: 4, input: "fer123nando", groups: undefined]
regex.lastIndex;
// 5

regex.exec(name);
//["3", index: 5, input: "fer123nando", groups: undefined]
regex.lastIndex;
// 6

regex.exec(name);
//null
regex.lastIndex;
// 0

// ATENÇÃO: No caso, esse índice tem uma regra diferente. O primeiro caracter já é índice 1, não 0 como de costume. Daí 'ok' que o null seja 0, ele está ausente na string.


// USO COM LOOP

(function (){
    'use strict';
    
    var regex = /\d/g;
    var name = 'fer1234nando';
    var result;
    
    while (result = regex.exec(name) !== null){
        console.log(result);
    }
})();
// [4] true 











// Caracteres especiais de RegExp em Strings.

// QUEBRA DE LINHA:
\n

(function (){
    'use strict';
    
    var regex = /\d/g;
    var name = 'fer1234nando';
    var result;
    
    while (result = regex.exec(name) !== null){
        console.log('Resultado:\n\n\n', result);
    }
})();
/*
(4)Resultado:


 true
 undefined
*/

// TAB:
\t

(function (){
    'use strict';
    
    var regex = /\d/g;
    var name = 'fer1234nando';
    var result;
    
    while (result = regex.exec(name) !== null){
        console.log('Resultado:\t\t\t\t', result);
    }
})();
/*
(4) Resultado:				 true
    undefined
*/


// CONCATENAÇÃO EM TEMPO DE EXECUÇÃO
var regex = new RegExp('(<\\w\+>)' + 'silva' + '\\1');
Como a expressão regular passada para o objeto RegExp() é uma string, ela pode ser concatenada para gerar uma regex em tempo de execução, diferente da regex literal, onde toda a regex precisa estar pronta antes da utilização.






// ESCAPAR ASPAS (OK, WE ALREADY KNOW IT)
(function (){
    'use strict';
    
    var regex = /\d/g;
    var name = 'fer1234nando';
    var result;
    
    while (result = regex.exec(name) !== null){
        console.log('Julio\'s bar', result);
    }
})();
/*
(4) Julio's bar true
    undefined
*/



