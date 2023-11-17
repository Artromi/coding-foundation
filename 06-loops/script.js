// TASK 01
function oddNumbers(num1, num2) {
  let result = "";

  for (let number = num1; number <= num2; number++) {
    if (number % 2 !== 0) {
      if (result === "") {
        result = result + number;
      } else {
        result = result + "," + number;
      }
    }
  }
  return result;
}
console.log(oddNumbers(0, 4));
console.log(oddNumbers(10, 33));
console.log(oddNumbers(9, 12));
