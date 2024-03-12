//program to return inverse of an array

const arr = [2, 3, 5, 10];
const max = Math.max(...arr); //find maximum element
let newArray = new Array(max); //creating array by defining size
for (let i in arr) {
  newArray[arr[i]] = Number(i) + 1; //goes to the current value and store the current index+1
}
console.log(newArray);
