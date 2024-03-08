//program to return inverse of an array

let arr = [10, 2, 30, 1, 8, 3];
let max = Math.max(...arr); //find maximul element
let newArray = Array(max); //creating array by defining size
for (let i in arr) {
  newArray[arr[i]] = i + 1; //goes to the current value and store the current index+1
}
console.log(newArray);
