'use strict';

var should = require('chai').should();
var reverseString = require('../src/reverse.js');

describe('Reverse', function(){
	it('should reverse ab to ba', function(){
		reverseString('ab').should.equal('ba');
	});
	it('should reverse abc to cba', function(){
		reverseString('abc').should.equal('cba');
	});
	it('should revrse hello to olleh', function(){
		reverseString('hello').should.equal('olleh');
	});
});