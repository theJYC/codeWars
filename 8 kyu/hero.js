//hero.js

/*
A hero is on his way to the castle to complete his mission.
However, he's been told that the castle is surrounded with a couple of powerful dragons!
each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry...

Assuming he's gonna grab a specific given number of bullets
and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise :)
*/

hero = (bullets, dragons) => {
    return bullets >= 2 * dragons ? true : false;
}


//others solutions on codeWars reminded me that returning true / false explicitly may be redundant practice,
//as returning the statement will just yield true or false, as such:

her0 = (bullets, dragons) => {
    return bullets >= 2 * dragons;
}

//^the above code will output true if the return statement is true given the two parameters,
// and false if the returned statement is false given the two parameters.

//testcases:

console.log(hero(0, 1));
//returns: false

console.log(hero(100,40));
//returns: true
