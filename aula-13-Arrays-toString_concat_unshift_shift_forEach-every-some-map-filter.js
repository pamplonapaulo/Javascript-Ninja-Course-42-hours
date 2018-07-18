// ARRAYS:

// toString & concat
// unshift & shift
// splice & slice
// for each, every, some
// map & filter



// ARRAYS  *********************************************

// Não existem arrays de verdade. Eles são objetos 'numeráveis'. As keys, no caso, são implícitas, não estão aparentes.

var arr = [ 'a', 'b', 'c' ];
// undefined

arr[0];
// 'a'

arr.length
// 3

arr.push('d');
// 3    // ele inclui o parâmetro passado no array, mas retorna o length do array.

arr;
// [ 'a', 'b', 'c', 'd' ];


// .toString()  *********************************************

Object.toString();
// 'function Object() { [native code] }'

var obj = { a: 1, b: 2, c: 3 };
// undefined

obj.toString()
// '[object Object]'

arr
// [ 'a', 'b', 'c' ]

arr.toString()
// 'a,b,c'

arr.join(); // no caso, join() sem parâmetros (separador default: vírgula).
// 'a,b,c'

JSON.stringify(arr);
// '["a","b","c"]'


// .concat()  *********************************************

arr.concat(5);
// [ 'a', 'b', 'c', 5 ]
// MAS note que não modifica o array original:

arr
// [ 'a', 'b', 'c' ]

arr.push(3);
[ 'a', 'b', 'c', 3 ]
// Já o push modifica o array original.

// Concatenar com outro array:

arr.concat([6,7,8,9,10]);
// [ 'a', 'b', 'c', 3, 6, 7, 8, 9, 10 ]

arr;
// ["a", "b", "c", "d", 3]


// concat em arrays multidimensionais:

arr.concat([6,7,8,9,10],['a','b','c','d','e']);
// [ 'a', 'b', 'c', 3, 6, 7, 8, 9, 10, 'a', 'b', 'c', 'd', 'e' ]

arr.concat([6,7,8,9,10, ['a','b','c','d','e',]]);
// [ 'a', 'b', 'c', 3, 6, 7, 8, 9, 10, [ 'a', 'b', 'c', 'd', 'e' ] ]                     


// .unshift()  *********************************************
// Ele adiciona o item no começo do array.
// (push faz o mesmo, mas no fim.)

arr;
// ["a", "b", "c", "d", 3]


arr.unshift('zero');
// 5 // retorna o length do array.

arr;
// [ 'zero', 'a', 'b', 'c', 3 ]




// .shift()  *********************************************
// Ele remove o item no começo do array.
// (pop faz o mesmo, mas no fim.)

arr.shift();
// 'zero'

arr;
// [ 'a', 'b', 'c', 3 ]




// .slice()  *********************************************

// The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

arr
// [ 'zero', 'a', 'b', 'c', 3 ]

arr.slice(2);
// [ 'b', 'c', 3 ]
// Passing only one number, it takes returns from the index '(2)' to the last index. But the original array stays the same:
arr;
// [ 'zero', 'a', 'b', 'c', 3 ]

// Passing the two parameters:
arr.slice(1,4);
// [ 'a', 'b', 'c' ]  // It's returning from the index 1 to 3.
// ATTENTION: the last parameter means the next item's index who won't be included on the return. So you have to include the next index to get the item on the index before it.

// Parâmetros negativos!
// Kind of the same, but reverse direction.
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango", "Abacaxi", "Maça", "Abóbora"];
fruits.slice(-3, -1);
// [ "Abacaxi", "Maça" ]



// .splice()  *********************************************

// The splice() method adds/removes items to/from an array, and returns the removed item(s). This method changes the original array.

// This method modify the original array. It can be use either to include or to remove. With one or two parameters.

// O segundo parâmetro representa o número de itens que você deseja remover, a começar por aquele presente no índice passado no primeiro parâmetro.


// *************** EXEMPLO 1 PARÂMETRO ****************

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango", "Abacaxi", "Maça", "Abóbora"];

// Review slice:
fruits.slice(2)
// [ 'Lemon', 'Apple', 'Mango', 'Abacaxi', 'Maça', 'Abóbora' ]
fruits
// ["Banana", "Orange", "Lemon", "Apple", "Mango", "Abacaxi", "Maça", "Abóbora"]


