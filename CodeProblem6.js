let numbers = [];

for (let i = 0; i < 10; i++) {
  let number = prompt("Enter a number:");
  numbers.push(Number(number));
}

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      console.log(`Comparing ${arr[j]} and ${arr[j + 1]}`);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        console.log(`Swapped ${arr[j + 1]} and ${arr[j]}`);
      }
    }
  }
  return arr;
}

let sortedArray = bubbleSort(numbers);
console.log("Sorted Array:", sortedArray);
