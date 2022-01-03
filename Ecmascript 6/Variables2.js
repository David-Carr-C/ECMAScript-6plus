//Ecmascript 6+

//Case 1
const nam3 = "David";
nam3 = "Daniela"; // <- Error
//Case 2
var hola = "hi";
const hola = 12; // <- Error
//Case 3
const isItConstAge = 22;
const isItConstAge = "Carrillo"; // <- Error
//Case 4
const myVariable = "David Carrillo";
var myVariable = 19; // <- Error

console.group("Const Variable");
console.log(nam3);
console.log(hola);
console.log(isItConstAge);
console.log(myVariable);
console.groupEnd();