//Bienvenido a la tienda
function sell() {
    var item = document.getElementById("tortilla");
    item = item.value;
    console.log(item);
    var change = document.getElementById("isItSell");
    change.innerText = "Vendido";
}
function sell2() {
    var item = document.getElementById("aguacate");
    item = /*parseInt(*/item.value/*)*/;
    console.log(item);
    var change = document.getElementById("isItSell2");
    change.innerText = "Vendido";
}