// Prompt user for numbers and names
let numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
let names = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

// Merge both arrays
let mergedArray = [...numbers, ...names];
console.log("Merged Array:", mergedArray);

// Sort numbers in reverse order
let sortedNumbers = [...numbers].sort((a, b) => b - a);
console.log("Numbers Sorted in Reverse:", sortedNumbers);

// Sort names alphabetically
let sortedNames = [...names].sort();
console.log("Names Sorted Alphabetically:", sortedNames);