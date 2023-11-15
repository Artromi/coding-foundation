const size = 25;

if (size > 10 && size < 20) {
  console.log("Greater than 10");
} else if (size > 20) {
  console.log("Greater than 20");
} else {
  console.log("Lower than 10");
}
console.log(size);
// Returns Greater than 10 but should return Greater than 20

// TODO: Implement the oddEven function
function oddEven(num) {
  if (num % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even

// TODO: Implement the oldYoung function
function oldYoung(age) {
  if (age < 16 && age > 0) {
    console.log("children");
  } else if (age > 16 && age < 50) {
    console.log("young person");
  } else if (age > 50) {
    console.log("elder person");
  } else {
    console.log("invalid parameter");
  }
}

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person
