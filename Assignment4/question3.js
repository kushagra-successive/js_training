let str = "abbcddecabs";
let arr = Array(123).fill(0);
let ansString = "";

for (let i = 0; i < str.length; i++) {
  arr[str.charCodeAt(i)]++;
}

for (let i in arr) {
  if (arr[i] !== 0) {
    ansString += String.fromCharCode(i) + arr[i] + " ";
  }
}
console.log(ansString);