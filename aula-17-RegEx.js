// Regular Expressions - RegEx

// Existem em várias outras linguagens. Aqui, veremos o básico. É um tema que demanda um curso só para isso.

// Servem basicamente para manipular uma string.


// https://www.w3schools.com/jsref/jsref_obj_regexp.asp




/*

RegEx
*******************************************************

- RegEx é um Tipo Primitivo

- Ferramenta de teste de RegEx:
https://regex101.com

- Caracteres Literais são caracteres alfanúmericos:
números e letras.

- RegEx só faz match com um único caractere. Como fazer com mais de um?

- FLAGS:
g: global (don't return after first match)
m: multi line (ˆand $ match start/end of line)
i: case insensitive match
u: match with full unicode
s: sticky (proceed matching from where previous match ended only)

Metacharacter	Description
.	            Find a single character, except newline or line terminator
\w	            Find a word character
\W	            Find a non-word character
\d	            Find a digit
\D	            Find a non-digit character
\s	            Find a whitespace character
\S	            Find a non-whitespace character
\b	            Find a match at the beginning/end of a word
\B	            Find a match not at the beginning/end of a word
\0	            Find a NUL character
\n	            Find a new line character
\f	            Find a form feed character
\r	            Find a carriage return character
\t	            Find a tab character
\v	            Find a vertical tab character
\xxx	        Find the character specified by an octal number xxx
\xdd	        Find the character specified by a hexadecimal number dd
\uxxxx	        Find the Unicode character specified by a hexadecimal number xxxx


- A expressão regular no javascript fica entre duas barras:

/Essa é minha RegEx/

/de/
*/
var regex = /de/;

//Exemplo de aplicação:

var texto = "Estão entregando dinheiro na mão  terrorista!”, dizia o vío publicado no dia 26  janeiro pelo site Gospel Prime, um portal  notícias focado no público evangélico com média  quase 2,8 milhões  leitores ao mês. De acordo com a núncia do site, o presinte da Câmara, Rodrigo Maia, e o presinte Michel Temer estavam tentando sviar dinheiro  uma obra, por meio  uma Medida Provisória  ocasião, para financiar terroristas palestinos. No Facebook, o lír da bancada evangélica na Câmara dos Deputados, o pastor Takayama (PSC-PR), gravou outro vío com um comentário que teve cerca  4 mil visualizações. “Estão nos comunicando que muito do que é enviado para a Palestina é para patrocinar terrorismo”, disse, grave.";

// MATCH:

texto.match(/Michel Temer/);
// ["Michel Temer", index: 291, input: "Estão entregando dinheiro na mão  terrorista!”, d…tina é para patrocinar terrorismo”, disse, grave.", groups: undefined]

texto.match(/Guilherme Boulos/);
// null

texto.match(/o/);
/* [ 'o',
  index: 4,
  input: 'Estão entregando dinheiro na mão  terrorista!”, dizia o vío publicado no dia 26  janeiro pelo site Gospel Prime, um portal  notícias focado no público evangélico com média  quase 2,8 milhões  leitores ao mês. De acordo com a núncia do site, o presinte da Câmara, Rodrigo Maia, e o presinte Michel Temer estavam tentando sviar dinheiro  uma obra, por meio  uma Medida Provisória  ocasião, para financiar terroristas palestinos. No Facebook, o lír da bancada evangélica na Câmara dos Deputados, o pastor Takayama (PSC-PR), gravou outro vío com um comentário que teve cerca  4 mil visualizações. “Estão nos comunicando que muito do que é enviado para a Palestina é para patrocinar terrorismo”, disse, grave.' ]
*/

texto.match(/o/g);
// (65) ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o"]

texto.match(/ro/gi);
// (10) ["ro", "ro", "ro", "Ro", "ro", "ro", "ro", "ro", "ro", "ro"]

texto.match(/de/gi);
// (2) ["De", "De"]

texto.match(/de/gium);
// (2) ["De", "De"]



/*
TERMOS:

\w  - caracteres alfanuméricos

\d  - números (digits)


*/


// Traga tudo que for letra, por exemplo:
texto.match(/\w/);
// ["E", index: 0, input: "Estão entregando dinheiro na mão  terrorista!”, di…tina é para patrocinar terrorismo”, disse, grave.", groups: undefined]

