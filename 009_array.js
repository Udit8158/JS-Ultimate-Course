// Array is not a premetive datatype so you can change it (it is not immutable)
const myArr = [2, 34, 32, 12, 35]; // You can store any time of datatype in array

// Array constractor
// const arr = Array(7); // It creates array of 7 empty slots
// console.log(arr); // 7

// const a = Array.of(7); // It creates [7]
// console.log(a);

// Important array methods
// console.log(myArr.at(2)); // Returns the value at the index 2

// const newArr = myArr.concat(a, arr); // It concat one or more arry and return a new array.
// console.log(newArr);

// myArr.copyWithin(1, 3, 4); // It changes the actual array
// console.log(myArr);

console.log(myArr.every((e) => e % 2 === 0)); // It check every element pass the condition or not.

// const modArr = myArr.fill(0, 3, 5); // It fill 0 from 3 to 5(exclue) and modified the array.
// console.log(modArr, myArr);

const resultArrOfEvenElement = myArr.filter((e) => e % 2 === 0); // It returns a new array with the condition satisfing elements but don't change the actual array
// console.log(resultArrOfEvenElement, myArr);

// console.log(myArr.find((e) => e === 12)); // return 12 means it return the first element of an array which fulfill the condition function here
// same like this ->   findLast -> for last matched element
// findIndex and findLastIndex for index of the element
// console.log(myArr.findIndex((e) => e === 12)); // return the index of 12

const arrWithSubArr = [2, 3232, 22, ["Udit", ["Kundu"]], []];
// console.log(arrWithSubArr.flat()); // [ 2, 3232, 22, 'Udit', [ 'Kundu' ] ] It don't change the array it actually returns a new array
// console.log(arrWithSubArr.flat(2)); // [ 2, 3232, 22, 'Udit', 'Kundu' ] depth=2

// foreach doesn't change the current array.
myArr.forEach((e) => {
  e = e + 1;
  //   console.log(e);
});
// console.log(myArr);

// console.log(myArr.includes(2)); // check if given value is in the array or not
// console.log(myArr.toString()); // It converts array's element into string
// console.log(myArr.join(" and ")); // It also returns a string from array element but join them with a given argument.

for (keys of myArr.keys()) {
  //   console.log(keys); // keys means for array is index of every elements
}

const myArrIncrementedByIndex = myArr.map((e, i) => (e = e + i));
// console.log(myArrIncrementedByIndex);

const popedElement = myArr.pop(); // It removes last element from the original array and return the element
console.log(popedElement, myArr);
// delete myArr[2]; // Delete a element from original array without changin its length
// console.log(myArr); //It returns [ 2, 34, <1 empty item>, 12 ]

let sum = 0;
myArr.forEach((e) => {
  sum += e;
});
// console.log(sum);

// sorting of an array
// myArr.sort(); // It sorted alphabetically not numerically
// console.log(myArr); // --> [12,2,32,34] as 1 < 2 < 3 and then when 3 = 3 then 3 < 4

// sorting numerically  -> follow mdn docs also it is very powerful algorithem
// myArr.sort((a, b) => a - b);
// console.log(myArr);

// splice -> It changes original array by replacing and deleting of element\
console.log(myArr);
myArr.splice(3, 1, 11, 13); // --> It means starting from 3rd index delete one element and then add 11 and 13 after that or same index.
console.log(myArr);
