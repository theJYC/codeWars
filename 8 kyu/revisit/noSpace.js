// noSpace.js (had to be looked up!)

/*
Simple, remove the spaces from the string, then return the resultant string.
*/

noSpace = (x) => x.split(" ").join("")

console.log(noSpace("hi there"));

/* explanation:
I had thought of doing the .split().join() combo,
but did not think about passing in a parameter in .join().

without the parameter, the returned value was "hi,there" (emphasis on the comma (,)).

