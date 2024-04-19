/** -------------------------------------------------------------------------------- **
 ** --------------------------'unknown' and 'never' Types--------------------------- **
 ** -------------------------------------------------------------------------------- **/

/** ------------------------------------unknown------------------------------------- **/

/* NOTE 'unknown' is a type that is more restrictive than 'any', because it doesn't allow
    you to assign it to any other type without checking its type first. 
    So it's a good practice to use 'unknown' instead of 'any' when you don't know ahead the
    type of the variable 
 */

let nameInput: unknown;
let ageInput: any;

let userName: string;
let userAge: number;

nameInput = "Cat";
ageInput = 26;

userAge = ageInput; // WORKS, because 'any' can be assigned to any type

//userName = nameInput; // ERROR, because 'unknown' can't be assigned to any type
// To assign 'unknown' to a type, we need to check the type first
if (typeof nameInput === "string") {
  userName = nameInput;
}

console.log(`userName: ${userName}, userAge: ${userAge}`);

/** -------------------------------------never-------------------------------------- **/

/* NOTE 'never' is a type that is used when a function never returns anything, 
    or when it always throws an error. 
    It's a good practice to use 'never' as a return type of a 
    function that always throws an error
 */

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occurred!", 500);
