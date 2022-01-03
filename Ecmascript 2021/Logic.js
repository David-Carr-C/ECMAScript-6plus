//Ecmascript 12+
let itIsTrue = true;
let itIsFalse = false;
console.log(itIsTrue &&= itIsFalse);
console.log(itIsTrue);

let itIsTrue2 = true;
let itIsFalse2 = false;
console.log(itIsTrue2 ||= itIsFalse2);
console.log(itIsTrue2);

let itIsTrue3 = undefined;
let itIsFalse3 = false;
console.log(itIsTrue3 ??= itIsFalse3);
console.log(itIsTrue3);