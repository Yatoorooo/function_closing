'use strict';

function value(){
  let sum = 0;
  function result(num){
   sum += num;
   return sum
  }
    return result;
};

const resultFunction = value();
console.log(resultFunction(3));

console.log(resultFunction(5));
console.log(resultFunction(20));