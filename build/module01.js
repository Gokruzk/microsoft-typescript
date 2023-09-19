"use strict";
function addNumbers(x, y) {
    return x + y;
}
let x = 4;
let y = 6;
let flag;
let yes = true;
let no = false;
let s = "Suma:";
console.log(`${s} ${addNumbers(x, y)}`);
// * list of values which contains the numbers 1,2 or 3
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 0] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 1] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 2] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
let employee = ContractStatus.Temp;
console.log(employee); // ? 1
// * any: no restrictions
let randomValue = 10;
randomValue = false;
randomValue = "ok";
console.log(randomValue.toUpperCase());
let otherValue = 10;
otherValue = "xd";
console.log(otherValue.toUpperCase());
// * union types
let multiType;
multiType = 20; //* Valid
multiType = true; //* Valid
// multiType = "twenty";   //! Invalid
function add(x, y) {
    if (typeof x === "string" && typeof y === "string")
        return x.concat(y);
    if (typeof x === "number" && typeof y === "number")
        return x + y;
    throw new Error("Parameters must be numbers or string");
}
console.log(add(3, 6));
console.log(add("2", "5"));
console.log(add("one", 2)); //* Returns error
