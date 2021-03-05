//fakeBin.js

/*
Given a string of digits,
you should replace any digit below 5 with '0'
and any digit 5 and above with '1'.

Return the resulting string.
*/

fakeBin = str => {
  let newArr = [];

  for (i = 0; i < str.length; i++) {
    if (parseInt(str[i]) < 5) {
      newArr.push('0');
    }
    else {
      newArr.push('1');
    }
  }
  newStr = newArr.join("")
  return newStr;
}

console.log(fakeBin('45385593107843568')) // returns: 01011110001100111
