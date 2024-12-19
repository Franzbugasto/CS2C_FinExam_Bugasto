let word1 = prompt("Enter the first word (e.g., RACECAR):");
let word2 = prompt("Enter the second word (e.g., RECORDER):");

function reverseString(str) {
    return str.split('').reverse().join('');
}

let reversedWord1 = reverseString(word1);
let reversedWord2 = reverseString(word2);

let isPalindrome1 = word1 === reversedWord1;
let isPalindrome2 = word2 === reversedWord2;

console.log(`Word 1: Original: ${word1}, Reversed: ${reversedWord1}`);
console.log(`Word 1 is a palindrome: ${isPalindrome1}`);

console.log(`Word 2: Original: ${word2}, Reversed: ${reversedWord2}`);
console.log(`Word 2 is a palindrome: ${isPalindrome2}`);
