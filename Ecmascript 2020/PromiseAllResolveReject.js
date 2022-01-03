//Ecmascript 11+
const promise1 = new Promise( (resolve,reject) => reject("Reject This"));
const promise2 = new Promise( (resolve,reject) => resolve("Resolve This"));
const promise3 = new Promise( (resolve,reject) => resolve("Resolve This 1+"));

Promise.allSettled([promise1,promise2,promise3])
    .then(response => console.log(response))