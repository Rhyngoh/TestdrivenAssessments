'use strict';

var should = require('chai').should(),
  titlize = function(string){
    var array = string.split(" ");
    var tempArray = [];
    var nameArray = [];
    if(array[0] === "mr" || array[0] === "mrs"){
      tempArray = array[0].split("");
      tempArray[0] = tempArray[0].toUpperCase();
      tempArray.splice(tempArray.length, 0, ". ");
      
    }
    nameArray = array[1].split("");
    nameArray[0] = nameArray[0].toUpperCase();
    array[1] = nameArray;
    var newArray = tempArray.concat(array[1]);
    return newArray.join("");
  }
  /*disemvowel = function(string){
    var array = string.split("");
    for (var i = 0; i < array.length; i ++){
      if(array[i] === "a" || array[i] === "e" || array[i] === "i" || array[i] === "o" || array[i] === "u"){
        array.splice(i, 1);
      }
    }
    return array.join("");
  }*/
  /*const disemvowel = ((str) => {
    if(typeof str === "number")
      return String(str);
    else
      return str.replace(/[aeiou]/ig, "")
  });*/

  /*multiply = function (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number')
      throw new Error('x or y is not a number.');
    else
      return x * y;
  };

describe('Multiply', function () {
  it('should multiply properly when passed numbers', function () {
    multiply(2, 4).should.equal(8);
  });

  it('should throw when not passed numbers', function () {
    (function() { multiply(2, "4") }).should.throw(Error);
  });
});
*/

/*describe('Disemvowel', function () {
  it('should return a string with no vowels', function () {
    disemvowel("Bobert").should.equal("Bbrt");
  });

  it('should return a string with no vowels', function () {
    disemvowel("Steve").should.equal("Stv");
  });

  it('should return a string with no vowels', function () {
    disemvowel("Steve loves the booty").should.equal("Stv lvs th bty");
  });
});*/
describe("Titlize", function(){
  it("should return a titled string", function(){
    titlize("mr steve").should.equal("Mr. Steve");
  });
  it("should return a titled string", function(){
    titlize("mrs june").should.equal("Mrs. June");
  });
  it("should return a titled string", function(){
    titlize("mrs junes").should.equal("Mrs. Junes");
  });
})