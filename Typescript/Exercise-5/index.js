"use strict";
function echo(data) {
    return data;
}
const myname = echo("Abdiwadud");
console.log(myname.toUpperCase());
const mynumber = echo(2345);
console.log(mynumber.toFixed(2));
const myobject = echo({ name: "abdiwadud", age: 20 });
console.log(myobject.name);
const stringResponse = {
    status: "Active",
    data: "Done",
};
console.log(stringResponse);
const userResponse = {
    status: "Active",
    data: { id: 1, name: "abdiwadud" },
};
console.log(userResponse);
function first(item) {
    return item[0];
}
const StringItem = first(["London", "Newyork", "Galkio", "Ankara"]);
const numberItem = first([10, 20, 30, 40, 50]);
const objectIem = first([{ id: 1, name: "geele" }, { id: 2, name: "Hawa" }]);
console.log(StringItem);
console.log(numberItem);
console.log(objectIem);
