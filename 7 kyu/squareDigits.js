
//squareDigits.js

/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1.

Note: The function accepts an integer and returns an integer
*/


squareDigits = num => {
    //create a string variable to be populated & returned
    str = "";
    //make integer into an array
    newNum = num.toString().split("");
    console.log(newNum)
    //loop through and square each index
    for (i = 0; i < num.length; i++) {
        //square each digits of the array
        parseInt(newNum[i]) ** 2
    }
    return newNum;
}

console.log(squareDigits(9119));
