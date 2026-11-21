"use strict";
let productName = "shoes";
let Price = 20;
let discountValue = false;
console.log(productName);
console.log(Price);
console.log(discountValue);
const getDiscount = (price, discount) => {
    return price - price * discount;
};
console.log(getDiscount(40, 10));
function printLength(x) {
    console.log(x.length);
}
printLength("Hello");
// printLength(123)
function getsomething(x) {
    if (typeof x === "number") {
        console.log(x.toFixed(1));
    }
}
getsomething(45);
