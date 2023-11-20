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

// TASK 02
function charCount(word, char) {
  word = word.toLowerCase();
  char = char.toLowerCase();
  let result = "";
  for (let index = 0; index < word.length; index++) {
    if (char > 1) {
      break;
    }
    const currentChar = word[index];
    if (currentChar === char) {
      result = result + char;
    }
  }
  return result.length;
}

console.log(charCount("hello", "L"));
// result should be: 2

console.log(charCount("maMa", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
