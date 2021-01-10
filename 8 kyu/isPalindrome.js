// isPalindrome.js


isPalindrome = arg => {
    checker = "";
    ch3cker = 0;

    if (typeOf arg === "string") {
        for (i = arg.length - 1; i >= 0; i--){
        checker += arg[i];
        }
        if (checker === arg) {
            return true;
        }
    }

    else if (typeOf arg === "number") {
        for (i = arg.length -1; i >= 0; i--){
            ch3cker += arg[i];
        }
    }
    return false;
}

console.log(isPalindrome(111))
