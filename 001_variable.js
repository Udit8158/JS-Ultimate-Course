console.log("Variables in JS");

let num = 2;

console.log(num);

num = "Udit's Age"; // You can change the variable's data type as JS is dynamically typed language.
console.log(num);
num = 5; // you can change the value of variable.
console.log(num);
{
  // Here you can again declare num variable with let as its scope is now changed
  let num = 3;
  console.log(num);
}

const a = 2;
console.log(a);
// a= 4; // not allowed

{
  // const also allow for other scope
  const a = 3;
  console.log(a);
}

const myName = "Udit";
console.log("lenght is", myName.length);
