// cracklePop.js

/*
Write a program that prints out the numbers 1 to 100 (inclusive).
If the number is divisible by 3, print Crackle instead of the number.
If it's divisible by 5, print Pop.
If it's divisible by both 3 and 5, print CracklePop.
You can use any language.
*/

cracklePop = () => {
    for (i = 1; i < 101; i++) {
        if (i % 15 === 0)  {
            console.log("CracklePop");
        }
        else if (i % 3 === 0) {
            console.log("Crackle");
        }
        else if (i % 5 === 0) {
            console.log("Pop");
        }
        else {
            console.log(i);
        }
    }
}

console.log(cracklePop());
