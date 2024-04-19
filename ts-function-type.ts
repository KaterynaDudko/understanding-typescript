/** -------------------------------------------------------------------------------- **
 ** ------------------------------TypeScript Functions------------------------------ **
 ** -------------------------------------------------------------------------------- **/

/** -------------------------------Functions as Types------------------------------- **/
function add(n1: number, n2: number) {
  return n1 + n2;
} // return type is inferred by TypeScript and is number

function printResult(num: number) {
  console.log("Result: " + num);
} // return type is void

let sum: (a: number, b: number) => number;
sum = add;

printResult(sum(5, 12));

// sum = printResult; // Error: Type 'void' is not assignable to type 'number'

/** ------------------------Functions as Types and Callbacks------------------------ **/
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(60, 20, (result) => console.log(result));


