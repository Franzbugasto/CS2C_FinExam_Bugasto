let namesInput = prompt("Enter names separated by commas (e.g., Genevieve, Juan, Luna, Gabriel, Elise):");
let agesInput = prompt("Enter ages separated by commas (e.g., 24, 65, 21, 5, 9):");

let names = namesInput.split(',').map(name => name.trim());
let ages = agesInput.split(',').map(Number);

let restructuredArray = names.map((name, index) => [name, ages[index]]);

console.log("Restructured Multi-Dimensional Array:");
restructuredArray.forEach(subArray => console.log(subArray));
