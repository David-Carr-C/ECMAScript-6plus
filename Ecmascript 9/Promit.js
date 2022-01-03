//Ecmascript 9+
const helloworld = () => {
    return new Promise ( (resolve,reject) => {
        (true)
        ? setTimeout( () => resolve("Hello World"),3000) 
        : reject(new Error("Test Error"))
    })
}

helloworld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally( () => console.log("Finalizo"))