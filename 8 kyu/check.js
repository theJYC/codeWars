// check.js

/*
You will be given an array arr and a value val.
All you need to do is check whether the provided array contains the value.

arr can contain numbers or strings. val can be either.

Return true if the array contains the value, false if not.
*/

check = (arr , val) => {
    //if the value is present in the array,
    //arr.indexOf(val) will return the index at which the value appears (possible range of values:
    // value >= 0:
    if (arr.indexOf(val) >= 0) {
        return true;
    }
    // if arr.indexOf(val) will throw a -1 if value is NOT present in arr:
    else if (arr.indexOf(val) == -1) {
        return false;
    }
}

//
console.log(-1 == false)

console.log(check(['t', 'e', 's', 't'], 'e'))

console.log(check(['what', 'a', 'great', 'kata'], 'kat'))
