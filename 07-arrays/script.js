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
