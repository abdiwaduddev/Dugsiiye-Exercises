let productName : string = "shoes"
let Price : number = 20
let discountValue : boolean = false

console.log(productName);
console.log(Price);
console.log(discountValue);

const getDiscount = (price : number, discount:number) : number => {
    return price - price * discount
}

console.log(getDiscount(40,10))


function printLength(x: any) {
  console.log(x.length);
}

printLength("Hello")
// printLength(123)

function getsomething(x: unknown) {
  if(typeof x === "number") {
    console.log(x.toFixed(1))
  }
}

getsomething(45)