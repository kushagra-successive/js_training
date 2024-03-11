//program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")

const str = "abcabcdabbcc";
const arr = Array(123).fill(0); //defining the size of array and .fill is use for gdefault value
let ansString = "";

for (let i = 0; i < str.length; i++) {
  arr[str.charCodeAt(i)]++; //at ascii value of every characters inside arra,increment value from 0 to its frequency
}

for (let i in arr) {
  if (arr[i] !== 0) {
    ansString += String.fromCharCode(i) + arr[i]; //.fromCharCode will convert ascii to character
  }
}
console.log(ansString);
