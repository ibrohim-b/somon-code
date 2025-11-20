function sumArray(arr) {
  let sum = 0; // Initialize a variable to store the sum
  for (let i = 0; i < arr.length; i++) { // Loop through each element of the array
    sum += arr[i]; // Add the current element to the sum
  }
  return sum; // Return the final sum
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const totalSum = sumArray(numbers);
console.log(totalSum); // Output: 15







const arrayOne = [1, 4, 5, 7, 3, 8, 1, 9];
const arrayTwo = [3, 7, 1, 12, 9, 5, 24, 16];

function diffArrayInt(array1, array2) {
  return (
    [...array1, ...array2]
    .filter((item) => !array1.includes(item) || !array2.includes(item))
  );
}

console.time('Start Algo 3');
console.log(diffArrayInt(arrayOne, arrayTwo));
console.timeEnd('Start Algo 3'); // Start Algo 3: 0.48486328125ms