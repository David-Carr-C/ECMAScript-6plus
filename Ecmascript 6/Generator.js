//Ecmascript 6+
function* greeting() {
    if (true) {
        yield "Hello, this is true";
    }
    if (true) {
        yield "and What's up?"
    }
}
console.group("Func().next().value");//No se guarda el yield/ el avance cuando se
console.log(greeting().next().value);//ocupa directamente en la funcion
console.log(greeting().next().value);
console.log(greeting().next());
console.groupEnd();

console.group("const.next().value");//Se guardan los cambios y avances cuando se ocupa
const generatorGreeting = greeting();//una variable a la cual se le asigno la funcion generator

console.log(generatorGreeting.next().value); //ESTO ES IMPORTANTE
console.log(generatorGreeting.next().value);
console.log(generatorGreeting.next());//Ademas el simple hecho de no poner "value", ya hace el avance
console.groupEnd();

/*
al ocupar el generator tenemos que nos regresa un objeto, donde estan los valores "value" y "done"
{ value: 'Hello, this is true', done: false }
para acceder a las partes que nos importan, ocupamos .value como si de tomar solo esta parte del objeto
se tratase
*/