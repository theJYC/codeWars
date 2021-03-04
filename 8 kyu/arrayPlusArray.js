//arrayPlusArray.js

arrayPlusArray = (arr1, arr2) => {
  sum1 = 0;
  sum2 = 0;

  for (i = 0; i < arr1.length; i++) {
    sum1 += arr1[i];
  }
  for (i = 0; i < arr2.length; i++) {
    sum2 += arr2[i];
  }
  return sum1 + sum2
}
