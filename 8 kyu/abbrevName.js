// abbrevName.js

/*
Write a function to convert a name into initials.
This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F
*/

//I: string with two words separated by a space (e.g. Fredrick Thompson)
//O: first indexes of each word of the string

abbrevName = (name) => {
    arr = name.toUpperCase().split(" ");
    return `${arr[0][0]}.${arr[1][0]}`;
}
console.log(abbrevName("Fredrick Thompson"));
