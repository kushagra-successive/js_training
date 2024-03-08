//program to find sum of an array

let arr = [10, 22, 3, 4, 8, 5];
let sum = arr.reduce((accumulator, item) => accumulator + item, 0);
console.log(sum);
