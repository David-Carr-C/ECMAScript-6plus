//Javascript
var phrase = "Abcdefghijklmnopqrstuvwxyz\n"+
"Que tal?";
console.group("String Old");
console.log(phrase);
console.groupEnd();

//Ecmascript 6+
var phrase2 = `Otra frase que necesitamos para dar el ejemplo de como son las nuevas funcionalidades
de ecmascript 6+`;
console.group("String New");
console.log(phrase2);
console.groupEnd();