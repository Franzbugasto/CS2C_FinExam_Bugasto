let numbersInput = prompt("Enter numbers separated by commas (e.g., 24,65,21,5,9,32,42,80,57):");
let namesInput = prompt("Enter names separated by commas (e.g., Zenvo, Erica, Jordie, Alicia, Redon):");

let numbers = numbersInput.split(',').map(Number);
let names = namesInput.split(',').map(name => name.trim());

let mergedArray = [.numbers,.names];
console.log("Merged Array:", mergedArray);

let sortedNumbers = [.numbers].sort((a, b) => b - a);
console.log("Sorted Numbers (Descending):", sortedNumbers);

let sortedNames = [.names].sort();
console.log("Sorted Names (Alphabetical):", sortedNames);
