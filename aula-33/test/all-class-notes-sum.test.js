

// BEHAVIOR DRIVEN DEVELOPMENT:
/*
'use strict';

var expect = require('chai').expect;
var sum = require('../src/sum');

describe('# SUM', function(){
    it('Expecting SUM to be a function', function(){
        expect(sum).to.be.a('function');
    });    
    
    it('Should SUM return 10 when I pass 1 and 9', function(){
       expect(sum(1, 9)).to.be.equal(10); 
    });
    
    it('Should SUM return 5 when I pass 2 and 3', function(){
        expect(sum(2, 3)).to.be.equal(5);
    });
    
    it('Should SUM return an error if receives just one parameter', function() {
        //console.log(sum(1));
        expect(sum(1)).to.be.an('error');
    });
    
    it('Should SUM return an error if parameter is not a number', function() {
        expect(sum('a', 'b')).to.be.an('error');
    });
    
});

TEST DRIVEN DEVELOPMENT:

describe('# SUM', function(){
    
    it('Assert', function(){
        var assert = require('assert');
        
        //TDD:
        //assert.equal(sum(20, 30), 50, 'Message');
        
        // E o resultado esperado pode vir na forma de string também: '50' (ele não verifica o tipo)
        //assert.equal(sum(20, 30), '50', 'Message');
        
        // Mas caso queiras testar o tipo: strictEqual
        assert.strictEqual(sum(20, 30), '50', 'Message');
        // teremos erro nesse caso.
        
        
        //BDD:
        //expect(sum(20, 30)).to.be.equal(50);
    });
});

Documentações:

- Mocha
- Chai
- Assert

https://nodejs.org/en/docs/


assert.deepEqual (==)
Para várias camadas de um objeto, com profundidade.

assert.strictDeepEqual (===)

assert.equal

assert.fail


Chai Assertion Library
chaijs.com/api/bdd

Chai expect/should:

=> utiliza o formato Formato BDD

expect(sum(1, 9)).to.be.equal(10); 
na verdade, pode ser assim:
expect(sum(1, 9)).equal(10); 

Tem tb Chai assert, confira na documentação.

https://mochajs.org

before , after, beforeEach, afterEach:

describe('# SUM', function(){
    before(function(){
        console.log('before the test');
    });
    after(function(){
        console.log('after the test');
    });
    beforeEach(function(){
        console.log('before each test');
    });
    afterEach(function(){
        console.log('after each test');
    });
});        

Code Coverage:

Quanto do nosso código está coberto por código?

Como saber a quantidade do c[odigo que de fato está coberta pelos testes?

Resposta: Módulo Istanbul

Istanbul | Instalação via Terminal:
[ sudo ] npm install -g istanbul

Istanbul | Execução via Terminal:
cd /path/to/your/source/root
istanbul cover test/sum.test.js

https://www.npmjs.com/package/istanbul

FINAL CODE:
*/
'use strict';

var expect = require('chai').expect;
var sum = require('../src/sum');

describe('# SUM', function(){
    
    before(function(){
        console.log('before the test');
    });
    after(function(){
        console.log('after the test');
    });
    beforeEach(function(){
        console.log('before each test');
    });
    afterEach(function(){
        console.log('after each test');
    });
    
    it('Expecting SUM to be a function', function(){
        expect(sum).to.be.a('function');
    });    
    
    it('Should SUM return 10 when I pass 1 and 9', function(){
       expect(sum(1, 9)).to.be.equal(10); 
    });
    
    it('Should SUM return 5 when I pass 2 and 3', function(){
        expect(sum(2, 3)).to.be.equal(5);
    });
    
    it('Should SUM return an error if receives just one parameter', function() {
        //console.log(sum(1));
        expect(sum(1)).to.be.an('error');
    });
    
    it('Should SUM return an error if parameter is not a number', function() {
        expect(sum('a', 'b')).to.be.an('error');
    });
    
});