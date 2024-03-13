//program to convert given string in camel case ("hello john doe" => helloJohnDoe)

let str = "hello john doe";
str = str.toLowerCase(); //first it will make lowercase to full string
let newArray = str.split(" "); //slit by spaces
for (let i = 1; i < newArray.length; i++) {
  // we have to make camel case so iterate from 1
  let str1 = newArray[i]; //whole string from index one
  let updatefirstchar = str1[0].toUpperCase() + str1.slice(1, str1.length); //it make first character in upperCase then add make substring of rest of characters and then join it
  newArray[i] = updatefirstchar;
}
let ansstr = newArray.join(""); //convert into string from array by
console.log(ansstr);
