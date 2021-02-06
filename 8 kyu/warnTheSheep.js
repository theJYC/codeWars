// warnTheSheep.js

warnTheSheep = (queue) => {

    //first, create an array to be populated (and will serve to reverse the indeces of queue elements)
    let queueInReverse = [];

    for (i = queue.length -1; i >= 0; i--) {
      queueInReverse.push(queue[i]);
    }
    console.log(queueInReverse);

    for (i = 0; i <= queueInReverse.length - 1; i++) {
        if (queueInReverse[0] === "wolf") {
            return "Pls go away and stop eating my sheep";
        }
        else if (queueInReverse[i] === "wolf") {
            //${i} instead of ${i-1} since the prompt considers the sheep at 0th index as sheep 1, instead of sheep 0:
            return `Oi! Sheep number ${i}! You are about to be eaten by a wolf!`;
        }
    }
}

//testcases:

console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]));
//returns: Oi! Sheep number 2! You are about to be eaten by a wolf!

console.log(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]));
//returns: Oi! Sheep number 6! You are about to be eaten by a wolf!
