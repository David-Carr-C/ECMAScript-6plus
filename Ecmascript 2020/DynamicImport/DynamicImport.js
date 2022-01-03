//Ecmascript 11+
const button = document.getElementById("btn");

button.addEventListener( "click", async function () {
    const module = await import("./DynamicImport2.js");
    module.hello();
});