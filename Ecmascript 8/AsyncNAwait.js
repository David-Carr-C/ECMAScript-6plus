//Ecmascript 8+
const helloworld = () => {
    return new Promise((resolve,reject) => {
        if (true) {
            setTimeout(() => resolve("Hello World"),3000)
        } else {
            reject(new Error("Test Error"));
        }
    })
}

const helloAsync = async () => {
    const hello = await helloworld();
    const hello2 = await helloworld();
    console.log(hello,hello2);
}

helloAsync();

const anotherFunc = async () => {
    try {
        const hello = await helloworld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotherFunc();