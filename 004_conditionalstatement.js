// if else ladder

const age = 18;

if (age > 0 && age < 10) {
  console.log("You are kid now not think about drive");
} else if (age > 10 && age < 18) {
  console.log("You can think about driving after 18");
} else if (age >= 18) {
  console.log("You can drive");
} else {
  console.log("Enter a valid age");
}

// Switch case
switch (age) {
  case 18:
    console.log("Your age is 18");
    break;
  case 28:
    console.log("Your age is 28");
    break;

  default:
    console.log("Your age is not 28 or 18");

    break;
}

// Ternary operator
console.log("You can", age >= 18 ? "drive" : "not drive");
