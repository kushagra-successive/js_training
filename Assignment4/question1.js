let str = "Hello Yellow";
let ansString = "";
for (let i = 0; i < str.length; i++) {
  if (!ansString.includes(str[i])) {
    ansString += str[i];
  }
}
console.log(ansString);
