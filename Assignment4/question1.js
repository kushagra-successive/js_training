//program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")

const str = "Hello Yellow";
let ansString = ""; //empty string to insert the new values
for (let i = 0; i < str.length; i++) {
  if (!ansString.includes(str[i])) {
    //.includes will only insert characters which is not present
    ansString += str[i];
  }
}
console.log(ansString);