// Check splice:
fruits.splice(2);
// [ 'Lemon', 'Apple', 'Mango', 'Abacaxi', 'Maça', 'Abóbora' ]
fruits
// [ 'Banana', 'Orange' ]


// *************** EXEMPLO 2 PARÂMETROS ****************

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango", "Abacaxi", "Maça", "Abóbora"];

// Review slice:
fruits.slice(2, 5);
// [ 'Lemon', 'Apple', 'Mango' ]
fruits
// ["Banana", "Orange", "Lemon", "Apple", "Mango", "Abacaxi", "Maça", "Abóbora"]


// Check splice:
fruits.splice(2, 5);
// [ 'Lemon', 'Apple', 'Mango', 'Abacaxi', 'Maça' ]
fruits
// [ 'Banana', 'Orange', 'Abóbora' ]




// *************** EXEMPLO 3+ PARÂMETROS ****************
// Com o 3o parâmetro, este será inserido no array, a partir do index informado no primeiro parâmetro.

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango", "Abacaxi", "Maça", "Abóbora"];

fruits.splice(3, 2, 'TESTE');
// [ 'Apple', 'Mango' ] // Isto é, são os 2 itens removidos.

fruits
// [ 'Banana', 'Orange', 'Lemon', 'TESTE', 'Abacaxi', 'Maça', 'Abóbora' ]

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango", "Abacaxi", "Maça", "Abóbora"];

fruits.splice(3, 4, 'A', 'B', 'C', 'D');
// REMOVIDOS: [ 'Apple', 'Mango', 'Abacaxi', 'Maça' ]
// Ou seja, remover 4 itens a partir do index 3, incluindo as letras acima.

// array modificado:
fruits
// [ 'Banana', 'Orange', 'Lemon', 'A', 'B', 'C', 'D', 'Abóbora' ]





// forEach()  *********************************************
// Mais funcional que o for comum e mais rápido nos browsers.
// Por ser um método, permite estruturas funcionais.
// Recebe uma function por parâmetro que vai iterar cada item do array.


var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango", "Abacaxi", "Maça", "Abóbora"];

// O primeiro exemplo adiante realiza o mesmo que o abaixo:

for (var i=0; i<fruits.length; i++){
    console.log(fruits[i], i, fruits);
}


// Exemplo 1: Com 3 parâmetros *****************************

fruits.forEach(function( item, index, array){
    console.log(item, index, array);
    
});
/*
Banana 0 [ 'Banana',
  'Orange',
  'Lemon',
  'Apple',
  'Mango',
  'Abacaxi',
  'Maça',
  'Abóbora' ]
Orange 1 [ 'Banana',
  'Orange',
  'Lemon',
  'Apple',
  'Mango',
  'Abacaxi',
  'Maça',
  'Abóbora' ]
Lemon 2 [ 'Banana',
  'Orange',
  'Lemon',
  'Apple',
  'Mango',
  'Abacaxi',
  'Maça',
  'Abóbora' ]
Apple 3 [ 'Banana',
  'Orange',
  'Lemon',
  'Apple',
  'Mango',
  'Abacaxi',
  'Maça',
  'Abóbora' ]
Mango 4 [ 'Banana',
  'Orange',
  'Lemon',
  'Apple',
  'Mango',
  'Abacaxi',
  'Maça',
  'Abóbora' ]
Abacaxi 5 [ 'Banana',
  'Orange',
  'Lemon',
  'Apple',
  'Mango',
  'Abacaxi',
  'Maça',
  'Abóbora' ]
Maça 6 [ 'Banana',
  'Orange',
  'Lemon',
  'Apple',
  'Mango',
  'Abacaxi',
  'Maça',
  'Abóbora' ]
Abóbora 7 [ 'Banana',
  'Orange',
  'Lemon',
  'Apple',
  'Mango',
  'Abacaxi',
  'Maça',
  'Abóbora' ]
*/


// Exemplo 2: Com 2 parâmetros *****************************

fruits.forEach(function( item, index){
    console.log(item, index);
    
});
/*
Banana 0
Orange 1
Lemon 2
Apple 3
Mango 4
Abacaxi 5
Maça 6
Abóbora 7
*/


// Exemplo 3: Com 1 parâmetro *****************************

fruits.forEach(function( item){
    console.log(item);
    
});
/*
Banana
Orange
Lemon
Apple
Mango
Abacaxi
Maça
Abóbora
*/