texto.match(/\w/g);
// (537) ["E", "s", "t", "o", "e", "n", "t", "r", "e", "g", "a", "n", "d", "o", "d", "i", "n", "h", "e", "i", "r", "o", "n", "a", "m", "o", "t", "e", "r", "r", "o", "r", "i", "s", "t", "a", "d", "i", "z", "i", "a", "o", "v", "o", "p", "u", "b", "l", "i", "c", "a", "d", "o", "n", "o", "d", "i", "a", "2", "6", "j", "a", "n", "e", "i", "r", "o", "p", "e", "l", "o", "s", "i", "t", "e", "G", "o", "s", "p", "e", "l", "P", "r", "i", "m", "e", "u", "m", "p", "o", "r", "t", "a", "l", "n", "o", "t", "c", "i", "a", …]

// MATCH DE PALAVRAS:
texto.match(/Takayama/);
// ["Takayama", index: 502, input: "Estão entregando dinheiro na mão  terrorista!”, di…tina é para patrocinar terrorismo”, disse, grave.", groups: undefined]
texto.match(/Pamplona/);
//null (match inexistente)

// MATCH DE NÚMEROS(DÍGITOS):
texto.match(/\d/g);
// (5) ["2", "6", "2", "8", "4"]

var texto2 = "Benítez (também conhecido como Marito) teve 46,4% dos votos, frente a 42,7% de Efraín Alegre, seu principal adversário e que pediu recontagem dos votos. No Paraguai, o voto é obrigatório e não há segundo turno."

// MATCH DE DOIS DÍGITOS:
texto2.match(/\d\d/g);
// (2) ["46", "42"]

texto2.match(/ar/g);
// (2) ["ar", "ar"]

texto.match(/ar/g);
// (8) ["ar", "ar", "ar", "ar", "ar", "ar", "ar", "ar"]

// operador OU: "|"
texto.match(/da|an/g);
// (12) ["an", "an", "an", "da", "an", "da", "an", "da", "an", "da", "an", "an"]

// CLASSES DE CARACTERES OU LISTAS:
// São representadas pelos [ ]
// Exemplo:
texto.match(/[abcd]/g);
// Significa busca por "a", "b", "c", ou "d";
(120) ["a", "d", "d", "a", "a", "d", "a", "b", "c", "a", "d", "d", "a", "a", "a", "c", "a", "c", "a", "d", "b", "c", "a", "c", "c", "d", "a", "a", "a", "a", "c", "d", "c", "a", "c", "a", "d", "d", "a", "a", "a", "d", "a", "a", "c", "a", "a", "a", "d", "a", "d", "a", "b", "a", "a", "d", "d", "a", "a", "c", "a", "a", "a", "a", "c", "a", "a", "a", "a", "c", "b", "d", "a", "b", "a", "c", "a", "d", "a", "a", "c", "a", "a", "a", "a", "d", "a", "d", "a", "a", "a", "a", "a", "a", "c", "c", "c", "c", "a", "a", …]

var texto3 = 'O dólar avançou 1,20 por cento, a 3,4528 reais na venda, depois de tocar a máxima de 3,4538 reais no dia e no maior patamar de fechamento desde 2 de dezembro de 2016 (3,4726 reais). Odólar futuro tinha alta de cerca de 1,1 por cento no final da tarde.';

texto3.match(/[234]/g);
// é igual a texto3.match(/[2|3|4]/g);

// (12) ["2", "3", "4", "2", "3", "4", "3", "2", "2", "3", "4", "2"]

