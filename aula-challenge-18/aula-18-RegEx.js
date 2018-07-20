// Regular Expressions - RegEx

/*
- Continuação
- Negação
- Repetidores
*/

var myText = "Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de \"O Centauro de Luvas\", foi um militar, político, abolicionista e monarquista brasileiro.";

// Revisão:

myText.match(/aeiou/g);
// Corresponde a palavra 'aeiou', inexistente em myText.
null


// Lista:
myText.match(/[aeiou]/g);
// Corresponde a qualquer um dos caracteres contidos em myText.
(76) ["a", "u", "e", "a", "u", "e", "e", "o", "u", "a", "o", "e", "e", "o", "o", "e", "e", "i", "o", "a", "e", "e", "u", "o", "e", "i", "o", "e", "a", "e", "i", "o", "e", "u", "o", "e", "a", "e", "i", "a", "o", "e", "e", "a", "u", "o", "e", "u", "a", "o", "i", "u", "i", "i", "a", "o", "i", "o", "a", "o", "i", "i", "o", "i", "a", "e", "o", "a", "u", "i", "a", "a", "i", "e", "i", "o"]


// OU/OR
myText.match(/a|b|c/g);
// Corresponde a 'a' OU 'b' OU 'c'.
(19) ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "c", "a", "b", "c", "a", "a", "a", "b", "a"]

//GRUPO / CAPTURA
myText.match(/(aeiou)/g);
// Para capturar itens ou trechos específicos.
null

//WORD CHARACTER
myText.match(/\w\w\w/g);
// Corresponde a qualquer caracrteres alfanuméricos:
(40) ["Man", "uel", "Mar", "que", "Sou", "Con", "Por", "Ale", "gre", "Rio", "Gra", "nde", "jun", "180", "Rio", "Jan", "eir", "jul", "187", "ape", "lid", "ado", "Cen", "tau", "Luv", "foi", "mil", "ita", "pol", "tic", "abo", "lic", "ion", "ist", "mon", "arq", "uis", "bra", "sil", "eir"]

//NO WORD CHARACTER
myText.match(/\W/g);
// Corresponde à negação/oposto de um word character.
(51) [" ", " ", " ", ",", " ", " ", " ", " ", " ", "(", " ", ",", " ", " ", " ", " ", " ", " ", "–", " ", " ", " ", ",", " ", " ", " ", " ", " ", ")", ",", " ", " ", " ", """, " ", " ", " ", """, ",", " ", " ", " ", ",", " ", "í", ",", " ", " ", " ", " ", "."]

// DIGITS
myText.match(/\d\d\d\d/g);
// corresponde a um dígito numérico:
(2) ["1804", "1875"]

// NO DIGITS
myText.match(/\D\D\D\D/g);
// Corresponde à negação/oposto de um dígito numérico:
(51) ["Manu", "el M", "arqu", "es d", "e So", "usa,", " Con", "de d", "e Po", "rto ", "Aleg", "re (", "Rio ", "Gran", "de, ", " de ", "junh", "o de", " – R", "io d", "e Ja", "neir", " de ", "julh", "o de", "), a", "peli", "dado", " de ", ""O C", "enta", "uro ", "de L", "uvas", "", f", "oi u", "m mi", "lita", "r, p", "olít", "ico,", " abo", "lici", "onis", "ta e", " mon", "arqu", "ista", " bra", "sile", "iro."]

// SPACES
myText.match(/\s/g);
// Corresponde a espaço em branco, ou qualquer outro caractere de quebra de linha.
(37) [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]

// NO SPACES
myText.match(/\S/g);
// Corresponde à negação/oposto destes espaços.
(184) ["M", "a", "n", "u", "e", "l", "M", "a", "r", "q", "u", "e", "s", "d", "e", "S", "o", "u", "s", "a", ",", "C", "o", "n", "d", "e", "d", "e", "P", "o", "r", "t", "o", "A", "l", "e", "g", "r", "e", "(", "R", "i", "o", "G", "r", "a", "n", "d", "e", ",", "1", "3", "d", "e", "j", "u", "n", "h", "o", "d", "e", "1", "8", "0", "4", "–", "R", "i", "o", "d", "e", "J", "a", "n", "e", "i", "r", "o", ",", "1", "8", "d", "e", "j", "u", "l", "h", "o", "d", "e", "1", "8", "7", "5", ")", ",", "a", "p", "e", "l", …]

