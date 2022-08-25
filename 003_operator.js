// Operator in JS

// Arithmetic Operators
let a = 10;
let b = 3;

console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b); // It gave float (3.33) unlike C
console.log("a % b =", a % b); // Module gives remainder
console.log("a ** b =", a ** b); // a to the power b means here 10 cube
console.log("a ++ =", a++); // Print 10 but value of a become 10 + 1 = 11
console.log("++a =", ++a); // Print 12 and value also 12
// Means ++a -> increment by one in the same line and update the value but a++ -> firstly print the previous value then update the value by incrementing 1. Same for --
console.log("a +--=", a--);
console.log("--a=", --a);

// Assingment Operator
let n = 3;
console.log((n += 3)); // 6 -> means incrment by 6 [Here you can use any arithmetic operator with = sign]

// Comparision Operator -> Return True or flase only
const c = 3;
const d = "3";
const e = 4;

console.log("c == d", c == d);
console.log("c === d", c === d); // If both of value and type match then only true
console.log("c != d", c != d);
console.log("c !== d", c !== d); // If one of value or type not matched then true

// Logical Operator
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);
// For &&(Logical and) if both true then only ture and for ||(Logical false) if one true then true
console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);
console.log(!true); // false

// Bitwise operator 0 -> False 1 or any other value -> true
console.log(0 & 1); // 0
console.log(0 | 1); // 1
