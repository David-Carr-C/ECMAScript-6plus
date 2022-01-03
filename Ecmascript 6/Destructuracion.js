//Javascript
var person = {
    nam3: "David",
    age: 19,
    country: "idk"
}
console.group("Objetos Old");
console.log(person.nam3, person.age, person.country);
console.groupEnd();

//Ecmascript 6+
console.group("Objetos New");
var {nam3,age,country} = person;
console.log(nam3,age,country);
console.groupEnd();