// NEW LINE
myText.match(/\n/g);
// Corresponde a quebra de linha.
null
// OBS: faça testes em https://regex101.com

// TAB
myText.match(/\t/g);
// Corresponde a tab/tabulação.
null
// OBS: faça testes em https://regex101.com

// SINGLE CHARACTER
myText.match(/./g);
// single character, except newline (quebra de linha) or line terminator.
(226) ["M", "a", "n", "u", "e", "l", " ", "M", "a", "r", "q", "u", "e", "s", " ", "d", "e", " ", "S", "o", "u", "s", "a", ",", " ", "C", "o", "n", "d", "e", " ", "d", "e", " ", "P", "o", "r", "t", "o", " ", "A", "l", "e", "g", "r", "e", " ", "(", "R", "i", "o", " ", "G", "r", "a", "n", "d", "e", ",", " ", "1", "3", " ", "d", "e", " ", "j", "u", "n", "h", "o", " ", "d", "e", " ", "1", "8", "0", "4", " ", "–", " ", "R", "i", "o", " ", "d", "e", " ", "J", "a", "n", "e", "i", "r", "o", ",", " ", "1", "8", …]

myText.match(/..../g);
//selecionando 4 caracteres nesse caso:
(56) ["Manu", "el M", "arqu", "es d", "e So", "usa,", " Con", "de d", "e Po", "rto ", "Aleg", "re (", "Rio ", "Gran", "de, ", "13 d", "e ju", "nho ", "de 1", "804 ", "– Ri", "o de", " Jan", "eiro", ", 18", " de ", "julh", "o de", " 187", "5), ", "apel", "idad", "o   ", "   d", "e "O", " Cen", "taur", "o de", " Luv", "as",", " foi", " um ", "mili", "tar,", " pol", "ític", "o, a", "boli", "cion", "ista", " e m", "onar", "quis", "ta b", "rasi", "leir"]


       
       
              
myText.match(/\w\w\w\w\w\w/g);
// buscando grupos de 6 caracteres de palavras:
(12) ["Manuel", "Marque", "Alegre", "Grande", "Janeir", "apelid", "Centau", "milita", "abolic", "ionist", "monarq", "brasil"]

myText.match(/\d\d\d/g);
// buscando grupos de 6 caracteres de palavras:
(2) ["180", "187"]

myText.match(/\d\d\s/g);
// buscando grupos de 6 caracteres de palavras:
(3) ["13 ", "04 ", "18 "]


