// Task 01
const size = 25;
let result;

if (size > 10 && size < 20) {
  result = "Greater than 10";
} else if (size > 20) {
  result = "Greater than 20";
} else {
  result = "Lower than 10";
}
console.log(result);

// Task 02
function oddEven(num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(oddEven(3));
console.log(oddEven(-1));
console.log(oddEven(10));
// ODER:
//    function oddEven(num) {
//      return num % 2 === 0 ? "even" : "odd";
//    }

// Task 03
function oldYoung(age) {
  if (age < 16 && age > 0) {
    return "children";
  } else if (age > 16 && age < 50) {
    return "young person";
  } else if (age > 50) {
    return "elder person";
  } else {
    return "invalid parameter";
  }
}
console.log(oldYoung(27));
console.log(oldYoung(6));
console.log(oldYoung(-1));
console.log(oldYoung(86));

// ALTERNATIV:
// function oldYoung(age) {
//   if (typeof age !== "number" || age < 0) {
//     return "invalid parameter";
//   }

//   if (age < 16) {
//     return "young person";
//   } else if (age < 50) {
//     return "elder person";
//   }
// }
