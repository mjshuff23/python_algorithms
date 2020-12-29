/************************************* allConstruct ******************************
 *
 *  - Write a function `allConstruct(target, wordBank)` that accepts a target string
 *      and an array of strings
 *
 *  - The function should return a 2D array containing ALL OF THE WAYS that the
 *      `target` can be constructed by concatenating elements of the `wordBank`
 *      array.  Each element of the 2D array should represent one combination
 *      that constructs the `target`
 *
 *  - You may reuse elements of `wordBank` as many times as needed.
 *
 *
 *
 *********************************************************************************/

// 1. Create the function
const allConstruct = (target, wordBank) => {
    if (target === '') return [[]];

    const result = [];

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank);
            const targetWays = suffixWays.map(way => [word, ...way]);
            result.push(...targetWays);
        }
    }

};



// 2. Create test inputs/outputs -- Expected outputs commented below log
console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
// [['purp', 'le'], ['p', 'ur', 'p', 'le']]
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']));
// [['ab', 'cd', 'ef'], ['abc', 'def'], ['abcd', 'ef'], ['ab', 'c', 'def']]
console.log(allConstruct('hello', ['cat', 'dog', 'mouse']));
// []
console.log(allConstruct('', ['cat', 'dog', 'mouse']));
// [[]]
