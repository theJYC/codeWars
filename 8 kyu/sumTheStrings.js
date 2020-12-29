//sumTheStrings
/*
Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

  sumStr("4", "5")    // should output "9"
  sumStr("34", "5")   // should output "39"

If either input is an empty string, consider it as zero.
*/

sumStr = (a,b) => {

  if (a === "" && b === "") { //if both a and b are empty strings ("")s
    return "0";
  }
  else if (a === "") { //if a is an empty string ("")
    let a_empt = 0;
    let b0 = parseInt(b);
    let sum_a = a_empt + b0;
    return sum_a.toString();
  }
  else if (b === "") { //if b is an empty string ("")
    let b_empt = 0;
    let a0 = parseInt(a);
    let sum_b = b_empt + a0;
    return sum_b.toString();
  }

  else { //if neither a nor b are empty strings ("")
    let a_int = parseInt(a);
    let b_int = parseInt(b);
    let sum_int = a_int + b_int;
    return sum_int.toString();
  }
}

console.log(sumStr("34", "5")); //39
console.log(sumStr("0", "0")); //0
