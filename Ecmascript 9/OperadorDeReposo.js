//Ecmascript 9+
const obj = {
    nam3: "David",
    age: 19,
    country: "idk"
}

let {nam3,...all} = obj; //Extrae los valores y estos no pueden repetirse
console.log(nam3,all);
//console.log(obj); no, no se lo extrae