// Exemplo 4:  Somendo todos os números em um array ****************

var arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
var sum = 0;
arr.forEach(function( item){
    sum += item;    
});
sum;
// 45



// every()  *********************************************
// Ele é um predicato do array.
// Ele aplica uma função, cujo retorno será true ou false.
// O item do array é passado como parâmetro.
// Use-o para testar uma condição a ser aplicada em todos os itens.


var arr = [ 1, 2, 3, 4, 5, 6 ];

var todos = arr.every(function(item){
    console.log(item);
    return item < 2;
});
// 1
// 2
console.log(todos);
// false

var todos = arr.every(function(item){
    console.log(item);
    return item < 6;
});
// 1
// 2
// 3
// 4
// 5
// 6
console.log(todos);
// true

// Apenas retornará true se o staetment dentro do loop for true para todos os itens.



// some()  *********************************************
// Seria o mesmo que acima, mas bastando qualquer/algum item ter o match com a condição para que o loop retorne true.

var arr = [ 1, 2, 3, 4, 5, 6 ];

var alguns = arr.some(function(item){
    console.log(item);
    return item < 2;
});
// 1
// 2
console.log(alguns);
// true






// map()  *********************************************
// Percorre todos os elementos do array de uma forma que dispensa o FOR ou o ForEACH.

var arr = [ 1, 2, 3, 4, 5, 6 ];
var mapa = arr.map(function(item, index, array){
    return item + 10;
});
console.log(arr, mapa);
// [ 1, 2, 3, 4, 5, 6 ] [ 11, 12, 13, 14, 15, 16 ]


var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango", "Abacaxi", "Maça", "Abóbora"];
var mapa = fruits.map(function(item, index, array){
    return { index: index, item: item } ;
});
console.log(mapa);
/*
[ { index: 0, item: 'Banana' },
  { index: 1, item: 'Orange' },
  { index: 2, item: 'Lemon' },
  { index: 3, item: 'Apple' },
  { index: 4, item: 'Mango' },
  { index: 5, item: 'Abacaxi' },
  { index: 6, item: 'Maça' },
  { index: 7, item: 'Abóbora' } ]
*/

// MAP X FOR EACH: diferenças!

// "O map já te retorna o array, o for each você precisa iterar o array"
// TESTE (Será que Leonardo Daciuk está certo?):
var mapa2 = fruits.forEach(function(item, index, array){
    return { index: index, item: item } ;
});
console.log(mapa2);
// undefined
// EXATO !!!! NÃO FUNCIONA IGUAL MAP! PARABÉNS DACIUK!

// Como poderíamos obter o mesmo que o map, então, via for each?
// Temos que apelar para PUSH:

var newArr = [];
fruits.forEach(function(item, index, array){
    newArr.push({ index: index, item: item })
});
console.log('newArr: ');
console.log( newArr );
/*
[ { index: 0, item: 'Banana' },
  { index: 1, item: 'Orange' },
  { index: 2, item: 'Lemon' },
  { index: 3, item: 'Apple' },
  { index: 4, item: 'Mango' },
  { index: 5, item: 'Abacaxi' },
  { index: 6, item: 'Maça' },
  { index: 7, item: 'Abóbora' } ]
*/
// Ou seja, use o FOR EACH quando quiseres iterar pelo array e fazer qualquer outra ação.
// E use o map quando iterar diretamente dentro do array, mas gerando um novo array para você.



// filter()  ******************************************

var arr = [ 1, 2, 3, 4, 5, 6 ];
var filtro = arr.filter(function(item, index, array){
    return item > 2;
});
console.log(filtro);
// [ 3, 4, 5, 6 ]





// Encadeando mais de um método! ***********************************


// MAP + FILTER:

var arr = [ 1, 2, 3, 4, 5, 6 ];
var mapa4 = arr.map(function(item){
    return item + 10;
});
var filtro = mapa4.filter(function(item){
    return item > 13;
});
console.log(filtro);
// [ 14, 15, 16 ]


console.log(arr, mapa4, filtro);
// [ 1, 2, 3, 4, 5, 6 ] [ 11, 12, 13, 14, 15, 16 ] [ 14, 15, 16 ]


// REDUZIDO:
var doisMethods = arr.map(function(item){
    return item + 10;
}).filter(function(item){
    return item > 13;
});
console.log(doisMethods);
// [ 14, 15, 16 ]















