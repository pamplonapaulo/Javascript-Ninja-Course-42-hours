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