let arr = [10, 2, 30, 1, 8, 3];
let max = Math.max(...arr);
let newArray = Array(max);
for (let i in arr) {
  newArray[arr[i]] = i + 1;
}
console.log(newArray);