// AGRUPAMENTO DE CARACTERES
var texto4 = "Economistas de instituições financeiras ajustaram sua projeção para a inflação neste ano para cima pela primeira vez após 11 semanas de quedas na pesquisa Focus do Banco Central divulgada nesta segunda-feira, mas continuaram reduzindo a perspectiva para a economia. A alta do IPCA foi calculada agora em 3,49 por cento em 2018, 0,01 ponto percentual a mais do que na semana anterior. A conta subiu apesar de a prévia da inflação oficial ter acelerado menos do que o esperado em abril –o IPCA-15 subiu 0,21, o nível mais baixo para o mês em 12 anos. Para 2019, entretanto, o Focus mostrou a segunda redução seguida na projeção para a inflação, a 4 por cento de 4,07 por cento antes. O nível baixo de inflação mantém aberto o caminho para o BC realizar novo corte da Selic em maio como vem indicando, antes de encerrar o ciclo de flexibilização. Com a taxa básica de juros a 6,5 por cento agora, os especialistas consultados no levantamento continuam vendo corte de 0,25 ponto percentual em maio, com a Selic terminando 2018 a 6,25 por cento e 2019 a 8 por cento. O Top-5, grupo dos que mais acertam as previsões, também não mudou suas perpsectivas, com a Selic a 6,25 por cento este ano, mas 7,5 por cento em 2019. Para a inflação, no cenário de médio prazo permanece a expectativa de 3,56 por cento em 2018, mas para o ano que vem a conta caiu em 0,05 ponto, a 4,0 por cento.";

texto4.match(/(2018)|(2019)/g);
// (6) ["2018", "2019", "2018", "2019", "2019", "2018"]

texto4.match(/2018|2019/g);
// (6) ["2018", "2019", "2018", "2019", "2019", "2018"]

texto4.match(/[0123456789]/g);
texto4.match(/[\d]/g);
texto4.match(/[0-9]/g);
// ambos trazem o mesmo resultado:
// (66) ["1", "1", "3", "4", "9", "2", "0", "1", "8", "0", "0", "1", "1", "5", "0", "2", "1", "1", "2", "2", "0", "1", "9", "4", "4", "0", "7", "6", "5", "0", "2", "5", "2", "0", "1", "8", "6", "2", "5", "2", "0", "1", "9", "8", "5", "6", "2", "5", "7", "5", "2", "0", "1", "9", "3", "5", "6", "2", "0", "1", "8", "0", "0", "5", "4", "0"]


texto4.match(/[a-z]/g);
// (962) ["c", "o", "n", "o", "m", "i", "s", "t", "a", "s", "d", "e", "i", "n", "s", "t", "i", "t", "u", "i", "e", "s", "f", "i", "n", "a", "n", "c", "e", "i", "r", "a", "s", "a", "j", "u", "s", "t", "a", "r", "a", "m", "s", "u", "a", "p", "r", "o", "j", "e", "o", "p", "a", "r", "a", "a", "i", "n", "f", "l", "a", "o", "n", "e", "s", "t", "e", "a", "n", "o", "p", "a", "r", "a", "c", "i", "m", "a", "p", "e", "l", "a", "p", "r", "i", "m", "e", "i", "r", "a", "v", "e", "z", "a", "p", "s", "s", "e", "m", "a", …]


texto4.match(/[A-Z]/g);
// (26) ["E", "F", "B", "C", "A", "I", "P", "C", "A", "A", "I", "P", "C", "A", "P", "F", "O", "B", "C", "S", "C", "S", "O", "T", "S", "P"]


texto4.match(/[A-Za-z0-9]/g);
// (1054) ["E", "c", "o", "n", "o", "m", "i", "s", "t", "a", "s", "d", "e", "i", "n", "s", "t", "i", "t", "u", "i", "e", "s", "f", "i", "n", "a", "n", "c", "e", "i", "r", "a", "s", "a", "j", "u", "s", "t", "a", "r", "a", "m", "s", "u", "a", "p", "r", "o", "j", "e", "o", "p", "a", "r", "a", "a", "i", "n", "f", "l", "a", "o", "n", "e", "s", "t", "e", "a", "n", "o", "p", "a", "r", "a", "c", "i", "m", "a", "p", "e", "l", "a", "p", "r", "i", "m", "e", "i", "r", "a", "v", "e", "z", "a", "p", "s", "1", "1", "s", …]




// TABELA UNICODE
// http://www.ftrain.com/unicode/

// Não confunda UNICODE com html entities: https://www.w3schools.com/html/html_entities.asp

texto4.match(/[a-g]/g);
// Mas qual é exatamente esse intervalo?
// ele está na tabela unicode.

texto4.match(/[A-z]/g);
// ele pega todos os caracteres inseridos nesse intervalo SEGUNDO A ORDEM ESPECÍFICA DA TABELA, o que incluirá outros caracteres além das letras. Portanto, não é correto.

texto4.match(/[A-Za-z]/g);



