//reversedString.js

/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
*/

reversedString = (str) => {
    let reverse = ""; //empty string to populate
    for (i = str.length -1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse
}

console.log(reversedString("string"))


