// reverseWords.js

/*

Complete the solution so that it reverses all of the words within the string passed in.

Example:

reverseWords("The greatest victory is that which requires no battle")
// should return "battle no requires which that is victory greatest The"

*/

reverseWords = str => {
    wordsReversed = [ ];
    //1) split the str by space, contain the output in array;
    let wordArr = str.split(" ");
    //2) reverse for loop through the array;
    for (i = wordArr.length; i >= 0; i--) {
        wordsReversed.push(wordArr[i]);
    }
    //3) join the output with space.
    return wordsReversed.join(" ");
}


console.log(reverseWords("Hello is it me you're looking for?"))

console.log(reverseWords("hello world!"))
