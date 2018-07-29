// ARRYAS - OUTROS MÉTODOS


// reduce() - reduceRight()
// indexOf() - lastIndexOf() - isArray













// REDUCE  *********************************************

// The reduce() method reduces the array to a single value.
//The reduce() method reduces the array to a single value.
//The reduce() method executes a provided function for each value of the array (from left-to-right).
//The return value of the function is stored in an accumulator (result/total).
//Note: reduce() does not execute the function for array elements without values.
// Ele não modifica o array original e também nem retorna um array.
// Primeiro parâmetro é todo o valor acumulado:


Syntax
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
/*
Parameter
function(total,currentValue, index,arr)
Required. A function to be run for each element in the array.

Function arguments:

total
Required. The initialValue, or the previously returned value of the function

currentValue
Required. The value of the current element

currentIndex
Optional. The array index of the current element

arr
Optional. The array object the current element belongs to

initialValue
Optional. A value to be passed to the function as the initial value

*/

var arr = [ 1, 2, 3, 4, 5 ];

var reduce = arr.reduce(function(acumulado, valorAtual, index, array){
    return acumulado + valorAtual;
}, 0);
// ATENÇÃO: o zero acima, no fim da função, diz respeito ao primeiro parâmetro: 'acumulado'.

console.log(reduce);
// 15
// Traduzindo:
/*
acumulado + valorAtual
    
1ª entrada: 0 + 1 = 1
2ª entrada: 1 + 2 = 3
3ª entrada: 3 + 3 = 6
4ª entrada: 6 + 4 = 10
5ª entrada: 10 + 5 = 15
*/

var arrString = [ 'p', 'a', 'u', 'l', 'o']; // VAI CONCATENAR !

var reduce = arrString.reduce(function(acumulado, valorAtual, index, array){
    return acumulado + valorAtual;
});
console.log(reduce);
// paulo

// Every e some fazem quase a mesma coisa, só que retornam true or false. E eles podem talvez não pasar por todo o array.



// REDUCE RIGHT  *********************************************

// É a mesma coisa, porém da direita para a esquerda.
var arrString = [ 'p', 'a', 'u', 'l', 'o']; // VAI CONCATENAR !

var reduceDireita = arrString.reduceRight(function(acumulado, valorAtual, index, array){
    return acumulado + valorAtual;
});
console.log(reduceDireita);
// oluap



// INDEX OF  *********************************************

// Procura se um valor existe no índice do array.
// Exemplo:
var arr = [ 1, 2, 3, 4, 5 ];
console.log(arr.indexOf(4)); // Existe o item 4 em qual endex?
// 3
// Ou seja, 3 é o index do item 4
// Se o item não existe no array, ele retorna -1. Ex:

console.log(arr.indexOf('p'));
// -1

// com dois parêmetros:
// o segundo parâmetro representa a posição na qual você deseja começar a percorrer o array.
console.log(arr.indexOf(4,4));
// -1 (ou seja, a partir do index 4 não encontra-se nenhum item '4');

console.log(arr.indexOf(3,2));
// 2
2

// Como perguntar se algo é true ou false?
var arrString = [ 'p', 'a', 'u', 'l', 'o']; 
console.log(arrString.indexOf(4,4) > -1);
// false

// Ou seja, se o resultado do indexOf for -1, -1 não é maior que -1, portanto a resposta é false.
console.log(arrString.indexOf('l',3) > -1);
// true



// LAST INDEX OF  *********************************************
/*

The lastIndexOf() method returns the position of the last occurrence of a specified value in a string.
Note: The string is searched from the end to the beginning, but returns the index starting at the beginning, at position 0.
This method returns -1 if the value to search for never occurs.
Note: The lastIndexOf() method is case sensitive!

*/
// o mesmo que indexOf, porém procura a partir do fim, até o início. Mas a numeração de cada índice permanece a mesma.

var arrString = [ 'p', 'a', 'u', 'l', 'a'];

console.log( arrString.lastIndexOf('a') );    // lastIndexOf
// 4
console.log( arrString.indexOf('a') );        // indexOf
// 1



var arrString = [ 'D', 'a', 'b', 'j', 'c', 'i', 'u', 'k' ]; 
console.log( arrString.lastIndexOf('k', 3) );
// -1
console.log( arrString.indexOf('k', 3) );
// 7






// IS ARRAY  *********************************************

// Distingue com precisão um array de um objeto, ao contrário do 'typeof'. Typeof é adequado para distinguir apenas valores primitivos.

// Exemplos:

var arrString = [ 'D', 'a', 'b', 'j', 'c', 'i', 'u', 'k' ]; 
console.log( Array.isArray(arrString) );
// true

console.log( Array.isArray({}) );       // um objeto no parâmetro.
// false

console.log( Array.isArray([]) );       // um aray vazio.
// true

console.log( typeof arrString );        // typeof teste.
// object











