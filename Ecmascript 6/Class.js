//Ecmascript 6+
class calculator {
    constructor() {
        this.isAGlobalScope = "Yes, it is";
        this.anotherVariable = true;
        this.valueA = 2;
        this.valueB = 8;
    }

    suma(valueA,valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc);
console.log(calc.suma(4,4)); //we need the '(' and ')' in calc.suma