// SCAPE:

// E se quisermos pegar um hífen? Ora, o hífen é utilizado com valor-chave dentro do match(). Portanto, vamos utilizar um scape tal como já sabido o uso de aspas dentro de outra aspas: com FOWARD SLASH.
/-
// Backslash: \ Forward Slash: / 


texto4.match(/\w\-/g);
// (3) ["a-", "A-", "p-"]

texto4.match(/[\w-]/g);
// (3) ["a-", "A-", "p-"]
// (1057) ["E", "c", "o", "n", "o", "m", "i", "s", "t", "a", "s", "d", "e", "i", "n", "s", "t", "i", "t", "u", "i", "e", "s", "f", "i", "n", "a", "n", "c", "e", "i", "r", "a", "s", "a", "j", "u", "s", "t", "a", "r", "a", "m", "s", "u", "a", "p", "r", "o", "j", "e", "o", "p", "a", "r", "a", "a", "i", "n", "f", "l", "a", "o", "n", "e", "s", "t", "e", "a", "n", "o", "p", "a", "r", "a", "c", "i", "m", "a", "p", "e", "l", "a", "p", "r", "i", "m", "e", "i", "r", "a", "v", "e", "z", "a", "p", "s", "1", "1", "s", …]

// CUIDADO:
// dois traços "tipo hífem" diferentes, mas parecidos:
// &#150
// &#151

// replace()

texto4.replace('a', 'CUCU');
// Mas vai substituir somente o primeiro item matched. A seguir a forma de utilizar com RegEx:

texto4.replace(/de/g, 'CUCU');
// "Economistas CUCU instituições financeiras ajustaram sua projeção para a inflação neste ano para cima pela primeira vez após 11 semanas CUCU quedas na pesquisa Focus do Banco Central divulgada nesta segunda-feira, mas continuaram reduzindo a perspectiva para a economia. A alta do IPCA foi calculada agora em 3,49 por cento em 2018, 0,01 ponto percentual a mais do que na semana anterior. A conta subiu apesar CUCU a prévia da inflação oficial ter acelerado menos do que o esperado em abril –o IPCA-15 subiu 0,21, o nível mais baixo para o mês em 12 anos. Para 2019, entretanto, o Focus mostrou a segunda redução seguida na projeção para a inflação, a 4 por cento CUCU 4,07 por cento antes. O nível baixo CUCU inflação mantém aberto o caminho para o BC realizar novo corte da Selic em maio como vem indicando, antes CUCU encerrar o ciclo CUCU flexibilização. Com a taxa básica CUCU juros a 6,5 por cento agora, os especialistas consultados no levantamento continuam vendo corte CUCU 0,25 ponto percentual em maio, com a Selic terminando 2018 a 6,25 por cento e 2019 a 8 por cento. O Top-5, grupo dos que mais acertam as previsões, também não mudou suas perpsectivas, com a Selic a 6,25 por cento este ano, mas 7,5 por cento em 2019. Para a inflação, no cenário CUCU médio prazo permanece a expectativa CUCU 3,56 por cento em 2018, mas para o ano que vem a conta caiu em 0,05 ponto, a 4,0 por cento."


// GRUPOS DE CAPTURA:

texto4.replace(/(de)/g, '$1');
// (de) :   é um grupo de captura.
// $1   :   é a referência ao primeiro grupo de captura.
// $2   :   é a referência ao segundo grupo de captura.
// etc.

texto4.replace(/(de)/g, '--$1--');
// "Economistas --de-- instituições financeiras ajustaram sua projeção para a inflação neste ano para cima pela primeira vez após 11 semanas --de-- quedas na pesquisa Focus do Banco Central divulgada nesta segunda-feira, mas continuaram reduzindo a perspectiva para a economia. A alta do IPCA foi calculada agora em 3,49 por cento em 2018, 0,01 ponto percentual a mais do que na semana anterior. A conta subiu apesar --de-- a prévia da inflação oficial ter acelerado menos do que o esperado em abril –o IPCA-15 subiu 0,21, o nível mais baixo para o mês em 12 anos. Para 2019, entretanto, o Focus mostrou a segunda redução seguida na projeção para a inflação, a 4 por cento --de-- 4,07 por cento antes. O nível baixo --de-- inflação mantém aberto o caminho para o BC realizar novo corte da Selic em maio como vem indicando, antes --de-- encerrar o ciclo --de-- flexibilização. Com a taxa básica --de-- juros a 6,5 por cento agora, os especialistas consultados no levantamento continuam vendo corte --de-- 0,25 ponto percentual em maio, com a Selic terminando 2018 a 6,25 por cento e 2019 a 8 por cento. O Top-5, grupo dos que mais acertam as previsões, também não mudou suas perpsectivas, com a Selic a 6,25 por cento este ano, mas 7,5 por cento em 2019. Para a inflação, no cenário --de-- médio prazo permanece a expectativa --de-- 3,56 por cento em 2018, mas para o ano que vem a conta caiu em 0,05 ponto, a 4,0 por cento."

