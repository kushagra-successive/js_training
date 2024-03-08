//program to display intersection of two array

let array1 = [1, 5, 7, 8, 9];
let array2 = [1, 7, 1, 2, 5, 9, 1, 5];
let intersectedArray = [];
//sort the 2 arrays
array1.sort((a, b) => a - b);
array2.sort((a, b) => a - b);
let i = 0,
  j = 0;
// if both values are equal then store in resultArray and increment both pointers otherwise increment the pointer which points to the smaller values
while (i < array1.length && j < array2.length) {
  if (array1[i] == array2[j]) {
    intersectedArray.push(array1[i]);
    i++;
    j++;
  } else if (array1[i] > array2[j]) {
    j++;
  } else {
    i++;
  }
}
console.log(intersectedArray);
