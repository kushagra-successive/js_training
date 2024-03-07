let str = "Hello John";
let arr = str.split(" ");
let reversedString = " ";

for (let i = 0; i < arr.length; i++) {
  reverse(arr[i]);
}

function reverse(str) {
  let subArray = str.split("");
  subArray.reverse();
  item = subArray.join("");
  reversedString += item + " ";
}
console.log(reversedString);