texto4.replace(/(d)(e)/g, '$1$1$1$1');
// "Economistas dddd instituições financeiras ajustaram sua projeção para a inflação neste ano para cima pela primeira vez após 11 semanas dddd quedas na pesquisa Focus do Banco Central divulgada nesta segunda-feira, mas continuaram reduzindo a perspectiva para a economia. A alta do IPCA foi calculada agora em 3,49 por cento em 2018, 0,01 ponto percentual a mais do que na semana anterior. A conta subiu apesar dddd a prévia da inflação oficial ter acelerado menos do que o esperado em abril –o IPCA-15 subiu 0,21, o nível mais baixo para o mês em 12 anos. Para 2019, entretanto, o Focus mostrou a segunda redução seguida na projeção para a inflação, a 4 por cento dddd 4,07 por cento antes. O nível baixo dddd inflação mantém aberto o caminho para o BC realizar novo corte da Selic em maio como vem indicando, antes dddd encerrar o ciclo dddd flexibilização. Com a taxa básica dddd juros a 6,5 por cento agora, os especialistas consultados no levantamento continuam vendo corte dddd 0,25 ponto percentual em maio, com a Selic terminando 2018 a 6,25 por cento e 2019 a 8 por cento. O Top-5, grupo dos que mais acertam as previsões, também não mudou suas perpsectivas, com a Selic a 6,25 por cento este ano, mas 7,5 por cento em 2019. Para a inflação, no cenário dddd médio prazo permanece a expectativa dddd 3,56 por cento em 2018, mas para o ano que vem a conta caiu em 0,05 ponto, a 4,0 por cento."

texto4.replace(/(d)(e)/g, '-----$2');
// "Economistas -----e instituições financeiras ajustaram sua projeção para a inflação neste ano para cima pela primeira vez após 11 semanas -----e quedas na pesquisa Focus do Banco Central divulgada nesta segunda-feira, mas continuaram reduzindo a perspectiva para a economia. A alta do IPCA foi calculada agora em 3,49 por cento em 2018, 0,01 ponto percentual a mais do que na semana anterior. A conta subiu apesar -----e a prévia da inflação oficial ter acelerado menos do que o esperado em abril –o IPCA-15 subiu 0,21, o nível mais baixo para o mês em 12 anos. Para 2019, entretanto, o Focus mostrou a segunda redução seguida na projeção para a inflação, a 4 por cento -----e 4,07 por cento antes. O nível baixo -----e inflação mantém aberto o caminho para o BC realizar novo corte da Selic em maio como vem indicando, antes -----e encerrar o ciclo -----e flexibilização. Com a taxa básica -----e juros a 6,5 por cento agora, os especialistas consultados no levantamento continuam vendo corte -----e 0,25 ponto percentual em maio, com a Selic terminando 2018 a 6,25 por cento e 2019 a 8 por cento. O Top-5, grupo dos que mais acertam as previsões, também não mudou suas perpsectivas, com a Selic a 6,25 por cento este ano, mas 7,5 por cento em 2019. Para a inflação, no cenário -----e médio prazo permanece a expectativa -----e 3,56 por cento em 2018, mas para o ano que vem a conta caiu em 0,05 ponto, a 4,0 por cento."

