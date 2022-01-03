//Javascript
var nam3 = "David";
var age = 19;

obj = {nam3: nam3, age: age };
console.group("Objetos-Asignacion Old");
console.log(obj);
console.groupEnd();

//Ecmascript 6+
let apellido = "Carrillo";
let edad = 19;

obj2 = {apellido,edad};
console.group("Objetos-Asignacion New");
console.log(obj2);
console.groupEnd();