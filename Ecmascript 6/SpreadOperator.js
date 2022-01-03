//Ecmascript 6+
var team1 = ["David", "Daniela", "Oscar", "Julian"];
var team2 = ["Valeria", "Camila"];

var edu = ["Anna",...team1,...team2];
console.group("Spread Operator")
console.log(edu);
while (edu.length > 0) {
    console.log(edu.pop());
}
console.groupEnd();