// SELECIONAR TODAS AS CAPTURAS DISPONÍVEIS.
texto4.replace(/(d)(e)/g, '-----$&');
// "Economistas -----de instituições financeiras ajustaram sua projeção para a inflação neste ano para cima pela primeira vez após 11 semanas -----de quedas na pesquisa Focus do Banco Central divulgada nesta segunda-feira, mas continuaram reduzindo a perspectiva para a economia. A alta do IPCA foi calculada agora em 3,49 por cento em 2018, 0,01 ponto percentual a mais do que na semana anterior. A conta subiu apesar -----de a prévia da inflação oficial ter acelerado menos do que o esperado em abril –o IPCA-15 subiu 0,21, o nível mais baixo para o mês em 12 anos. Para 2019, entretanto, o Focus mostrou a segunda redução seguida na projeção para a inflação, a 4 por cento -----de 4,07 por cento antes. O nível baixo -----de inflação mantém aberto o caminho para o BC realizar novo corte da Selic em maio como vem indicando, antes -----de encerrar o ciclo -----de flexibilização. Com a taxa básica -----de juros a 6,5 por cento agora, os especialistas consultados no levantamento continuam vendo corte -----de 0,25 ponto percentual em maio, com a Selic terminando 2018 a 6,25 por cento e 2019 a 8 por cento. O Top-5, grupo dos que mais acertam as previsões, também não mudou suas perpsectivas, com a Selic a 6,25 por cento este ano, mas 7,5 por cento em 2019. Para a inflação, no cenário -----de médio prazo permanece a expectativa -----de 3,56 por cento em 2018, mas para o ano que vem a conta caiu em 0,05 ponto, a 4,0 por cento."

// 
texto4.replace(/(d)(e)/g, function(){
    console.log('ARGUMENTS', arguments);
});
/*

ARGUMENTS Arguments(5) ["de", "d", "e", 12, "Economistas de instituições financeiras ajustaram … vem a conta caiu em 0,05 ponto, a 4,0 por cento.", callee: ƒ, Symbol(Symbol.iterator): ƒ]

(STRING INTEIRA DO MATCH) (PRIMEIRO ITEM DA CAPTURA) (SEGUNDO ITEM DA CAPTURA)


ARGUMENTS Arguments(5) ["de", "d", "e", 133, "Economistas de instituições financeiras ajustaram … vem a conta caiu em 0,05 ponto, a 4,0 por cento.", callee: ƒ, Symbol(Symbol.iterator): ƒ]
ARGUMENTS Arguments(5) ["de", "d", "e", 405, "Economistas de instituições financeiras ajustaram … vem a conta caiu em 0,05 ponto, a 4,0 por cento.", callee: ƒ, Symbol(Symbol.iterator): ƒ]
ARGUMENTS Arguments(5) ["de", "d", "e", 657, "Economistas de instituições financeiras ajustaram … vem a conta caiu em 0,05 ponto, a 4,0 por cento.", callee: ƒ, Symbol(Symbol.iterator): ƒ]
ARGUMENTS Arguments(5) ["de", "d", "e", 696, "Economistas de instituições financeiras ajustaram … vem a conta caiu em 0,05 ponto, a 4,0 por cento.", callee: ƒ, Symbol(Symbol.iterator): ƒ]
ARGUMENTS Arguments(5) ["de", "d", "e", 805, "Economistas de instituições financeiras ajustaram … vem a conta caiu em 0,05 ponto, a 4,0 por cento.", callee: ƒ, Symbol(Symbol.iterator): ƒ]
ARGUMENTS Arguments(5) ["de", "d", "e", 825, "Economistas de instituições financeiras ajustaram … vem a conta caiu em 0,05 ponto, a 4,0 por cento.", callee: ƒ, Symbol(Symbol.iterator): ƒ]
ARGUMENTS Arguments(5) ["de", "d", "e", 862, "Economistas de instituições financeiras ajustaram … vem a conta caiu em 0,05 ponto, a 4,0 por cento.", callee: ƒ, Symbol(Symbol.iterator): ƒ]
ARGUMENTS Arguments(5) ["de", "d", "e", 961, "Economistas de instituições financeiras ajustaram … vem a conta caiu em 0,05 ponto, a 4,0 por cento.", callee: ƒ, Symbol(Symbol.iterator): ƒ]
ARGUMENTS Arguments(5) ["de", "d", "e", 1242, "Economistas de instituições financeiras ajustaram … vem a conta caiu em 0,05 ponto, a 4,0 por cento.", callee: ƒ, Symbol(Symbol.iterator): ƒ]
ARGUMENTS Arguments(5) ["de", "d", "e", 1281, "Economistas de instituições financeiras ajustaram … vem a conta caiu em 0,05 ponto, a 4,0 por cento.", callee: ƒ, Symbol(Symbol.iterator): ƒ]

"Economistas undefined instituições financeiras ajustaram sua projeção para a inflação neste ano para cima pela primeira vez após 11 semanas undefined quedas na pesquisa Focus do Banco Central divulgada nesta segunda-feira, mas continuaram reduzindo a perspectiva para a economia. A alta do IPCA foi calculada agora em 3,49 por cento em 2018, 0,01 ponto percentual a mais do que na semana anterior. A conta subiu apesar undefined a prévia da inflação oficial ter acelerado menos do que o esperado em abril –o IPCA-15 subiu 0,21, o nível mais baixo para o mês em 12 anos. Para 2019, entretanto, o Focus mostrou a segunda redução seguida na projeção para a inflação, a 4 por cento undefined 4,07 por cento antes. O nível baixo undefined inflação mantém aberto o caminho para o BC realizar novo corte da Selic em maio como vem indicando, antes undefined encerrar o ciclo undefined flexibilização. Com a taxa básica undefined juros a 6,5 por cento agora, os especialistas consultados no levantamento continuam vendo corte undefined 0,25 ponto percentual em maio, com a Selic terminando 2018 a 6,25 por cento e 2019 a 8 por cento. O Top-5, grupo dos que mais acertam as previsões, também não mudou suas perpsectivas, com a Selic a 6,25 por cento este ano, mas 7,5 por cento em 2019. Para a inflação, no cenário undefined médio prazo permanece a expectativa undefined 3,56 por cento em 2018, mas para o ano que vem a conta caiu em 0,05 ponto, a 4,0 por cento."
*/



