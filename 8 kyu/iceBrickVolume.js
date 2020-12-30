//iceBrickVolume

/*
A magician in the subway showed you a trick,
he put an ice brick in a bottle to impress you.
The bricks width and height are equal, forming a square.
Just for fun and also to impress the magician and people around,
you decided to calculate the brick's volume.

Write a function iceBrickVolume that will accept these parameters:

radius - bottle's radius (always > 0);
bottleLength - total bottle length (always > 0);
rimLength - length from bottle top to brick (always < bottleLength);
And return volume of ice brick that magician managed to put into a bottle.

Note:
All inputs are integers.
Assume no irregularities to the cuboid brick.
You may assume the bottle is shaped like a cylinder.
The brick cannot fit inside the rim.



*/

/* brainstorm:

(2 * radius) would be the hypoteneuse of the right angled triangle
with two equal (adjacent and opposite) side lengths.

pythagoras theorem: (2 * radius)^2 = (2 * side_length)^2

[ 4 * (radius ** 2) = 4 * (side_length ** 2) ]

side_length = Math.sqrt(2 * (radius ** 2))

i.e. with the radius known, 1) first solve for side_length using formula:


then 2) iceBrickVolume would be side_length * side_length * (height of iceCube)

height of iceCube = (bottleLength - rimLength)
*/

iceBrickVolume = (radius, bottleLength, rimLength) => {
    const cubeSideLength = Math.sqrt(2 * (radius ** 2)); //1) calculate cube sideLength using known radius)
    const vol = ((cubeSideLength ** 2) * (bottleLength - rimLength)).toFixed(0);
    return parseInt(vol);

}


//now for the refactor:

iceBrickVolume = (radius, bottleLength, rimLength) => {
    const vol = ((Math.sqrt(2*(radius **2)) **2) * (bottleLength - rimLength)).toFixed(0);
    return parseInt(vol);
}


console.log(iceBrickVolume(5,30,7))
