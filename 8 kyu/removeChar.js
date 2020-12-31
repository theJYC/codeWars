// removeChar.js

/*
It's pretty straightforward.
Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string.
You don't have to worry with strings with less than two characters.
*/

removeChar = (str) => str.slice(1,-1); //had to find .slice() on MDN string methods doc.


console.log(removeChar("Hello"))
