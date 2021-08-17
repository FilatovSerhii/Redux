 function getSenseOfLife(){
   return 42
 }

 console.log(getSenseOfLife())

 function getSquered(num){
return num*num
 }

 console.log(getSquered(5))
 console.log(getSquered(25));
 console.log(getSquered(3));

 function sum(firstNum, secondNum){
   return firstNum+secondNum
 }
console.log(sum(5,2))
console.log(sum(4,8, 200, 1,22))

function getMassage(age){
  console.log(`I am ${age} years old`);
}

console.log(getMassage(100));
console.log(getMassage(32));




// const mult= (firstNum, secondNum) =>firstNum*secondNum

const mult = function (firstNum, secondNum){
  return firstNum*secondNum
}
    
console.log(mult(5, 8));
console.log(mult(5, 10));
console.log(mult(5,9));

