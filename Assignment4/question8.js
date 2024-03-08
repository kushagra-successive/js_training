//program to remove dupliacte elements from an array

let arr = [1, 2, 4, 1, 5, 2, 5, 7, 2, 1, 4, 1, 7];
let newarr = []; //empty array
for (let i = 0; i < arr.length; i++) {
  if (!newarr.includes(arr[i])) newarr.push(arr[i]); //if value is not present,it will push elements
}
console.log(newarr);
