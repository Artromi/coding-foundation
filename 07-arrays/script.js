// TASK 01

function removeItem(arr, num) {
  const arrayCopy = structuredClone(arr);
  arrayCopy.splice(num - 1, 1);
  return arrayCopy;
}

const ainmals = ["Dog", "Cat", "Lion"];
console.log(removeItem(ainmals, 1));
console.log(ainmals);
const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 3));
console.log(fruits);

// TASK 02
//check each array item  if string
//count characters
//store count of characters
//return total sum of all characters

function sumOfCharacters(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      count = count + arr[i].length;
    }
  }
  return count;
}

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));
// result should be: 17

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
// result should be: 55
