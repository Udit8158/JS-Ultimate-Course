// Premetive Datatype - nn ss bb u

const a = null;
const b = 234; // number
const c = "Udit Kundu"; // String
const d = Symbol("This is a symbol"); // symbol
const e = true; // bollean -> or false also
const f = BigInt(568); // bigint -> to store big integer  -> result - 568n
const g = undefined; // undefined -> also can write const f;

console.log(a, b, c, d, e, f, g);
console.log(typeof g); // print type of a value stored in a variable or constant

// Non premetive datatypes -> Object

const myObj = {
  firstName: "Udit",
  surName: "Kundu",
  age: 18,
};
console.log(myObj);
// Accesing value of a key of an object
console.log(myObj["firstName"]);
console.log(myObj.firstName);

// Changing the value of a value of a key in object.
// You can change the key's value or ad new keys in constant object but you can't change whole variable to a new object or anyother datatypes
myObj.age = 19;
console.log(myObj.age);

myObj["passion"] = "Coding"; // Adding new key-value
console.log(myObj);

// myObj = {};  Not possible for constant if you declare with let or var you can do it then.
// myObj = 3;

let n = {};
n = 45;
console.log(n); // 45
