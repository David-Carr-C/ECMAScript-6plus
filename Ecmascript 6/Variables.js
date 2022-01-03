//Javascript
if (true) {
    var myVariable = "How's it going?";         //Variable disponible de forma global
}
console.group("Var Variable");
console.log(myVariable);
console.groupEnd();

//Ecmascript 6+
if (true) {
    let mySecondVariable = "I'm doing well";    //Variable disponible en el scope actual
}
console.group("Let Variable");
//console.log(mySecondVariable); <- Error
console.groupEnd();



//Exceptions
function doFunc1() {
    var isItglobalglobal = "Javascript";
}

function doFunc2() {
    let isItLocal = "It's interesting";
}
console.group("Function Variables");
//console.log(isItglobalglobal); <- Error
//console.log(isItLocal); <- Error
console.groupEnd();