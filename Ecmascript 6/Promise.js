//Ecmascript 6+
const thisIsAPromise = () => {
    return new Promise ((resolve,reject) => {
        if (false) {
            resolve("It's okay");
        } else {
            reject("It's wrong");
        }
    })
}

thisIsAPromise()
    .then(response => console.log(response))
    .then(tr => console.log(tr)) //Undifined

    .catch(error => console.log(error))