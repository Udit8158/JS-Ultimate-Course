// For Loop

// Infinite for loop
// for (let i = 0; ; ) {
//   console.log(i);
// }
//  print 0 to 10
for (let i = 0; i < 11; i++) {
  console.log(i);
}

// Sum of first n natural number
const tillTheNumber = 4;
let sum = 0;
for (let i = 1; i <= tillTheNumber; i++) {
  sum += i;
}
console.log(sum);

// Factorial calculation
const givenNumber = 5;
let result = 1;

if (givenNumber === 0 || givenNumber === 1) {
  result = 1;
} else {
  for (let i = 1; i < givenNumber; i++) {
    result = result * (i + 1);
  }
}
console.log(result);

// For-in -> Used to itereate object

const myObj = {
  myName: "Udit",
  myAge: 18,
};

for (key in myObj) {
  console.log(key, "->", myObj[key]);
}

// For-of -> Use to iterate any iterable (Not used for object) Use it for array and strings.
const myArr = ["Kundu", "Biswas", "Saha"];
for (a of myArr) {
  console.log(a);
}

// Itereate an object with normal for loop
const marks = {
  Udit: 189,
  Sam: 212,
  Jac: 178,
};
// It make an array with the keys of object
const marksKey = Object.keys(marks);
console.log(marksKey);
for (let i = 0; i < marksKey.length; i++) {
  console.log(`Marks of ${marksKey[i]} is ${marks[marksKey[i]]}`);
}
