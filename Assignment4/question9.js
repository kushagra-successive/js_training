//program to find the last duplicate index in an array

let arr = [1, 2, 4, 1, 5, 2, 5, 7, 2, 1, 4, 3, 11];
let newarr = [];
let lastindex;
for (let i = 0; i < arr.length; i++) {
  if (!newarr.includes(arr[i])) newarr.push(arr[i]);
  else lastindex = i;
}
console.log(lastindex);
