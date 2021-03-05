//countBy.js

countBy = (num, multiple) => {
    arr = [];
    arr2 = [];
    for (i = num; i <= multiple * num; i++) {
        i * arr.push(i);
    }
    for (i = 1; i <= multiple; i++) {
        arr2.push(i);
    }
    for (i = num; i <= num * multiple; i++) {
        i * arr2[i];
        arr.push(i);
    }
    return arr;
}

console.log(countBy(2,5));
// [2,4,6,8,10]
