//Ecmascript 6+
const names = [
    {
        name: "David",
        age: 19,
    },
    {
        name: "Daniela",
        age: 19
    },
    {
        name: "Anna",
        age: 20
    }
]

//Old
console.group("Expresive-Func Old - Anonym Func")
let listName = names.map(function (item){
    console.log(item.name);
    return item.name;
});

console.log(listName);
console.groupEnd();

//New
console.group("Expresive-func New - Arrow Func");
let listOfNames = names.map(item => { 
    console.log(item.name);
    return item.name;
    }
    );
console.log(listOfNames);
console.groupEnd();

//Another example
const people = (nam3,ag3,country) => {
    console.log(nam3,ag3,country);
}

console.group("Expresive-func New - Arrow Func Example");
people("David",19,"idk");
console.groupEnd();