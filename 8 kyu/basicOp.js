//basicOp.js

/*
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples
basicOp('+', 4, 7)         // Output: 11
basicOp('-', 15, 18)       // Output: -3
basicOp('*', 5, 5)         // Output: 25
basicOp('/', 49, 7)        // Output: 7
*/

const basicOp = (operation, value1, value2) => {
    let output;
    if (operation == '+') {
        output = value1 + value2;
    }
    else if (operation == '-') {
        output = value1 - value2;
    }
    else if (operation == '*') {
        output = value1 * value2;
    }
    else if (operation == '/') {
        output = value1 / value2;
    }
    return output;
}

console.log(basicOp("*", 5, 5)) //returns 25;


//clever solution found on codewars:

function basicOp(operation, value1, value2)
{
  var cases = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2
  };
  return cases[operation]
}
