// vowelsCount.js

/*

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/

getCount = str => {

  var vowelsCount = 0;

  for (i = 0; i < str.length; i++) {
    switch(str[i]) {
        case "a":
          vowelsCount += 1;
          break;
        case "e":
          vowelsCount += 1;
          break;
        case "i":
          vowelsCount += 1;
          break;
        case "o":
          vowelsCount += 1;
          break;
        case "u":
          vowelsCount += 1;
          break;
        default:
          vowelsCount += 0;
    }
  }
  return vowelsCount;
}
