//program to find index of duplicate elements in an array

const arr = [1, 2, 3, 4, 5, 6, 1, 7, 1, 10, 11, 2, 3, 5, 6, 7, 8];
const obj = {};
for (i in arr) {
  if (obj[arr[i]] != undefined) {
    obj[arr[i]].push(i);
  } else {
    obj[arr[i]] = [i];
  }
}
for (key in obj) {
  if (obj[key].length != 1) {
    console.log(key, obj[key]);
  }
}
