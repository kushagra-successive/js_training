//program to find sum of an array

const arr = [10, 22, 3, 4, 8, 5];
const sum = arr.reduce((accumulator, item) => accumulator + item, 0);
console.log(sum);
//reduce perform praticular operation by taking its initial value by accumulator and return single value
