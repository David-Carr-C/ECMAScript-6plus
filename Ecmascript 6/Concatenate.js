//Javascript
var hello = "Hello";
var world = "world";
var phrase = hello + ", " +world;
console.group("Concatenate Old");
console.log(phrase);
console.groupEnd();

//Ecmascript 6+
let newPhrase = `${hello}, ${world}`;
console.group("Concatenate New");
console.log(newPhrase);
console.groupEnd();