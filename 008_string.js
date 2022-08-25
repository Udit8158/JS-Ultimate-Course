// String -> When you use any string methods, then the actual string is not changed because string in immutable. Actually they return a new string.

const myStr = "Hey, there I am Udit   ";

// Methods and properties of string
console.log(myStr.slice(5, 10)); // Print there
console.log(myStr.concat(" Kundu")); // It add " kundu" at last of the string. You can also do concatination by + symbol
console.log(myStr.includes("Udit")); // true
console.log(myStr.replace("Hey", "Hello")); // replace 'hey' by 'hello'
console.log(myStr.trim()); // remove all white spaces(extra spaces)
console.log(myStr.search("Udit")); // means by which index given word start

const statement = "Please give Rs 1000";
const amount = Number.parseInt(statement.slice("Please give Rs ".length));
console.log(amount);