// NEGAÇÃO ^
myText.match(/[^aeiou]/g);
// No caso, corresponde a qualquer item, menos com os da lista: a, e, i, o, u.
(150) ["M", "n", "l", " ", "M", "r", "q", "s", " ", "d", " ", "S", "s", ",", " ", "C", "n", "d", " ", "d", " ", "P", "r", "t", " ", "A", "l", "g", "r", " ", "(", "R", " ", "G", "r", "n", "d", ",", " ", "1", "3", " ", "d", " ", "j", "n", "h", " ", "d", " ", "1", "8", "0", "4", " ", "–", " ", "R", " ", "d", " ", "J", "n", "r", ",", " ", "1", "8", " ", "d", " ", "j", "l", "h", " ", "d", " ", "1", "8", "7", "5", ")", ",", " ", "p", "l", "d", "d", " ", " ", " ", " ", " ", " ", "d", " ", """, "O", " ", "C", …]



// SELECT ALL *************************************************

myText.match(/[\S\s]/g);
// todos os spaces e todos os não spaces
(226) ["M", "a", "n", "u", "e", "l", " ", "M", "a", "r", "q", "u", "e", "s", " ", "d", "e", " ", "S", "o", "u", "s", "a", ",", " ", "C", "o", "n", "d", "e", " ", "d", "e", " ", "P", "o", "r", "t", "o", " ", "A", "l", "e", "g", "r", "e", " ", "(", "R", "i", "o", " ", "G", "r", "a", "n", "d", "e", ",", " ", "1", "3", " ", "d", "e", " ", "j", "u", "n", "h", "o", " ", "d", "e", " ", "1", "8", "0", "4", " ", "–", " ", "R", "i", "o", " ", "d", "e", " ", "J", "a", "n", "e", "i", "r", "o", ",", " ", "1", "8", …]

myText.match(/[\D\d]/g);
 // todos os digits e todos os não digits
(226) ["M", "a", "n", "u", "e", "l", " ", "M", "a", "r", "q", "u", "e", "s", " ", "d", "e", " ", "S", "o", "u", "s", "a", ",", " ", "C", "o", "n", "d", "e", " ", "d", "e", " ", "P", "o", "r", "t", "o", " ", "A", "l", "e", "g", "r", "e", " ", "(", "R", "i", "o", " ", "G", "r", "a", "n", "d", "e", ",", " ", "1", "3", " ", "d", "e", " ", "j", "u", "n", "h", "o", " ", "d", "e", " ", "1", "8", "0", "4", " ", "–", " ", "R", "i", "o", " ", "d", "e", " ", "J", "a", "n", "e", "i", "r", "o", ",", " ", "1", "8", …]






// QUANTIFIERS
// ou
// CARACTERES REPETIDORES ***************************************************

myText.match(/\w\w\w/g);
(40) ["Man", "uel", "Mar", "que", "Sou", "Con", "Por", "Ale", "gre", "Rio", "Gra", "nde", "jun", "180", "Rio", "Jan", "eir", "jul", "187", "ape", "lid", "ado", "Cen", "tau", "Luv", "foi", "mil", "ita", "pol", "tic", "abo", "lic", "ion", "ist", "mon", "arq", "uis", "bra", "sil", "eir"]

// INTERVALO
\d{min,max}
// Um dado item ao menos 'min' vezes, e no máximo 'max' vezes.
myText.match(/\w{4,6}/g);
// Intervalo - item '\w' de 4 a 6 vezes.
(23) ["Manuel", "Marque", "Sousa", "Conde", "Porto", "Alegre", "Grande", "junho", "1804", "Janeir", "julho", "1875", "apelid", "Centau", "Luvas", "milita", "tico", "abolic", "ionist", "monarq", "uista", "brasil", "eiro"]

// INTERVALO ABERTO
\d{min,}
// Um dado item ao menos 'min' vezes.
myText.match(/\w{5,}/g);
// Intervalo aberto - item '\w' no mínimo 4 vezes.
(17) ["Manuel", "Marques", "Sousa", "Conde", "Porto", "Alegre", "Grande", "junho", "Janeiro", "julho", "apelidado", "Centauro", "Luvas", "militar", "abolicionista", "monarquista", "brasileiro"]
   
// INTERVALO EXATO
\d{x}
// Um dado item exatamente 'x' vezes.
myText.match(/\d{4}/g);
// Intervalo exato - item '\d' exatamente 4 vezes.
(2) ["1804", "1875"]

myText.match(/\d{3}/g);
// Intervalo exato - item '\d' exatamente 3 vezes.
(2) ["180", "187"]

// OPCIONAL
myText.match(/\d\d\d?/g);
// Dois ou três dígitos. O terceiro dígito é opcional
(4) ["13", "180", "18", "187"]

//  +
// Repeat previous token one to infinite times, as many times as possible.
myText.match(/\w\w\w+/g);
// No caso acima, representa um mínimo de 3 ocorrências de \w.
(24) ["Manuel", "Marques", "Sousa", "Conde", "Porto", "Alegre", "Rio", "Grande", "junho", "1804", "Rio", "Janeiro", "julho", "1875", "apelidado", "Centauro", "Luvas", "foi", "militar", "pol", "tico", "abolicionista", "monarquista", "brasileiro"]

//  *
// Matches any string that contains zero or more occurrences of n.
myText.match(/\w*/g);
// No caso acima, representa uma ou mais ocorrências de \w.
(90) ["Manuel", "", "Marques", "", "de", "", "Sousa", "", "", "Conde", "", "de", "", "Porto", "", "Alegre", "", "", "Rio", "", "Grande", "", "", "13", "", "de", "", "junho", "", "de", "", "1804", "", "", "", "Rio", "", "de", "", "Janeiro", "", "", "18", "", "de", "", "julho", "", "de", "", "1875", "", "", "", "apelidado", "", "de", "", "", "O", "", "Centauro", "", "de", "", "Luvas", "", "", "", "foi", "", "um", "", "militar", "", "", "pol", "", "tico", "", "", "abolicionista", "", "e", "", "monarquista", "", "brasileiro", "", ""]


// APLICAÇÕES PRÁTICAS:
   
// Validação de URL:
/*
http://www.google.com.br
hpt://chinelo.
https://google.com
*/
var myURL = ['http://www.google.com.br', 'hpt://chinelo.', 'https://google.com', 'https://.olha.com', 'http://www.globo.org' ];
   
var regex = '/http:\/\/\w+\.\w+\.\w{3}\.\w{2}/g';   

myURL[0].match(regex);
//["http://www.google.com.br"]

myURL[1].match(regex);
//null
// muitos erros.
   
myURL[2].match(regex);
//null
// faltou apenas o final ".br"



// OUTRO CASO:
var myURL = ['http://www.google.com.br', 'hpt://chinelo.', 'https://google.com', 'https://.olha.com', 'http://www.globo.org' ];
   
var regex = /https?:\/\/\w+[.\w]+/g; 
   
myURL[0].match(regex);
// ["http://www.google.com.br"]

myURL[1].match(regex);
// null
   
myURL[2].match(regex);
// ["https://google.com"]
   
myURL[3].match(regex);
// null
   
myURL[4].match(regex);
// ["http://www.globo.org"]
   
   
// EMAIL VALIDATION:

var myEmails = [
'pamplonapaulo@gmail.com',
'paulo.pamplona@paulopamplona.com.br',
'paulo@paulopamplona.com.br',
'jose@hotmail.com',
'fernando@email.com',
'maria+arroz@casadajoana.com.br',
'maria+arroz@casadajoana.com.br.la.lu'
];
   
var regex = /[\w+]+@\w+\.\w+.?([\w]{2})?/g; 

myEmails[0].match(regex);
//["pamplonapaulo@gmail.com"]
   
myEmails[1].match(regex);
//["pamplona@paulopamplona.com.br"]
   
myEmails[2].match(regex);
//
   
myEmails[3].match(regex);
//[paulo@paulopamplona.com.br]
   
myEmails[4].match(regex);
//[jose@hotmail.com]
   
myEmails[5].match(regex);
//[fernando@email.com]
   
myEmails[6].match(regex);
//[maria+arroz@casadajoana.com.br]
   
myEmails[7].match(regex);
//


   
   
   
   
// Match Information
Match 1
Full match	0-7	     `?s=lala`
Group 1.	1-2	     `s`
Group 2.	3-7	     `lala`
// https://regex101.com/
Match 2
Full match	7-14	`&b=bebe`
Group 1.	8-9	    `b`
Group 2.	10-14	`bebe`
// https://regex101.com/
Match 3
Full match	14-20	`&c=cce`
Group 1.	15-16	`c`
Group 2.	17-20	`cce`
// https://regex101.com/
  
// COMO CAPTURAR UMA QUERY-STRING
var queryString = '?s=lala&b=bebe&c=cce';
   
queryString.replace(/[?&](\w+)=(\w+)/g, function(regex, key, value){
    console.log(key, value);
});
//s lala
//b bebe
//c cce
//"undefinedundefinedundefined"
 
queryString.replace(/[?&](\w+)=(\w+)/g, function(regex, key, value){
    if(key === 's'){
        console.log('O resultado de busca para ' +  key + ' é: ' + value);
    }
    return "";
});
//O resultado de busca para s é: lala
//""





   
   