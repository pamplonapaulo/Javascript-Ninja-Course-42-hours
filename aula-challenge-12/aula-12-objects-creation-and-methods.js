// Object Creation & Methods, Herança, Array Methods



// OBJECTS

// A saber, recapitulando, os objetos são:

// 1.   MUTÁVEIS

// 2.   MANIPULADOS POR REFERÊNCIA


// Exemplo:

var obj = {
    prop1: 'prop1',
    prop2: 'prop2'
}

var obj2 = {
    prop1: 'prop1',
    prop2: 'prop2'
}

// Obs: Note que eles têm propriedades iguais.

// Agora vamos modificar uma propriedade...

obj.prop1 = 'propriedade 1';
// undefined
obj;
// { prop1: 'propriedade 1', prop2: 'prop2' }
delete obj.prop1
// true
obj
// { prop2: 'prop2' }
obj.prop1 = 'prop1';
// 'prop1'
obj
// { prop2: 'prop2', prop1: 'prop1' }

// Objetos, arrays e funções são mutáveis.

// VALORES LITERAIS NÃO SÃO MUTÁVEIS !!!
var name = 'fernando';
// undefined
name
// 'fernando'


// MANIPULADOS POR REFERÊNCIA

// Cada objeto que eu crio, é um objeto diferente.
// Exemplo:

obj = { prop2: 'prop2', prop1: 'prop1' };
// undefined

obj2 = { prop2: 'prop2', prop1: 'prop1' };
// undefined

// Objetos não serão considerados iguais pois possuem diferentes referências. Teste:

obj === obj2
// false

// CÓPIAS:

var objCopy = obj;
// undefined

objCopy
// { prop2: 'prop2', prop1: 'prop1' }

obj
// { prop2: 'prop2', prop1: 'prop1' }

objCopy === obj;
// true

// MODIFICAÇÕES EM CÓPIAS

objCopy.prop1
// 'prop1'

objCopy.prop1 = 'propriedade do objeto copy'
// 'propriedade do objeto copy'

objCopy
// { prop2: 'prop2', prop1: 'propriedade do objeto copy' }

obj
// { prop2: 'prop2', prop1: 'propriedade do objeto copy' }
// A-HÁ!! NOTE ACIMA QUE A REFERÊNCIA ORIGINAL FOI MODIFICADA TAMBÉM!!!

// Os objetos terão valores booleanos TRUE se forem referência um do outro, e serão também mutuamente modificavéis.









// CRIAÇÃO DE OBJETOS *********************************************




// 1. Literal
// método literal é mais rápido que via 'constructor'.
var obj = {}


// 2. Constructor ('new')
var obj3 = new Object();
// undefined
obj3
// { }


// 3. Object.create()
// 'Object' é uma palavra-chave do JS, uma função nativa, que possui a propriedade 'create'.

var objeto = Object.create();

// object.prototype
// um protótipo do objeto que está sendo criado. O objeto criado herda essas características de seu protótipo.

// Encadeamento de protótipos: herança de objetos.

Object.prototype
// {}

// Cad objeto criado herda de seu próprio protótipo. Temos outros tipos de objetos em JS

String
// [ Function: String ]
Array
// [ Function: Array ]
Date
// [ Function: Date ]
RegExp
// [ Function: RegExp ]

// Todos os casos acima herdam propriedades do Object.prototype


var obj = { x: 1, y: 2 };
// undefined
var obj2 = Object.create(obj);
// undefined
// ELE VAI HERDAR PROPS DE 'obj', mas não é uma referência.

obj2
// {}
obj2.prototype
// undefined
obj2.x
// 1
obj2.y
// 2

// O objeto PAI não muda o seu valor quando o objeto FILHO muda algum valor:

obj2.x = 'lala'; // sobrescrevendo a propriedade X
// 'lala'
obj2.x
// 'lala'
obj.x
// 1
obj2
// { x: 'lala'}
obj
// { x: 1, y: 2 }

// Ainda que o objeto criado herde as propriedades, elas não aparecem  visualmente se você chama o objeto sem especificar a propriedade - mas elas estão lá.


obj = Object.create({})
// {}
obj
// {}
Object.prototype
// {}
obj.toString()
// '[object Object]'

// Se vc o cria a partir de outro obj que tem outras prop, então ele as herda:
obj2.x
// 1
obj2.y
// 2
obj = Object.create(obj)
// {}
obj2
// {}
obj2.x
// 1
obj2.y
// 2

// Essas propriedades herdadas são como métodos que podem ou não ser invocados. Elas não conflitam diretamente com novas propriedades criadas. Elas estão quase que 'ocultas', porém disponíveis.

var obj3 = Object.create(obj2)
// undefined
obj3.x
// 1
obj3.y
// 2
// Acima, note que a herança de 'obj' continua sendo transmitida.
// mas os objetos não são iguais:
obj3 === obj2
// false

// Mas as prop herdadas podem ser acessadas. Exemplo:

for (var prop in obj2) {
    console.log(prop)
}
// x (no console do browser, mas não no NODE)
// y (no console do browser, mas não no NODE)

obj.hasOwnProperty('x');
// true
obj2.hasOwnProperty('x');
// false
obj3.hasOwnProperty('x');
// false