// INSERINDO MÉTODOS:

// EXEMPLO, COMO ALTERAR SUA CAPTURA PARA CAIXA ALTA:
texto4.replace(/(d)(e)/g, function(capturaTotal, d, e){
    return (d + e).toUpperCase();
});
// "Economistas DE instituições financeiras ajustaram sua projeção para a inflação neste ano para cima pela primeira vez após 11 semanas DE quedas na pesquisa Focus do Banco Central divulgada nesta segunda-feira, mas continuaram reduzindo a perspectiva para a economia. A alta do IPCA foi calculada agora em 3,49 por cento em 2018, 0,01 ponto percentual a mais do que na semana anterior. A conta subiu apesar DE a prévia da inflação oficial ter acelerado menos do que o esperado em abril –o IPCA-15 subiu 0,21, o nível mais baixo para o mês em 12 anos. Para 2019, entretanto, o Focus mostrou a segunda redução seguida na projeção para a inflação, a 4 por cento DE 4,07 por cento antes. O nível baixo DE inflação mantém aberto o caminho para o BC realizar novo corte da Selic em maio como vem indicando, antes DE encerrar o ciclo DE flexibilização. Com a taxa básica DE juros a 6,5 por cento agora, os especialistas consultados no levantamento continuam vendo corte DE 0,25 ponto percentual em maio, com a Selic terminando 2018 a 6,25 por cento e 2019 a 8 por cento. O Top-5, grupo dos que mais acertam as previsões, também não mudou suas perpsectivas, com a Selic a 6,25 por cento este ano, mas 7,5 por cento em 2019. Para a inflação, no cenário DE médio prazo permanece a expectativa DE 3,56 por cento em 2018, mas para o ano que vem a conta caiu em 0,05 ponto, a 4,0 por cento."
'Fernando'.replace(/(\w)/g, function(capturaTotal, letra){
   return letra.toUpperCase();
});
//'FERNANDO'

texto.replace(/(Michel Temer)/g, function(capturaTotal, palavra){
   return palavra.toUpperCase() + ' VIADÃO';
});

'Paulo da Silva Pamplona'.replace(/(\w)(\w)/g, function(capturaTotal, letra1, letra2){
   return letra1.toUpperCase() + letra2.toLowerCase();
});
//'PaUlo Da SiLva PaMpLoNa'





    
    
    
    
    
    
    
    
    
    
    
    
    