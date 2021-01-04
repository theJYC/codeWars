// countPositiveSumNegatives.js

/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers
and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15],
you should return [10, -65]
*/

countPositivesSumNegatives = (input) => {
    if (input && input.length) { //if input is NOT an empty array (see "key takeaway below")
        let count = 0;
        let sum = 0;

        for (i = 0; i < input.length; i++) {
            if (input[i] > 0) {
                count++;
            }
            else {
                sum += input[i];
            }
        }
        stringFormat = `${count},${sum}`.split(","); //returns ['count', 'sum'] (e.g. ['2','3'])
        return stringFormat.map(Number); //returns [count, sum] (e.g. [2, 3])
    }
    return [];
}

console.log(countPositivesSumNegatives([1,2,-5])) //returns: [ 2, -5 ]

/* key takeaways:

checking for an empty array (this has been looked up too many times now):

a)
if (array && array.length) {
    // array and array.length are truthy
    // ⇒ probably OK to process array
}

b)
if (array === undefined || array.length == 0) {
    // array empty or does not exist
}

c)

if(array.length < 1 || array == undefined){
    //empty
}

*/