/*
Na verdade, o Object.create é usado pra substituir o construtor.. ele espera sempre um objeto protótipo pra construir o novo objeto =)

Então as propriedades do objeto usado como construtor não aparecem na instância (que é o novo objeto criado), pois é como se essas propriedades fizessem parte de um "prototype".

Pra ser sincero, acho que eu não dei bons exemplos quando mostrei o Object.create =)

A ideia dele seria basicamente substituir o construtor. Nesse caso, valores que ficam "pendurados" no prototype normalmente são métodos, onde vc consegue reaproveitar a referência =)



tudo o que fica no prototype de um construtor é compartilhado com as instâncias criadas.. se a instância tem uma propriedade com o mesmo nome, então essa propriedade da instância é usada no lugar do prototype, mas o prototype nunca é sobrescrito pela instância xD

*/

var obj = { a: 1 };
var obj2 = Object.create(obj);
obj2.a; // 1
obj2.a = 2;
obj2.a; // 2
delete obj2.a;
obj2.a; // 1

/*

veja que, se criar uma propriedade a no obj2, ela é usada no lugar do a do obj, o qual foi usado pra criar o obj2 agora, se eu deletar a propriedade a de obj2, ele volta a usar o a de obj, que seria o seu prototype 
*/ 




// Object.keys *********************************************

// Retorna um array com as propriedades do objeto.
// Interessante para fazer coisas que só array faz, como contar as propriedades de um objeto.


obj3
// {}

obj2
// { x: 2 }

obj
// { x: 1, y: 2 }

Object.keys(obj)
// [ 'x', 'y' ]

// Exemplo de usos de array: length

Object.keys(obj).length
// 2


// obj.isPrototypeOf (otherObj) *************************************

// Verifica se aquele objeto é protótipo de algum outro.

obj.isPrototypeOf(obj2);
// true
// (ou seja, obj é protótipo de obj2)

var obj3 = Object.create(obj2);
obj.isPrototypeOf(obj3);
// true

// (ou seja, obj TAMBÉM é protótipo de obj3, pois ele segue herdando-o via obj2, ainda que indiretamente. Dá na mesma.)



// JSON.stringify() *******************************
// Torna o objeto uma string, ou fazer parse.

JSON.stringify(obj)
// '{"x":1,"y":2}'

// Mas o obj em si continua sendo um objeto normal:
obj
// { x: 1, y: 2 }

var str = JSON.stringify(obj);
// undefined
str
// '{"x":1,"y":2}'
// Como se vê acima, você pode jogar essa string dentro de uma outra var.

// JSON.parse() *******************************
// Torna a string novamente um objeto.


JSON.parse(str)
// { x: 1, y: 2 }


// JSON documentação:
// JavaScript Object Notation
// http://json.org/json2.js



// Arrays - Parte 2 *******************************

var arr = [];
// undefined
arr[0] = 10;
// 10
arr
// [ 10 ]
arr[1] = 5;
// 5
arr[2] = 'oito';
// 'oito'
arr
// [ 10, 5, 'oito' ]
arr[12] = 'doze';
// 'doze'
arr
// [ 10, 5, 'oito', , , , , , , , , , 'doze' ]
// [ 10, 5, 'oito', <9 empty items>, 'doze' ] (NODE display)
arr[11]
// undefined

// Para adicionar no final do array, sem usar o índice:
arr.push('treze')
// 14 (apenas dizendo que há 14 itens dentro do array)
arr
// [ 10, 5, 'oito', <9 empty items>, 'doze', 'treze' ]


// Removendo itens do final do array.
arr.pop()
// 'treze' (removido o item 'treze')
// [ 10, 5, 'oito', <9 empty items>, 'doze' ]

var last = arr.pop();
// a var last receberá o item removido do array.
last
// 'doze'
arr
// [ 10, 5, 'oito', <9 empty items> ]

// join()

var jantar = [ 'arroz', 'feijao', 'lasanha'];
// undefined
jantar
// [ 'arroz', 'feijao', 'lasanha' ]

jantar.join()
// 'arroz,feijao,lasanha'

// Aqui vale notar que, diferente de 'JSON.stringify', o join() não carrega os brackets e as aspas de cada item. 
// Mas em comum os dois têm o fato de não alterarem o objeto/array original. Permanecerá o mesmo. Se você quiser, jogue a string criada em uma variável.

// no método join(), você passa por parâmetro o separador que deseja. Por default, caso não seja preenchido, o método utilizará vírgulas.  
// Exemplo de separador 'espaço em branco':
jantar.join(' ')
// 'arroz feijao lasanha'

jantar.join('--- ')
// 'arroz--- feijao--- lasanha'



// reverse();
jantar.reverse();
// [ 'lasanha', 'feijao', 'arroz' ]
// ATENÇÃO: O reverse() tem efeito colateral, isto é, ele MODIFICA o array principal.

// sort();
// Ordena por ordem alfabética.
jantar.sort()
// [ 'arroz', 'feijao', 'lasanha' ]
jantar.push('ervilhas')
// 4
jantar
// [ 'arroz', 'feijao', 'lasanha', 'ervilhas' ]
jantar.sort()
// [ 'arroz', 'ervilhas', 'feijao', 'lasanha' ]
// ATENÇÃO: O sort() tem efeito colateral, isto é, ele MODIFICA o array principal.











