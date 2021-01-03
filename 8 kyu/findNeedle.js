// findNeedle.js

/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
should return "found the needle at position 5"
*/

findNeedle = (array) => {
    for (i = 0; i < array.length; i++) {
        if (array[i] === "needle") {
            return `found the needle at position ${i}`
        }
    }
}

arr = ["1", "2", "3", "4", "needle"]

console.log(findNeedle(arr)) //returns: found the needle at position 4

//refactor (codewars suggested):
phindNeedle = (haystack) => `found the needle at position ${haystack.indexOf("needle")}`

console.log(phindNeedle(arr));
