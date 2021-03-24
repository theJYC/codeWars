// booleanToString.js

/*

Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.

*/

//my solution:

booleanToString = b => {
  return b == true ? "true" : "false";
}

// clever solution (a) on codewars:

function booleanToString(b){
  return b ? 'true' : 'false';
}

// clever solution (b) on codewars:

const boolToString = b => {
    return b.toString();
}

