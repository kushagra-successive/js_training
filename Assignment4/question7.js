//program to find index of duplicate elements in an array

const arr = [1, 2, 3, 4, 5, 6, 1, 7, 1, 10, 11, 2, 3, 5, 6, 7, 8];
const obj = {}; //creates empty object so that we can write key and its duplicate indexes simultaneosly
for (i in arr) {
  if (obj[arr[i]] != undefined) {
    obj[arr[i]].push(i); //if value already exist then push its index in its key
  } else {
    obj[arr[i]] = [i]; //if not present then at particular value it creates an array and insert first occuring index
  }
}
for (key in obj) {
  if (obj[key].length != 1) {
    //it will print only when length is greater than 1
    console.log(key, obj[key]);
  }
}
