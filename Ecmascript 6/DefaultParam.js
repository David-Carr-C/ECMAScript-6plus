//Javascript
function oldFunc(name,age,country) {
    var name = name || "David";
    var age =  age || 19;
    var country = country || "idk";
    console.log(name,age,country);
}
console.group("Datos-Default Old-Func");
oldFunc(/*"Hola",1,"Que tal"*/)
console.groupEnd();

//Ecmascript 6+
function newFunc(name = "David", age = 19, country = "idk") {
    console.log(name,age,country);
}
console.group("Datos-Default New-Func");
oldFunc("Diana", 20, "USA");
console.groupEnd();