let str = "hello john doe";
str = str.toLowerCase();
let newArray = str.split(" ");
for (let i = 1; i < newArray.length; i++) {
  let str1 = newArray[i];
  let updatefirstchar = str1[0].toUpperCase() + str1.slice(1, str1.length);
  newArray[i] = updatefirstchar;
}
let ansstr = newArray.join(" ");
console.log(ansstr);
