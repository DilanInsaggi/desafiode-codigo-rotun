
function hello() {
    console.log("hello");
}
hello();
console.log("dojo");
/*
funcion   decir hello 
console.log  =  hello
*/

function hello() {
   console.log('hello');
   return 15;
}
var result = hello();
console.log('result is', result);
/*
funcion decir hello 
variable   =   15 
console.log =('result is')
   
*/

function numPlus(num) {
   console.log('num is' + num);
   return num+15;
}
var result = numPlus(3);
console.log('result is', result);
/* funcion numplus
variable    return 
return     num+15  */   

var num = 15;
console.log(num);
function logAndReturn(num2){
  console.log(num2);   
  return num2;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);
/* 
funcion   logAndReturn 
variable
console.log(result);
console.log(num)
console.log(num2)
*/

var num = 15;
console.log(num);
function timesTwo(num2){
  console.log(num2);   
  return num2*2;
}
var result = timesTwo(10);
console.log(result);
console.log(num);
/*funcion times two 
console.log(result)
console.log(num)
var num 15 
*/

function timesTwoAgain(num) {
   console.log('num is', num);
   var y = num*2;
   return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('result is', result);
/*
funcion timesTwoAgain
console.log('num is',num);
var y = num*2;
*/

function sumNums(num1, num2) {  
   return num1+num2;
}
console.log(sumNums(2,3))
console.log(sumNums(3,5))
/*funcion sumNums
console.log (sumNums(2,3))
console.log  (sumNums(2,5))
*/

function printSumNums(num1, num2) {
   console.log(num1);   
   return num1+num2;
}
console.log(printSumNums(2,3))
console.log(printSumNums(3,5))
/*funcion printsumNums
console.log(printSumNus)   (2,3)   (3,5)
*/
function sumNums(num1, num2) {
   var sum = num1 + num2;
   console.log('sum is', sum);
   return sum;
}
var result = sumNums(2,3) + sumNums(3,5);
console.log('result is', result)

/*
funcion sumNus 
var sum = num1 + num2;
console.log('sum is',sun);
var result = sumNums(2,3) + sumNums(3,5);
console.log('result is', result)
*/

function sumNums(num1, num2) {
   var sum = num1 + num2;
   console.log('sum is', sum);
   return sum;
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums)