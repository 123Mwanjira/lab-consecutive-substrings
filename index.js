// Task 1: Define the Problem
// Given a string, return all consecutive substrings consisting of at least one character.
// Substrings must be in order of appearance.
// Task 2: Pseudocode
// 1. Create an empty array to store substrings
// 2. Loop through each character in the string (start index)
// 3. For each start index, loop from start to end of string (end index)
// 4. Extract substring from start to end
// 5. Add substring to array
// 6. Return array
// Task 3: Coding and Debugging

function getSubstrings(str) {
    let result = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            result.push(str.substring(i, j));
        }
    }

    return result;
}

// Test Cases
console.log(getSubstrings("abc")); 
// Expected: ['a', 'ab', 'abc', 'b', 'bc', 'c']

console.log(getSubstrings("a")); 
// Expected: ['a']

console.log(getSubstrings("")); 
// Expected: []
// Task 4: Determining Big O
// The algorithm uses two nested loops.
// Outer loop runs n times.
// Inner loop runs up to n times.
// Total operations = n * n = O(n^2)
// Time Complexity: O(n^2)
