function addNumbers(x: number, y: number) {
  return x + y;
}

let x: number = 4;
let y = 6;
let flag: boolean;
let yes = true;
let no = false;
let s: string = "Suma:";
console.log(`${s} ${addNumbers(x, y)}`);

// * list of values which contains the numbers 1,2 or 3
enum ContractStatus {
  Permanent,
  Temp,
  Apprentice,
}

let employee: ContractStatus = ContractStatus.Temp;
console.log(employee); // ? 1

// * any: no restrictions
let randomValue: any = 10;
randomValue = false;
randomValue = "ok";
console.log(randomValue.toUpperCase());

let otherValue: unknown = 10;
otherValue = "xd";
console.log((<string>otherValue).toUpperCase());

// * union types
let multiType: number | boolean;
multiType = 20; //* Valid
multiType = true; //* Valid
// multiType = "twenty";   //! Invalid

function add(x: number | string, y: number | string) {
  if (typeof x === "string" && typeof y === "string") return x.concat(y);
  if (typeof x === "number" && typeof y === "number") return x + y;
  throw new Error("Parameters must be numbers or string");
}

console.log(add(3, 6));
console.log(add("2", "5"));
console.log(add("one", 2)); //* Returns error
