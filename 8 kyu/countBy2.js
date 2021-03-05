countBy = (num, multiple) => {
    arr = [];
    arr1 = [];
    //first create an array of all int upto multiple:
    for (i = 1; i <= multiple; i++) {
        arr1.push(i);
    }
    //then multiply number to each index of that array:
    for (i = 0; i < arr1.length; i++) {
        multiplied = num * arr1[i];
        arr.push(multiplied);
    }
    return arr;
}

console.log(countBy(2,5));
