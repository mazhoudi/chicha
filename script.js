const $product1 = document.querySelector("#product1");
const $product2 = document.querySelector("#product2");

const $total1 = document.querySelector("#total1");
const $total2 = document.querySelector("#total2");

var p1=0;
var p2=0;

$product1.addEventListener("click", () => {
    p1++;
    total1.innerHTML = p1;
});

$product2.addEventListener("click", () => {
    p2++;
    total2.innerHTML = p2;
});