/** -------------------------------------------------------------------------------- **
 ** ---------------------------TypeScript specific types---------------------------- **
 ** -------------------------------------------------------------------------------- **/

/** ----------------------------------Union types----------------------------------- **/

function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

console.log(combine(1, 2));
console.log(combine("Max", "Anna"));

/** ---------------------------------Literal types---------------------------------- **/

function combineWithConversion(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text"
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return resultConversion === "as-number" ? +result : result.toString();
}

console.log(combineWithConversion(5, 100, "as-text"));
console.log(combineWithConversion("Cat", "Anna", "as-number"));

/** --------------------------Type aliases (custom types)--------------------------- **/

type Conversion = "as-number" | "as-text";

function combineWithConversionTypeAlias(
  input1: number | string,
  input2: number | string,
  resultConversion: Conversion
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return resultConversion === "as-number" ? +result : result.toString();
}

console.log(combineWithConversionTypeAlias(554, "1", "as-text"));
console.log(combineWithConversionTypeAlias(34, "34", "as-number"));

/** ----------------------------Type Alises with Objects---------------------------- **/

type Role = "admin" | "user" | "superuser";
type User = { name: string; age: number; married: boolean };

const user: User = {
  name: "Max",
  age: 30,
  married: false,
};

function assignRole(user: User, role: Role) {
  return { ...user, role };
}

console.log(assignRole(user, "admin"));
