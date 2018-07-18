// Outros tipos de Loops:       DO / WHILE

// WHILE:
// Este laço realiza a verificação da condição antes de entrar no laço. Se for falso, nem entra no laço.

// DO / WHILE:
// Irá realizar o laço uma vez antes de verificar a condição. Mesmoq ue a condição seja falsa, portanto, haverá a execução 1x.

// EXEMPLO 1:
var counter = 1;
while( counter < 10) {
    console.log(counter++);
}
console.log('counter não é mais menor que 10');
console.log(' ');
// RESULADO:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// counter não é mais menor que 10
// COMENTÁRIO: Assim que counter ficou igual a 10, ele já não atende mais a condição e deixa de entrar no laço. Portanto, não há o display deste último valor, ainda que a variável, ao fim, tenha atingido o valor 10.


// EXEMPLO 2:
var counter2 = 9;
while( counter2 < 10) {
    console.log(counter2++);
}
console.log('counter2 não é mais menor que 10')
console.log(' ')
// RESULADO:
// 9
// counter não é mais menor que 10


// EXEMPLO 3:
var counter3 = 10;
while( counter3 < 10) {
    console.log(counter3++);
}
console.log('counter3 não é mais menor que 10')
console.log(' ')
// RESULADO:
// counter não é mais menor que 10




// DO / WHILE
// EXEMPLO 1:
var counter = 1;
do {
    console.log(counter++);
}
while ( counter < 10);
console.log('counter não é mais menor que 10')
console.log(' ')
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// counter não é mais menor que 10

// EXEMPLO 2:
var counter2 = 9;
do {
    console.log(counter2++);
}
while ( counter2 < 10);
console.log('counter não é mais menor que 10')
console.log(' ')
// 9
// counter não é mais menor que 10

// EXEMPLO 3:
var counter3 = 10;
do {
    console.log(counter3++);
}
while ( counter3 < 10);
console.log('counter não é mais menor que 10')
console.log(' ')
// 9
// counter não é mais menor que 10

// COMENTÁRIO: É no último caso acima que fica mais claro para você que, mesmo fora da condição, o DO / WHILE irá permitir a execução do laço no mínimo 1x. Ele roda o DO antes de conferir o WHILE.





// FOR:
// SÓ PRA RECAPITULAR:
for ( var i = 0; i < 10; i++) {
    console.log(i);
}
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9



// FOR / IN:
// Serve para você percorrer propriedades de um objeto.


// EXEMPLO 1:
var car = {
    brand:  'Ford',
    model:  'Ka',
    ano:    '2013'
}

for ( var prop in car) {
    console.log(prop);
}
// brand
// model
// ano

// ATENÇÃO: FOR / IN é mais LENTO que o FOR normal. Usar com cautela!


// Mais usos para o IN nas próximas lições! Alguns exemplos:
console.log('brand' in car);
// true
// OU SEJA: existe uma propriedade 'brand' dentro do objeto car.

console.log('Ford' in car);
// false
// OU SEJA: dessa forma ele não vê o conteúdo da propriedade.

// EXEMPLO 2:
for ( var prop in car) {
    console.log(car[prop]);
}
// Ford
// Ka
// 2013
// OU SEJA: dessa forma puxamos o conteúdo das propriedades.

// SALTOS

// Instruções que você usa para pular algumas partes do teu código. Um dos saltos já conhecidos por nós é o 'RETURN'.

//Ex:
function myFunction(){
    var number = 10;
    if ( number === 10 ) {
        return true;
    }
    return false;
}
console.log(myFunction());
// true

function myFunction(){
    var number = 10;
    if ( number === 10 ) {
        console.log('primeiro console');
    }
    console.log('segundo console');
}
console.log(myFunction());
// 'primeiro console'
// 'segundo console'

// OU SEJA: return força o código a pular o próximo bloco da function, num caso de condicional.



// BREAK
// E, como visto em SWITCH, BREAK também interrompe e realiza o salto. Experimente abaixo comentar e descomentar o comando BREAK para ver os dois comportamentos.
var number = 1;
switch (number){
    case 1:
        console.log('1');
        //break;
    case 2:
        console.log('2');
        //break;
    case 10:
        console.log('10');
        //break;
    default:
        console.log('default');
}
console.log('fim do switch');

// Utilizando o BREAK dentro de uma instrução FOR:
// Normalemnte você o utilizará em laços ou em switch.

for (var i = 0; i < 10; i++){
    if (i === 5) {
        break;
    }
    console.log( i );
}
console.log('fim do for');
// 0
// 1
// 2
// 3
// 4
// fim do for

// DICA: É uma boa usar o BREAK para parar uma varredura em um array muito longo, economizando memória. Exemplo:

var arr = [1,2,3,4,5,6,7,8,9];

for ( var i = 0; i <= arr.length; i++){
    console.log(i);
}
console.log('fim do for no array de ', arr.length);


for ( var i = 0; i <= arr.length; i++){
    if (i === 5) {
        break;
    }
    console.log(i);
}
console.log('fim do for no array de ', arr.length);

// CONTINUE

for ( var i = 0; i <= arr.length; i++){
    if (i === 5) {
        continue;
    }
    // quando o código lê continue, ele não executará o bloco seguinte, que no caso é console.log(i). Dessa forma, a contagem no console.log terá pulado o número 5 no console aqui abaixo:
    console.log(i);
}
console.log('note o número pulado ', arr.length);

// Um exemplo mais legal aqui!
// Queremos que mostre apenas os números pares:

for ( var i = 0; i <= arr.length; i++){
    if (i % 2 === 0) {
        continue;
    }
    // quando o código lê continue, ele não executará o bloco seguinte, que no caso é console.log(i). Dessa forma, a contagem no console.log terá pulado o número 5 no console aqui abaixo:
    console.log(i);
}
console.log('números ímpares contidos no array de ', arr.length);

for ( var i = 0; i <= arr.length; i++){
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}
console.log('números pares contidos no array de ', arr.length);








