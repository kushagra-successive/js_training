//program to reverse a string ("Hello John" => "olleH nhoJ")

let str = "Hello John";
let arr = str.split(" "); // convert into array and split by its space
let reversedString = " "; // new string for storing reversed characters

for (let i = 0; i < arr.length; i++) {
  // its every index has string and passed as argument in reverse function
  reverse(arr[i]);
}

function reverse(str) {
  let subArray = str.split(""); // string again converted into array and split into characters
  subArray.reverse(); // it reverse all the characters inside array
  item = subArray.join(""); // again converted into string and join character by character
  reversedString += item + " ";
}
console.log(reversedString);
