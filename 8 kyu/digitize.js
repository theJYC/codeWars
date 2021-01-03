// digitize.js

/*
Given a random non-negative number,
you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
*/

digitize = (n) => {
    let str = n.toString(); //int to string, so that it is iterable
    let reverse = ""; //the reverse of the str that will be populated to this empty str

    for (i = str.length - 1; i >= 0; i--) {
        reverse += str[i]; //looping in reverse and feeding into empty str
    }

    strToArray = reverse.split(""); //converting str to array
    return strToArray.map(Number);
}


console.log(digitize(348597)) //returns [ 7, 9, 5, 8, 4, 3 ]
